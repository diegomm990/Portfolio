import React from "react";
import { useSelector } from "react-redux";
import "./Contact.css";
import * as AiIcons from "react-icons/ai"
const Contact = () => {
    let dark = useSelector((state) => {
        if(state){ 
            return state.darkMode}else{
              return false
            }
    })
    return ( 
        <div className={dark ?"contactBig-black" : "contactBig-white" }>
            <h3 className={dark ? "titleContactBlack" : "titleContactWhite" }>Contact Me!</h3>
            <div className="blockContainer">
                <div className={dark ? "blackBlock" : "whiteBlock"}>My Whatsapp</div>
                <a href="https://wa.link/6ocubx" className={dark ? "blackIcon" : "whiteIcon"}><AiIcons.AiOutlineWhatsApp/></a>
                <a href="mailto:diegomm990@gmail.com?subject=Interested%20in%20your%20talent&body=Hi%20Diego%2C%20im%20interested%20in%20knowing%20more%20about%20you" className={dark ? "blackIcon" : "whiteIcon"}><AiIcons.AiOutlineMail/></a>
                <div className={dark ? "blackBlock" : "whiteBlock"}>My Mail</div>
                <div className={dark ? "blackBlock" : "whiteBlock"}>My LindekIn Profile</div>
                <a href="https://wa.link/6ocubx" className={dark ? "blackIcon" : "whiteIcon"}><AiIcons.AiOutlineLinkedin/></a>
                <a href="https://wa.link/6ocubx" className={dark ? "blackIcon" : "whiteIcon"}><AiIcons.AiFillGithub/></a>
                <div className="blackBlock">My GitHub Profile</div>
            </div>
        </div>
    )
}

export default Contact;