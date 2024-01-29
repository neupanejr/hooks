import { PDFViewer } from "@react-pdf/renderer";
import "./App.css";
import Hash from "./pages/cryptography/Cryptography";
import CryptographyExample from "./pages/cryptography/CryptographyExample";
// import State from './hooks/changestate/State'
// import SpreadOperator from './hooks/spreadoperator/SpreadOperator'
// import ChangeName from './hooks/ChangeName'
// import Hooks from './hooks/Hooks'
// import Toggle from './hooks/Toggle'
// import ChangeCount from './hooks/changecount/ChangeCount'
// import HooksArray from './hooks/useStateArray/HooksArray'
// import Crud from './pages/Crud'
// import BishalEffects from './pages/bishaleffects/BishalEffects'
// import Bishal from './pages/filter&map/FilterMap'

// import Game from './pages/game/Game'
// import RandomNumberGame from './pages/game/RandomNumberGame'
// import LocalStorage from './pages/localstorage/LocalStorage'
// import Login from './pages/login/Login'
// import LoginNew from './pages/login/LoginNew'
// import SimpleTable from './pages/mui/SimpleTable'
import CartBag from "./pages/usereducer/CartBag";
// import PasswordForm from './password/PasswordForm'
import TimeImage from "./timeimage/TimeImage";
import MyDocument from "./mydocument/myDocument";
import { Box } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";

function App() {
  return (
    <>
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
      <img
        src="https://www.google.com/logos/doodles/2023/new-years-eve-2023-6753651837109995-ladc.gif"
        alt="googleAnimation"
      />
      {/* <State name="Google"
               company="Apple"
               Brand= "Iphone"
               price= {20}
         /> */}
      {/* <LocalStorage /> */}
      {/* <Game /> */}
      {/* <SimpleTable /> */}
      {/* <RandomNumberGame /> */}
      {/* <Hash /> */}
      {/* <CryptographyExample /> */}
      <Box
        sx={{
          background: `linear-gradient(90deg, #FFA500, #FF0000, #FFFFFF)`,
          p: 2,
          m: 2,
          border: 1,
          borderRadius: 8,
        }}
      >
        <h1>My PDF Demo</h1>
        <PDFViewer>
          <MyDocument />
        </PDFViewer>
      </Box>
    </>
  );
}
export default App;
