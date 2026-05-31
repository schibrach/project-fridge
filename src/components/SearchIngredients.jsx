import { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchIngredients.css";

function SearchIngredients({ savedIngredients, setSavedIngredients }) {
  // Sparar texten som användaren skriver i inputfältet
  const [ingredientInput, setIngredientInput] = useState("");

  // Sparar ett meddelande som visas om användaren skriver en dubblett
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Trim tar bort extra mellanslag före och efter texten
    const newIngredient = ingredientInput.trim();

    if (newIngredient === "") {
      return;
    }

    // Kontrollerar om ingrediensen redan finns i listan
    if (savedIngredients.includes(newIngredient)) {
    setMessage("Den här ingrediensen finns redan i listan.");
    setIngredientInput("");
    return;
}

     // Lägger till den nya ingrediensen i listan
    setSavedIngredients([...savedIngredients, newIngredient]);
     // Tömmer inputfältet efter att ingrediensen lagts till
    setIngredientInput("");
    setMessage("");
  }

  function removeIngredient(indexToRemove) {
    const updatedIngredients = savedIngredients.filter(
      (ingredient, index) => index !== indexToRemove
    );

    setSavedIngredients(updatedIngredients);
    setMessage("");
  }

  // Rensar hela ingredienslistan
  function clearIngredients() {
  setSavedIngredients([]);
  setMessage("");
}

  return (

    <section className="search-ingredients">
      <h2>What ingredients do you have?</h2>
      <p>
         Add the ingredients you have at home to get recipe suggestions based on them
      </p>

      <form className="ingredient-form" onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="Example: tomato, cheese, rice"
          value={ingredientInput}
          onChange={(event) => setIngredientInput(event.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      {message && <p className="ingredient-message">{message}</p>}

{/* Ingredienslistan visas bara om användaren har lagt till minst en ingrediens */}
      {savedIngredients.length > 0 && (
        <div className="ingredient-list">
          <h3>Your ingredients</h3>

  <ul>
  {savedIngredients.map((ingredient, index) => (
    <li key={index}>
      <span>{ingredient}</span>

      <button
        type="button"
        className="remove-ingredient"
        onClick={() => removeIngredient(index)}
      >
        ×
      </button>
    </li>
  ))}
</ul>

{/* Knapp för att rensa hela ingredienslistan */}
<button
  type="button"
  className="clear-ingredients-button"
  onClick={clearIngredients}
>
  Clear all
</button>

<Link to="/recipes" className="search-recipes-link">
  Find recipes
</Link>
        </div>
      )}
    </section>
  );
}

export default SearchIngredients;