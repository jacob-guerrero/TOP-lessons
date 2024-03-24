import { useState } from 'react'
import './App.css'

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)

  return (
    <>
      <h1>Animals:</h1>
      <ul>
        {animalsList}
      </ul>
    </>
  )
}

export default App
