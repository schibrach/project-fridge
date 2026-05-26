import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
// import SearchIngredients from './components/SearchIngredients'
import RecipeList from './components/RecipeList'
// import RecipeDetails from './components/RecipeDetails'
// import Footer from './components/Footer'
import './App.css'
// import Footer from "./components/Footer"

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
            <RecipeList savedIngredients={savedIngredients} />
        </main>
      </div>
    </div>
  )
};

export default App;