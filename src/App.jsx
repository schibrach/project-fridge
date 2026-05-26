import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import SearchIngredients from './components/SearchIngredients'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
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
    <div>
      <nav>
        <Routes>
          <Route path="/" element={<SearchIngredients savedIngredients={savedIngredients} setSavedIngredients={setSavedIngredients} />} />
          <Route path="/recipes" element={<RecipeList savedIngredients={savedIngredients} />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </nav>
    </div>
  )
}

export default App