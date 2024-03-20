import git from "../../assets/git.png"
import linkdin from "../../assets/linkdin.png"
import twitter from "../../assets/twitter.png"
import "./Contact.css"
export default function Contact(probs){

    return(
        <>
            <div className="conContainer">
                 <h1>Contact me</h1>

                <form action="">
                    
                    <label for="email">Email:</label>
                    <input id="formail" type="text" placeholder="enter email address" /> 
                    <label for="message">Message:</label>
                    <textarea name="" id="textarea" cols="50" rows="10" placeholder="Type Your Message Here..."></textarea>

                </form>

                <button>Send message</button>

                <div class="soMediabase">

                <h3> My social media link:</h3>
                    <div className="media">
                        <div><a href="https://twitter.com/@gedmum"> <img src={twitter} alt="twitter.png" /></a></div>
                        
                        <div><a href="https://www.linkedin.com/in/ridwanajala"> <img src={linkdin} alt="linkdin.png" /></a></div>

                        <div> <a href="https://github.com/realRidwan09"> <img src={git} alt="git.png" /></a></div>
                    </div>
                </div>
            
                


                <div id="nav">
                    <div id="logo">TFH</div>
                    <div id="links">
                        <span><a href="">Home</a></span>
                        <span><a href="About.jsx">About</a></span>
                        <span><a href="">Tech Stack</a></span>
                        <span><a href="">Projects</a></span>
                        <span><a href="">Contact Me</a></span>
                    </div>

                </div>

            </div>
            

            
        </>
    )
}