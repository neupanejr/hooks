import './App.css'
// import SpreadOperator from './hooks/spreadoperator/SpreadOperator'
// import ChangeName from './hooks/ChangeName'
// import Hooks from './hooks/Hooks'
// import Toggle from './hooks/Toggle'
// import ChangeCount from './hooks/changecount/ChangeCount'
import HooksArray from './hooks/useStateArray/HooksArray'
import BishalEffects from './pages/bishaleffects/BishalEffects'
import Bishal from './pages/filter&map/FilterMap'
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
        <HooksArray />
        {/* <SpreadOperator /> */}
        <Bishal />
        <BishalEffects />
   </div>
  )
}
export default App