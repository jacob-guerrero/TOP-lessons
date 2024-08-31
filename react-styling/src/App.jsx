import './App.css'
import StyledBtnComp from './components/StyledBtnComp'
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
        <StyledBtnComp href="#">Default Button</StyledBtnComp>
        <StyledBtnComp primary="true" href="#">Primary Button</StyledBtnComp>
      </div>
    </>
  )
}

export default App
