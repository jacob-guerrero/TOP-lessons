import './App.css'
import StyledButton from './components/StyledButton'

function App() {

  return (
    <>
      <h1>Styling using CSS modules</h1>
      <div className="card">
        <button>No Styled</button>
        <StyledButton></StyledButton>
      </div>
    </>
  )
}

export default App
