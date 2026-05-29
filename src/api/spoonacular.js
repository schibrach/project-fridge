// API-nyckel från .env
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com';

// Sök recept baserat på ingredienser
export const searchRecipesByIngredients = async (ingredients) => {
    const ingredientsString = ingredients.join(','); // Gör array till en sträng
    const url = `${BASE_URL}/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredientsString}&number=12`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch recipes');
    }
    return response.json();
}


// Hämta detaljer för ett specifikt recept
export const getRecipeDetails = async (id) => {
    const url = `${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch recipe details');
    }
    return response.json();
}