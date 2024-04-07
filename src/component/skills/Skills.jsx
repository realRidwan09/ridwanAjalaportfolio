import Group9 from "../../assets/Group9.png"
import Group10 from "../../assets/Group10.png"
import Group11 from "../../assets/Group11.png"
import Group12 from "../../assets/Group12.png"
import Group13 from "../../assets/Group13.png"
import typ from "../../assets/typ.png"
import "./Skills.css"



export default function Skills(){

    return(
        <>
        <div className="countainer">

            <div id="skillWrap">
                <h1>Skills</h1>
                <h3>Technology I have been working with recently</h3>
            </div>
            
            <div id="img">
                <div id="group9">
                    <img src={Group9} alt="Group9" width={"80px"} />
                    <h2>HTML 5</h2>
                </div>
                
                <div id="group10">
                    <img src={Group10} alt="Group10" width={"110px"}/>
                    <h2>CSS 3</h2>
                </div>

                <div id="group11">
                     <img src={Group11} alt="Group11" width={"80px"}/>
                    <h2>Javascript</h2>
                </div>

            </div>

            <br />
            
            <div id="img">  
                    <div id="group12">
                        <img src={Group12} alt="Group12" width={"80px"}/>
                        <h2>Github</h2>
                    </div>

                    <div id="group13">
                        <img src={Group13} alt="Group13" width={"80px"}/>
                        <h2>React</h2>
                    </div>
                   
                   <div id="group14">
                         <img src={typ} alt="typ" width={"80px"}/>
                        <h2>Typescript</h2>
                   </div>
            </div>
        </div>
    </>
    )
}