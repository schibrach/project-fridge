import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './RecipeDetails.css'

function RecipeDetails() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isSaved, setIsSaved] = useState(false)

  const saveRecipe = () => {
  const saved = JSON.parse(localStorage.getItem('savedRecipes')) || []

  const savedRecipe = {
    id: recipe.id,
    title: recipe.title,
    image: recipe.image
  }

  const alreadySaved = saved.some((item) => item?.id === recipe.id)

  if (!alreadySaved) {
    saved.push(savedRecipe)
    localStorage.setItem('savedRecipes', JSON.stringify(saved))
  }

  setIsSaved(true)
}

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
        )

        const data = await response.json()
        setRecipe(data)

        const saved = JSON.parse(localStorage.getItem('savedRecipes')) || []
        const alreadySaved = saved.some((item) => item?.id === data.id)

        setIsSaved(alreadySaved)

      } catch (error) {
        setError('Could not load recipe details')
      }

      setLoading(false)
    }

    getRecipeDetails()
  }, [id])

  if (loading) {
    return <p>Recipe is loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  if (!recipe) {
    return <p>Recipe was not found.</p>
  }

  return (
    <div className="recipe-details">

  <div className="recipe-actions">
    <Link to="/recipes" className="back-link">
      Back to recipes
    </Link>

    <button onClick={saveRecipe} className="save-button">
    {isSaved ? 'Saved!' : 'Save recipe'}
    </button>
  </div>

  <h1>{recipe.title}</h1>

  <img src={recipe.image} alt={recipe.title} />

      <p><strong>Ready in:</strong> {recipe.readyInMinutes} minutes</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>

  
  {(recipe.vegetarian || recipe.vegan || recipe.glutenFree || recipe.dairyFree) && (
    <div className="recipe-tags">
      {recipe.vegetarian && <span className="recipe-tag"> Vegetarian</span>}
      {recipe.vegan && <span className="recipe-tag"> Vegan</span>}
      {recipe.glutenFree && <span className="recipe-tag"> Gluten Free</span>}
      {recipe.dairyFree && <span className="recipe-tag"> Dairy Free</span>}
    </div>
  )}

      <h2>Ingredients</h2>
      <ul>
        {recipe.extendedIngredients?.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>

           <h2>Instructions</h2>

      {recipe.analyzedInstructions?.[0]?.steps?.length > 0 ? (
        <ol className="instructions-list">
          {recipe.analyzedInstructions[0].steps.map((step) => (
            <li key={step.number}>{step.step}</li>
          ))}
        </ol>
      ) : (
        <p>No instructions available.</p>
      )}
    </div>
  )}

export default RecipeDetails