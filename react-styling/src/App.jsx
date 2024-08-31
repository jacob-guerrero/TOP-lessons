import './App.css'
import StyledBtnMod from './components/StyledBtnMod'

function App() {

  return (
    <>
      <h1>Styling</h1>
      <div className="card">
        <h2>Using CSS Modules</h2>
        <button>No Styled</button>
        <StyledBtnMod btnType='primary' btnLabel='Button'></StyledBtnMod>
        <StyledBtnMod btnType='secondary' btnLabel='Button2'></StyledBtnMod>
      </div>
      <div className="card">
        <h2>Using styled-components</h2>
        <button>No Styled</button>

      </div>
    </>
  )
}

export default App
