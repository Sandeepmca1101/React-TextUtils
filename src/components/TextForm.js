import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper Case Click=>" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","Success");
    };
    const handlelowClick = () => {
        // console.log("Lower Case Click=>" + text);
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","Success");
    };
    const handleClearClick = () => {
        // console.log("handleClearClick Case Click=>" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Clear","Success");
    };
    const handleOnChange = (event) => {
        // console.log("handleOnChange");
        setText(event.target.value);
        console.log("text After updation =>" + text);
        
    };

    const handleCopyClick  = ()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);

    }
    const handleremoveSpaceClick = () => {
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space removed ","Success");

    }
    const [text, setText] = useState("");
    // setText("ll");

    return (
        <>
            <div className="container"  style={{color : props.mode==='dark'?'black':'white'}}> 
                <h1 style={{color : props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
                <div className="mb-3">
                    <div>
                        {" "}
                        <textarea className="form-control" id="mybox" rows="8" onChange={handleOnChange}
                            value={text} placeholder="Enter Text here"
                            style={{backgroundColor : props.mode==='dark'?'grey':'white' , color : props.mode==='dark'?'white':'black'}}
                        ></textarea>
                    </div>
                    <div className="container margin-top"  >
                        <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>To Upper Case </button>
                        <button className="btn btn-primary mx-1 my-2" onClick={handlelowClick}>To Lower Case</button>
                        <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear</button>
                        <button className="btn btn-primary mx-1 my-2" onClick={handleCopyClick}>Copy</button>
                        <button className="btn btn-primary mx-1 my-2" onClick={handleremoveSpaceClick}>Remove Extra Space</button>
                    </div>
                </div>
            </div>
            <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
                <h3>Your Text Summary </h3>
                <p>
                    Words {text.split(" ").length - 1} and Lenth {text.length}
                </p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h3>Preview </h3>
                <p>{text.length>1?text:'Enter Something....'}</p>
            </div>
        </>
    );
}
