import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from "react";
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
  
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);
  const [colorDiv, setcolorDiv] = useState('none');
  const [wordCount, setwordCount] = useState("zero");

  const colorBlock = (color) => {
    setcolorDiv('display:block');
  }

  const selectedColor = (selectedColor)=>{
    document.body.style.backgroundColor=selectedColor;

  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success");
      // document.getElementById('colorDiv').display.none();
      setcolorDiv('block');
      document.title = "TextUtils-Dark Mode";

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      setcolorDiv('none');
      document.title = "TextUtils-Light Mode";
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About Me" mode={mode} toggleMode={toggleMode} colorDiv={colorDiv}  selectedColor={selectedColor} wordCount={wordCount} />
        <Alert alert={alert} />
        <div className="container my-3">

          {/* <About/> */}
          {/* <Routes>
            <Route  path="/about" element={<About/>}></Route>
            <Route  path="/" element={<TextForm heading="Enter the text analyze" mode={mode} showAlert={showAlert} />}>
               */}
               <TextForm heading="Try TextUtils-word counter, character counter,remove extra spaces" mode={mode} showAlert={showAlert}  />
            {/* </Route>
          </Routes> */}


          {/* <button className="btn btn-primary">Convert to Upper case </button> */}
          {/* <button className="btn btn-primary">Convert to lower class </button> */}
        </div>
      {/* </Router> */}

    </>
  );
}

export default App;
