import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './RecipeDetails.css'

function RecipeDetails() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
        )

        const data = await response.json()
        setRecipe(data)
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
      <h1>{recipe.title}</h1>

      <img src={recipe.image} alt={recipe.title} />

      <p><strong>Ready in:</strong> {recipe.readyInMinutes} minutes</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>

      <h2>Ingredients</h2>
      <ul>
        {recipe.extendedIngredients?.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>

           <h2>Instructions</h2>

      {recipe.analyzedInstructions?.[0]?.steps?.length > 0 ? (
        <ol className="instructions-list">
          {recipe.analyzedInstructions[0].steps[0].step
            .split('.')
            .filter((sentence) => sentence.trim() !== '')
            .map((sentence, index) => (
              <li key={index}>
                {sentence.trim()}.
              </li>
            ))}
        </ol>
      ) : (
        <p>No instructions available.</p>
      )}
    </div>
  )
}

export default RecipeDetails