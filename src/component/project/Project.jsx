import React from "react"
import toDo from "../../assets/toDo.png"
import Calcul from "../../assets/Calcul.png"
import textcounter from "../../assets/textcounter.png"
import "./Project.css"


export default function Project(){

    return(
        <>
        <div className="conntainer">
            <h1>My Project</h1>
            <p>
             I have worked with cross functional team to achived the success of these projects.  
            </p>

            <ul>
                <li id="todo"> 
                    <img id="projectImg" src={toDo} alt="toDo.png" />

                     <p>
                          This project's features aid users in 
                          effectively managing their responsibilities.
                          It is simple for users to add new tasks or items 
                          to their to-do lists, delete them when finished, and
                          modify them as needed.
                          
                    </p>
                    <a href="https://to-dolist-project.vercel.app/">live preview</a>
                </li>

                <li id="calculate">  
                    <img id="projectImg" src={Calcul} alt="Calcul.png" />
                        <p>
                         The main purpose of this calculator project is to
                         carry out simple mathematical operations such as division,
                         addition, subtraction, multiplication, and percentage functions
                         to determine percentages of a given value.

                        </p>
                        <a href="https://65f9fd57ee790b2060ac1ab4--realridport.netlify.app/">live preview</a>
                        
                </li>

                <li id="Tcounter"> 
                    <img id="projectImg" src={textcounter} alt="textcounter.png" />

                     <p>
                        
                        Creating a text counter was an excellent method to begin
                        learning about input and output handling and basic string manipulation.
                        For this project, I used REACT, which offered simple routines for handling strings.
                          
                    </p>
                    <a href="https://textcounter-two.vercel.app/">live preview</a>
                </li>

               
            </ul>

        </div>

        </>
    )
}