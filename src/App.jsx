import './App.css'
import State from './hooks/changestate/State'
// import SpreadOperator from './hooks/spreadoperator/SpreadOperator'
// import ChangeName from './hooks/ChangeName'
// import Hooks from './hooks/Hooks'
// import Toggle from './hooks/Toggle'
// import ChangeCount from './hooks/changecount/ChangeCount'
import HooksArray from './hooks/useStateArray/HooksArray'
import Crud from './pages/Crud'
import BishalEffects from './pages/bishaleffects/BishalEffects'
import Bishal from './pages/filter&map/FilterMap'
import Game from './pages/game/Game'
import RandomNumberGame from './pages/game/RandomNumberGame'
import LocalStorage from './pages/localstorage/LocalStorage'
import Login from './pages/login/Login'
import LoginNew from './pages/login/LoginNew'
import SimpleTable from './pages/mui/SimpleTable'
// import PasswordForm from './password/PasswordForm'
import TimeImage from './timeimage/TimeImage'

function App() {
 
  return (
  
      <div>
        {/* <Hooks /> */}
        <TimeImage />
        {/* <ChangeName />
        <ChangeCount />
        <Toggle />
        <PasswordForm /> */}
        {/* <HooksArray /> */}
        {/* <SpreadOperator /> */}
        {/* <Bishal />
        <BishalEffects /> */}
        {/* <Crud /> */}
        {/* <Login /> */}
        {/* <LoginNew /> */}
        {/* import two state confirm that these both works separately */}
        {/* <State /> */}
        <img src='https://www.google.com/logos/doodles/2023/new-years-eve-2023-6753651837109995-ladc.gif' alt='googleAnimation'/>
        {/* <State name="Google"
               company="Apple"
               Brand= "Iphone"
               price= {20}
         /> */}
         {/* <LocalStorage /> */}
         {/* <Game /> */}
         {/* <SimpleTable /> */}
         {/* <RandomNumberGame /> */}
   </div>
  )
}
export default App