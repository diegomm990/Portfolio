import React from "react";
import "./Footer.css";
import { useSelector } from "react-redux";
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";


const Footer = () =>{
    let dark = useSelector((state) => {
        if(state){ 
            return state.darkMode}else{
              return false
            }
    })
    return (
        <div className={dark ? "footer-black":"footer-white"}>
            <div className={dark ? "social-black":"social-white"}>
                    <h3>Look me up</h3>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/diego-martinez-full-stack-developer">
                            <AiIcons.AiFillLinkedin className={dark? "icon-black":"icon-white"} />
                        </a>
                        <a href="https://github.com/diegomm990">
                            <AiIcons.AiFillGithub className={dark? "icon-black":"icon-white"}/>
                        </a>
                    </div>
                </div>
                <div className={dark ? "contact-black":"contact-white"}>
                    <h3>Contact Me</h3>
                    <div className="contact">
                        <div className="phone">
                            <AiIcons.AiFillPhone />
                            <h4>+54387511729</h4>
                        </div>
                        <div className="mail">
                            <SiIcons.SiGmail />
                            <h4>diegomm990@gmail.com</h4>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Footer;