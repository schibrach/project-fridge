import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './SavedRecipes.css'

function SavedRecipes() {
  const [savedRecipes, setSavedRecipes] = useState([])
  // Hämtar sparade recept
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedRecipes')) || []
setSavedRecipes(saved.filter((recipe) => recipe && recipe.id && recipe.title))
  }, [])
  // Valt recept tas bort från state & localstorage
  const removeRecipe = (id) => {
    const updatedRecipes = savedRecipes.filter((recipe) => recipe.id !== id)

    setSavedRecipes(updatedRecipes)
    localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes))
  }

return (
  <div className="saved-recipes">
    <h1>Saved Recipes</h1>

    {savedRecipes.length === 0 ? (
      <p>No saved recipes yet...</p>
    ) : (
      <div className="saved-recipes-list">
        {savedRecipes.map((recipe) => (
          <div key={recipe.id} className="saved-recipe-card">

            <img src={recipe.image} alt={recipe.title} />

            <div>
              <h2>{recipe.title}</h2>
            {/* Länk till saved recipes sidan */}
              <Link
                to={`/recipes/${recipe.id}`}
                className="view-recipe-link"
              >
                View recipe
              </Link>

            {/* Receptet från sparade recept tas bort*/}
              <button
                onClick={() => removeRecipe(recipe.id)}
                className="remove-button"
              >
                Remove
              </button>

            </div>
          </div>
        ))}
      </div>
    )}
  </div>
)
}

export default SavedRecipes