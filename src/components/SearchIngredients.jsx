import { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchIngredients.css";

function SearchIngredients({ savedIngredients, setSavedIngredients }) {
  // Sparar texten som användaren skriver i inputfältet
  const [ingredientInput, setIngredientInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Trim tar bort extra mellanslag före och efter texten
    const newIngredient = ingredientInput.trim();

    if (newIngredient === "") {
      return;
    }

     // Lägger till den nya ingrediensen i listan
    setSavedIngredients([...savedIngredients, newIngredient]);
     // Tömmer inputfältet efter att ingrediensen lagts till
    setIngredientInput("");
  }

  function removeIngredient(indexToRemove) {
    const updatedIngredients = savedIngredients.filter(
      (ingredient, index) => index !== indexToRemove
    );

    setSavedIngredients(updatedIngredients);
  }

  return (
    <section className="search-ingredients">
      <h2>Vad har du hemma?</h2>
      <p>
         Skriv in vad du har hemma så får du receptförslag baserat på dina ingredienser.
      </p>

      <form className="ingredient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Exempel: pasta, tomat, ost"
          value={ingredientInput}
          onChange={(event) => setIngredientInput(event.target.value)}
        />

        <button type="submit">Lägg till</button>
      </form>

{/* Ingredienslistan visas bara om användaren har lagt till minst en ingrediens */}
      {savedIngredients.length > 0 && (
        <div className="ingredient-list">
          <h3>Dina ingredienser</h3>

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

          <Link to="/recipes" className="search-recipes-link">
            Hitta recept
          </Link>
        </div>
      )}
    </section>
  );
}

export default SearchIngredients;