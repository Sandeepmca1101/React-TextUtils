import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from "react";
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Link,
  Route,
  
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);
  const [colorDiv, setcolorDiv] = useState('none');

  const colorBlock = (color) => {
    console.log("colorBlock ' ");
    setcolorDiv('display:block');
  }

  const showAlert = (message, type) => {
    console.log("showAlert ' ");
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500);

  }
  const toggleMode = () => {
    console.log("Hi from Toggle Apps colorDiv value=" + colorDiv);
    if (mode === 'light') {
      console.log("Toggle mode ='Light' ");
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success");
      // document.getElementById('colorDiv').display.none();
      setcolorDiv('block');
      document.title = "TextUtils-Dark Mode";

    }
    else {
      console.log("Toggle mode ='Dark' ");
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      setcolorDiv('none');
      document.title = "TextUtils-Light Mode";
    }
  }
  const onload = () => {
    console.log("Onload ");
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Me" mode={mode} toggleMode={toggleMode} colorDiv={colorDiv} />
        <Alert alert={alert} />
        <div className="container my-3">

          {/* <About/> */}
          <Routes>
            <Route  path="/about" element={<About/>}></Route>
            <Route  path="/" element={<TextForm heading="Enter the text analyze" mode={mode} showAlert={showAlert} />}>
              
            </Route>
          </Routes>


          {/* <button className="btn btn-primary">Convert to Upper case </button> */}
          {/* <button className="btn btn-primary">Convert to lower class </button> */}
        </div>
      </Router>

    </>
  );
}

export default App;
