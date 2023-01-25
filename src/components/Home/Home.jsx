import React from "react";
import { useSelector } from "react-redux";
import "./Home.css"
import Footer from "../Footer/Footer";
import photo from "../../imgs/Diego.jpeg";
import dosDagas from "../../imgs/dosDagas.jpeg"
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";


const Home = () => {
    let dark = useSelector((state) => {
        if(state){ 
            return state.darkMode}else{
              return false
            }
    })
    return (
       (dark? <div className="list">
                <div className="home-black">
                <div className="main">
                    <div className="d1"></div>
                    <div className="d2"></div>
                    <div className="d3"></div>
                    <div className="d4"></div>
                </div>
                <div className="personal">
                    <img src={photo} alt="Diego Martinez" className="image" />
                    <h3 className="nameB-black">Welcome! I'm Diego Martinez Margalef, a young software developer from Buenos Aires, Argentina.
                    <br />
                    This is my personal website and portfolio: Here you will find all my projects and some aspects about myself.</h3>
                </div>
            </div>
                <div className="toolsBig-black">
                <h3>Some Tools</h3>
                <div className="tools-black">
                    <AiIcons.AiFillHtml5 className="minitools" />
                    <FaIcons.FaCss3Alt className="minitools"/>
                    <SiIcons.SiJavascript className="minitools"/>
                    <FaIcons.FaReact className="minitools"/>
                    <SiIcons.SiRedux className="minitools"/>
                    <BiIcons.BiGitMerge className="minitools"/>
                    <FaIcons.FaBootstrap className="minitools"/>
                    <FaIcons.FaNodeJs className="minitools"/>
                    <SiIcons.SiFirebase className="minitools"/>
                    <SiIcons.SiMongodb className="minitools"/>
                    <SiIcons.SiPostgresql className="minitools"/>
                    <SiIcons.SiMysql className="minitools"/>
                </div>
                </div>
                <div className="projects-black">
                    <h3>Some of my projects</h3>
                    <div className="projects-list-black">
                        <a href="https://henry-pf-iota.vercel.app/">
                            <img src={dosDagas} className="dosDagas" />
                        </a>
                    </div>
                </div>
            <Footer />

            </div>

             : 
            <div className="list">
            <div className="home-white">
                <div className="main">
                    <div className="d1"></div>
                    <div className="d2"></div>
                    <div className="d3"></div>
                    <div className="d4"></div>
                </div>
                <div className="personal">
                    <img src={photo} alt="Diego Martinez" className="image" />
                    <h3 className="nameB-white">Welcome! I'm Diego Martinez Margalef, a young software developer from Buenos Aires, Argentina.
                    <br />
                    This is my personal website and portfolio: Here you will find all my projects and some aspects about myself.</h3>
                </div>
            </div>
            <div className="toolsBig-white">
                <h3>Some Tools</h3>
                <div className="tools-white">
                    <AiIcons.AiFillHtml5 className="minitools" />
                    <FaIcons.FaCss3Alt className="minitools"/>
                    <SiIcons.SiJavascript className="minitools"/>
                    <FaIcons.FaReact className="minitools"/>
                    <SiIcons.SiRedux className="minitools"/>
                    <BiIcons.BiGitMerge className="minitools"/>
                    <FaIcons.FaBootstrap className="minitools"/>
                    <FaIcons.FaNodeJs className="minitools"/>
                    <SiIcons.SiFirebase className="minitools"/>
                    <SiIcons.SiMongodb className="minitools"/>
                    <SiIcons.SiPostgresql className="minitools"/>
                    <SiIcons.SiMysql className="minitools"/>
                </div>
            </div>
                <div className="projects-white">
                    <h3>Some of my projects</h3>
                    <div className="projects-list-white">
                        <a href="https://henry-pf-iota.vercel.app/">
                            <img src={dosDagas} className="dosDagas" />
                        </a>
                    </div>
                </div>
            <Footer />
            </div>)
    )
}

export default Home;