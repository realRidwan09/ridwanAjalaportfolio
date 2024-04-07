import git from "../../assets/git.png"
import linkdin from "../../assets/linkdin.png"
import twitter from "../../assets/twitter.png"
import "./Contact.css"
export default function Contact(probs){

    return(
        <>
            

                <div className="conContainer">

                    <div id="soMediabase">

                        <div id="condiv">

                            <h1>Just say hi.</h1>

                            <p>I'm always open to discuss your project and talk about new things.</p>

                            <div id="pasocialmedia">

                                <div id="mail">
                                    <p>mail me at:</p>
                                    <h5>ridwanajala69@gmail.com</h5>
                                </div>
                                <div id="mediaWrap">
                                    <p> follow me:</p>
                                    <div id="media">
                                        <div><a href="https://twitter.com/@gedmum"> <img src={twitter} alt="twitter.png" width={"15px"} /></a></div>
                                        
                                        <div><a href="https://www.linkedin.com/in/ridwanajala"> <img src={linkdin} alt="linkdin.png" width={"15px"} /></a></div>

                                        <div> <a href="https://github.com/realRidwan09"> <img src={git} alt="git.png" width={"15px"} /></a></div>
                                    </div>
                                
                                </div>

                            </div>   
                        </div>
                        <form action="">
                        
                        <label id="email">Email:</label>
                        <input id="formail" type="text" placeholder="enter email address" /> 
                        <label id="message">Message:</label>
                        <textarea name="" id="textarea" cols="50" rows="10" placeholder="Type Your Message Here..."></textarea>

                        <button>Send message</button>
                    </form>
                    
                    </div>

                    
                    
                </div>

                   

           
        

            
        </>
    )
}
