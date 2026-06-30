import React from "react";

export default function TextUtils(props) {
let style = {
  color: props.mode === "light" ? "black" : "white",
  backgroundColor: props.mode === "light" ? "white" : "#3f3f3f",
  border: props.mode === "light" ? "1px solid #adadad49" : "1px solid #adadad49"
}

let buttonStyle = {
  color: props.mode === "light" ? "black" : "white",
  backgroundColor: props.mode === "light" ? "white" : "#3f3f3f",

}

    return (
        <div className="container my-3 p-3" style={style}>
            <h1>About Us</h1>
            <div className="accordion my-4" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={buttonStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analye your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={style}>
                            <strong>This tool helps you analyze and transform your text quickly and efficiently.
                                It provides features such as word count, text conversion, and text preview..</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={buttonStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>browser compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={style} >

                            <strong>Fully compatible with all modern web browsers for a smooth user experience.
                                Optimized to perform consistently across desktop, tablet, and mobile devices.</strong>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
