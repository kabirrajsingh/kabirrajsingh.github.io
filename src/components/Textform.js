import React from 'react';
export default function Textform(props) {
    const [text,setText]=React.useState("")
    function textChange(event){
        setText(event.target.value)
        console.log(text)
    }
    function handleUpCase(){
        let newtext=text.toUpperCase()
        setText(newtext)
        props.alertHandler("Converted to uppercase",'success')
    }
    function handleLowCase(){
        let newtext=text.toLowerCase()
        setText(newtext)
        props.alertHandler("Converted to lowercase",'success')
    }
    function handleClearText(){
        setText("")
        props.alertHandler("All clear",'danger')
    }
    const wordHandler=(text)=>{
        if(text.length===0) return 0
        else{
            return(
                text.split(" ").length
            )
        } 
    }
    const durationHandler=(text)=>{
        if(text.length===0) return 0
        else{
            return(
            
                0.008*text.split(" ").length
            )
        } 
    }
    return(
        <>
        <div className="container">
            <h1 className={`text-${props.mode==='dark'? 'light':'dark'}`}>{props.title}</h1>
            <div className="mb-3">
                <textarea name="" id="" cols="30" rows="10" className="form-control" value={text} onChange={textChange}>
                </textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpCase}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowCase}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
        </div>
        <div className={`container my-3 text-${props.mode==='dark'? 'light':'dark'}`}>
            <h2>Your text summary</h2>
            <p>{wordHandler(text)} Words and {text.length} characters</p>
            <p> {durationHandler(text)} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
};
