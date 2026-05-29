import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import SearchIngredients from './components/SearchIngredients.jsx'
import RecipeList from './components/RecipeList'
//import RecipeDetails from './components/RecipeDetails.'
import Footer from './components/Footer'
import './App.css'

function App() {
  // localStorage för ingredienser
  const [savedIngredients, setSavedIngredients] = useState(() => {
    const saved = localStorage.getItem('ingredients')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('ingredients', JSON.stringify(savedIngredients))
  }, [savedIngredients])

  return (
    <div className="app-wrapper">
      <div className="content-container">
        <Header />

         <main>
          <Routes>
            <Route
              path="/"
              element={
                <SearchIngredients
                  savedIngredients={savedIngredients}
                  setSavedIngredients={setSavedIngredients}
                />
              }
            />

            <Route
              path="/recipes"
              element={<RecipeList savedIngredients={savedIngredients} />}
            />

            <Route
              path="/recipes/:id"
              element={<RecipeDetails />}
            />
          </Routes>
        </main>
      </div>
    </div>
  )
};

export default App;