import React from "react";
import { turnDark, turnLigth } from "../../actions/actions";
import "./Nav.css"
import { useDispatch, useSelector } from "react-redux";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";


const Nav = ()=> {
    const dispatch = useDispatch()
    let darkStore = window.localStorage.getItem("dark");
    if(darkStore){
        if(darkStore === "blanco"){
            setTimeout(()=>{ dispatch(turnLigth())}, 20)
        }
    } else {
        window.localStorage.setItem("dark", "negro")
    }
    let dark = useSelector((state) => {
        if(state){ 
            return state.darkMode}else{
                return false
            }
        })
        const changeDark= () => {
            if(dark === true) {
                dispatch(turnDark())
                window.localStorage.setItem("dark", "blanco")
            } else {
                dispatch(turnDark())
                window.localStorage.setItem("dark", "negro")
            }
            console.log(window.localStorage.getItem("dark"));
    }
    let [toogle, setToogle] = useState(false)
    return (
        (dark ? <div className="nav-black">
            <div className="name-black">
                <h1 className="bigName-black">Diego Martinez</h1>
                <h3 className="info-black">Full Stack Web Developer</h3>
            </div>
             <FaIcons.FaBars className="bars-black" onClick={()=> setToogle(!toogle)}/>
            <div className={toogle ? "buttons-black-small" : "buttons-black"}>
                <a href="/" className="button-black">Home</a>
                <a href="/projects" className="button-black">Projects</a>
                <a href="/contact" className="button-black">Contact Me</a>
                <label className="switch" onChange={changeDark}>
                    <input type="checkbox"/>
                    <span className="slider"></span>
                </label>
            </div>
        </div> : <div className="nav-white">
            <div className="name-white">
                <h1 className="bigName-white">Diego Martinez</h1>
                <h3 className="info-white">Full Stack Web Developer</h3>
            </div>
            <FaIcons.FaBars className="bars-white" onClick={()=> setToogle(!toogle)}/>
            <div className={toogle ? "buttons-white-small" : "buttons-white"}>
                <a href="/" className="button-white">Home</a>
                <a href="/projects" className="button-white">Projects</a>
                <a href="/contact" className="button-white">Contact Me</a>
                <label className="switch" onChange={changeDark}>
                    <input type="checkbox"/>
                    <span className="slider"></span>
                </label>
            </div>
        </div>)
    )
}

export default Nav;