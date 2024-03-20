import Group9 from "../../assets/Group9.png"
import Group10 from "../../assets/Group10.png"
import Group11 from "../../assets/Group11.png"
import Group12 from "../../assets/Group12.png"
import Group13 from "../../assets/Group13.png"
import Group14 from "../../assets/Group14.png"
import "./Skills.css"


export default function Skills(){

    return(
        <>
        <div className="coontainer">
            <div id="skillWrap">
                <h1>My Tech Stack</h1>
                <h3>Technology I have been working with recently</h3>
            </div>
            
            <span>
                <img src={Group9} alt="Group9" />
                <img src={Group10} alt="Group10" />
                <img src={Group11} alt="Group11" />
            </span>
            <br />
            <br />
            <span>  <img src={Group12} alt="Group12" />
                    <img src={Group13} alt="Group13" />
                    <img src={Group14} alt="Group14" />
            </span>
        </div>
        </>
    )
}