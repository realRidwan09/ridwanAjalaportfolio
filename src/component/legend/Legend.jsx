import React from 'react'
import "./Legend.css"
import mypic from '../../assets/mypic.jpg'

export default function Legend(){
    return(
        <>
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