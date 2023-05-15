import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const handleUpClick = () => {

        let newtext = text.toUpperCase();
        setText(newtext)
    }

    const handleLowClick = () => {

        let newtext = text.toLowerCase();
        setText(newtext)
    }

    const handleClearClick = () => {
        setText("")
    }

    const onchangeHandler = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("enter text here");    //using useState here.

    return (
        <div>

            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="myBox" rows="8" onChange={onchangeHandler} value={text}></textarea>
            </div>

            <button className="btn btn-primary mx-3" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
            <button className="btn btn-primary mx-3" onClick={handleLowClick}>CONVERT TO LOWERCASE</button>
            <button className="btn btn-primary" onClick={handleClearClick}>CLEAR TEXT</button>

            <div className="container my-3">
                <h1>YOUR TEXT SUMMARY</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>TIME TAKEN TO READ THIS TEXT: {0.008*text.split(" ").length} Minutes</p>
            </div>
        </div>
    )
}


TextForm.propTypes = {
    heading: PropTypes.string
}



