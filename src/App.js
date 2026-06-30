
import Navbar from "./components/Navbar";
import TextUtils from "./components/TextUtils";
import Alert from "./components/Alert";
import About from "./components/About.js"
import { useState } from "react";
import {
   HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom"


function App() {

  const [mode, setmode] = useState("light")
  const [alert, setAlert] = useState()

  function toglemode() {
    if (mode !== "dark") {
      setmode("dark");
      document.body.style.background = "#1c1c1cd4";
      showAlret("Dark mode enabled", "success");
    } else {
      setmode("light");
      document.body.style.background = "white";
      showAlret("Light mode enabled", "success");
    }
  }


  const showAlret = (mes, type) => {

    setAlert({
      mes: mes,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toglemode={toglemode} />
        <Alert alert={alert} />
        {/* <TextUtils mode={mode} showAlert={showAlret} /> */}
        <Routes>
          <Route path="/About" element={<About mode={mode} />}>
          </Route>
          <Route path="/" element={<TextUtils mode={mode} showAlert={showAlret} />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
