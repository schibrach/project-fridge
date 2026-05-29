import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchRecipesByIngredients } from '../api/spoonacular';
import './RecipeList.css';

function RecipeList({ savedIngredients }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Hämta recept när ingredienser ändras eller sidan laddas in
  useEffect(() => {
    const fetchRecipes = async () => {
        try {
            setLoading(true);
            const data = await searchRecipesByIngredients(savedIngredients);
            setRecipes(data);
        } catch (err) {
            setError('Could not fetch recipes. Check your API-key.');
        } finally {
            setLoading(false);
        }
    };

        fetchRecipes();
    }, [savedIngredients]);

    // Visar meddelanden baserat på status
    if (loading) return <div className="loading">Searching for recipes...</div>
    if (error) return <div className="error">{error}</div>
    if (recipes.length === 0) return <div className="no-recipes">No recipes found. Try different ingredients!</div>

    // Visar listan med recept
    return (
        <div className="recipe-container">
            <h2>Recipe based on your ingredients:</h2>
            <div className="recipe-grid">
                {recipes.map(recipe => (
                    <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="recipe-card">
                        <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                        <h3>{recipe.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default RecipeList;