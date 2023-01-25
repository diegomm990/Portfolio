import React from "react";
import { useSelector } from "react-redux";
import "./Projects.css";
import dosDagas from "../../imgs/dosDagas.jpeg";


const Projects = () => {
    let dark = useSelector((state) => {
        if(state){ 
            return state.darkMode}else{
              return false
            }
    })
    return (
        <div className={dark ? "Projects-Black" : "Projects-White"}>
            <h3 className={dark ? "MyProj-Black" : "MyProj-White"}>My Projects</h3>
            <div className={dark ? "IndProj-Black" : "IndProj-White"}>
                <div className="LogoBig">
                    <a href="https://henry-pf-iota.vercel.app/">
                        <img src={dosDagas} className="LogoProject" />
                    </a>
                </div>
                <div className="GralDescrip">
                        <p className={dark ? "ProjectDescrip-Black" : "ProjectDescrip-White"}>
                        An e-commerce developed for the sale of Grills and utensils corresponding to its use. In this web page you can see: 
                        </p>
                        <ul className={dark? "ToolsList-Black" : "ToolsList-White"}>
                            <li> Registration and Login.</li>
                            <li>Search, Filtering and Sorting.</li>
                            <li> Notification system.</li>
                            <li>Data Editing and Storage.</li>
                            <li>Payment Service.</li>
                            <li>Authentication. </li>
                            <li>Payment Service.</li>
                        </ul>
                </div>
            </div>
            <div className={dark ? "blackLine" : "whiteLine"}></div>
        </div>
    )
}

export default Projects;