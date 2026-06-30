import { useState } from "react"


export default function TextUtils(props) {

    const [text, settext] = useState("")

    function handleToUP() {

        let upperCase = text.toUpperCase()
        settext(upperCase)
        props.showAlert("convert to uppercase", "success")

    }


    function handleToLow() {

        let lowercase = text.toLowerCase()
        settext(lowercase)
        props.showAlert("convert to lowercase", "success")

    }

    function handleInput(event) {
        settext(event.target.value)
    }

    function clearText() {
        settext("")
        props.showAlert("clear all text ", "success")
    }

    function handleToCopyText() {
        let textBox = document.getElementById("box1").value
        navigator.clipboard.writeText(textBox)
        props.showAlert("copy text", "success")
    }

    function handleToRemoveSpace() {
        let removeTextSpace = text.replace(/\s+/g, ' ')
        settext(removeTextSpace)
        props.showAlert("remove extra space", "success")
    }



    return (
        <>

            <div className='container'>
                <div className="mb-3 my-2">
                    <h1 className="mb-4" style={{ color: props.mode === "light" ? "black" : "#fcfcfade", fontSize:"29px"}}> Try TextUtils - Word Counter, Character Counter Remove Extra Spaces</h1>
                    <textarea className="form-control" id="box1" value={text} style={{backgroundColor:props.mode=== "light"? "#f8f8f862" :"#adadad49", color:props.mode === "light" ? "black" : "white" }} rows="5" onChange={handleInput}></textarea>
                    <button disabled={text.length ===0} type='button' className='btn btn-primary my-2 mx-2' onClick={handleToUP}>Click To Uppercase</button>
                    <button disabled={text.length ===0} type='button' className='btn btn-primary my-2 mx-2' onClick={handleToLow}>Click To Lowercase</button>
                    <button disabled={text.length ===0} type='button' className='btn btn-primary my-2 mx-2' onClick={clearText}>Click To claer Text</button>
                    <button disabled={text.length ===0} type='button' className='btn btn-primary my-2 mx-2' onClick={handleToCopyText}>Click To copy text </button>
                    <button disabled={text.length ===0} type='button' className='btn btn-primary my-2 mx-2' onClick={handleToRemoveSpace}>Click To remove Extra space </button>





                </div>

                <div style={{ color: props.mode === "light" ? "black" : "#fcfcfade" }}>

                    <h1>Your Text Summery</h1>
                    <p>{text.split(/\s+/).filter((el) => { return el.length !== 0 }).length} word and character {text.length}</p>
                    <p>{Math.round(0.008 * text?.split(" ").length)} Minutes read</p>

                    <h2>Text Preview</h2>

                    <p>{text}</p>
                </div>


            </div>




        </>
    )

}
