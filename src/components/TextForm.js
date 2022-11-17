import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText]= useState("Enter text for textArea field.")
 
    const handleClick = () =>{
      console.log("To Upper case executed. ", text);
      let newText = text.toUpperCase();
      setText(newText);
    }

    const handleOnChange = (event) =>{
      console.log("handle on change executed.")
      setText(event.target.value)
    }

    return (    
    <div className="container">
        <h3>{props.heading}</h3>
      <div className="mb-3"> 
      {/* value="This is a description." */}
        <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="3" > </textarea>
      </div>
      <button className="btn btn-primary" onClick={handleClick} >Upper Case</button>
      </div>
  );
}
