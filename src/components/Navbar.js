import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

//rfc shortcut 
 function Navbar(props) {

    console.log("Hi FROM NAVBAR =>"+props.mode);

    const colorBlock = (color)=>{
        // setcolorDiv('display:block');
    
        if(color==="blue"){
            console.log("Blue ln 11")
          document.body.style.backgroundColor='blue';
        }
        else if(color==='red')
        {console.log("RED ln 15")
          document.body.style.backgroundColor='red';
        }
        else if (color==='grey'){
            console.log("Green ln 19")
            document.body.style.backgroundColor='grey';
        }
        else if (color==='black'){
            console.log("Black ln 23")
            document.body.style.backgroundColor='black';
          }
        else if(color==='green'){
            console.log("Green ln27"); console.log("Green ln27")
            document.body.style.backgroundColor='green';
        }
        else{
            console.log("White ln")
            document.body.style.backgroundColor='white';
        }
      }
    
      console.log("Hi FROM NAVBAR Last=>"+props.mode);
      if(true){
        console.log("Hi FROM NAVBAR Last TRUE=>"+props.mode);
      }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */}
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/about">{props.aboutText}</a> */}
                            <Link className="nav-link" to="about">{props.aboutText}</Link>
                        </li>

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div className={`form-check form-switch mx-4 text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" id="mode"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>

                    {/* <div  style={{display : props.colorDiv}}> */}
                    <div id='text'style={{display: props.colorDiv==='none'?'none':'block'}} >
                        <button type="button" className="btn btn-primary btn-sm mx-1"  onClick={()=>colorBlock('blue')} >Blue</button>
                        <button type="button" className="btn btn-danger btn-sm mx-1"  onClick={()=>colorBlock('red')} >Red</button>
                        <button type="button" className="btn btn-secondary btn-sm mx-1" onClick={()=>colorBlock('grey')} >Grey</button>
                        <button type="button" className="btn btn-success btn-sm mx-1"  onClick={()=>colorBlock('green')} >Green</button>
                        <button type="button" className="btn btn-dark btn-sm mx-1 btn-outline-secondary" onClick={()=>colorBlock('black')}>Black</button>
                        <button type="button" className="btn btn-success btn-sm mx-1" style={{display:'none'}} onClick={colorBlock('white')} >none</button>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string };
    // Navbar.defaultProps={ title:"Title form Default ", aboutText:"About from default"};


export default Navbar