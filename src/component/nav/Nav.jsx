import React from 'react'
import "./Nav.css"
import menu from "../../assets/menu.png"
import { useState } from 'react'




export default function Nav(){

    const [togglemenu, setmenutoggle] = useState({links:""})

    const burgerMenu = ()=>{

    setmenutoggle(()=>{
        })}
    
    
    

    

    return(
        <>
        <div id="nav">
            <div id="logo">RA</div>
                <div id="links">
                    <span><a href="">Home</a></span>
                    <span><a href="">About</a></span>
                    <span><a href="">Tech Stack</a></span>
                    <span><a href="">Projects</a></span>
                    <span><a href="">Contact Me</a></span>
                </div>

                <div>
                    <button id="burgerMenu" onClick={burgerMenu}>
                    <img id="Burgermenu" src={menu} alt="menu.png" width={"30px"} />
                    </button>
                </div>
        </div>
        </>
    )
}