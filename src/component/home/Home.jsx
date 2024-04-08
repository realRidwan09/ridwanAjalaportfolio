import React from 'react'
import "./Home.css"
import mypic from '../../assets/mypic.jpg'
import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <>

        <div id="nav">
            <div id="logo">RA</div>
                <div id="links">
                    <Link to={'./'}><span>Home</span></Link>
                    <Link to={'./about'}><span>About</span></Link>
                   <Link to={'/skills'}> <span>Tech Stack</span></Link>
                   <Link to = {'/project'}> <span>Projects</span></Link>
                    <Link to = {'/contact'}><span>Contact</span></Link>
                </div>

                {/* <div>
                    <button id="burgerMenu" onClick={burgerMenu}>
                    <img id="Burgermenu" src={menu} alt="menu.png" width={"30px"} />
                    </button>
                </div> */}
        </div>
        <div id='container'>
            <div className="legenddiv">
                <div className="left">
                    <div className="leftWrap">
                        <h2>Hi, I'am</h2>
                        <div>RIDWAN AJALA</div>
                        <p>I'am Software Developer</p>
                        <p> 
                            I'm a Junior software engineer who is energetic, thorough and <br />
                            passionate about building dependable and efficient project. Enthusiastic <br />
                            to generate innovative ideas and contribute to exciting projects by working with <br />
                            cross-functional teams. A quick learner with a solid foundation in software development <br />
                            principles and a dedication to staying up to date with emerging technologies.
                        </p>
                    </div>
                </div>
                <div className="right">
                    <div className="rightWrap">
                        <img id='pics' src={mypic} alt="picture" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}