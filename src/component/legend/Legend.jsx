import React from 'react'
import "./Legend.css"
import picture from '../../assets/picture.jpg'

export default function Legend(){
    return(
        <>
        <div id='container'>
            <div className="legenddiv">
                <div className="left">
                    <div className="leftWrap">
                        <h6>Hi, I'am</h6>
                        <div>RIDWAN AJALA</div>
                        <p>I'am Software Developer</p>
                        <button>Hire me</button>
                    </div>
                </div>
                <div className="right">
                    <div className="rightWrap">
                        <img id='pics' src={picture} alt="picture" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}