import React from "react"
import { Link } from "react-router-dom"

export default function Navbar(props) {

    let myStyle = {
        color:props.mode === "light" ? "black": "#fcfcfade",
    }
    

    return (
        <>
            <nav className={` navbar navbar-expand-lg navbar-${props.mode !== "light" ? "dark" : "light"}`} style={{
                backgroundColor: props.mode !== "light" ? "#2b2e2c1e" : "white",
                
            }} >
                <div className={`container-fluid`} style={myStyle}>
                    <Link className="navbar-brand" to ="/">TextUtils</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About Us</Link>
                            </li>
                        </ul>


                        <div className={`form-check form-switch mx-3 `} style={myStyle} >
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked={props.mode === "dark"} onChange={props.toglemode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.mode === "light" ? "light mode" : "dark mode"}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
