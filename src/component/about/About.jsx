import "./About.css"

export default function About(){
    
    return(
        <>
        <div className="corntainer">
            <h1>About Me</h1>

            <p> 
                I'm a Junior software engineer who is energetic, thorough and <br />
                passionate about building dependable and efficient project. Enthusiastic <br />
                to generate innovative ideas and contribute to exciting projects by working with <br />
                cross-functional teams. A quick learner with a solid foundation in software development <br />
                principles and a dedication to staying up to date with emerging technologies.
            </p>

            <h1>Exprience</h1>
            
                <div className="exprienceWrap">
                    <h4>Boot Camp</h4>
                    <div id="exprience">
                        <span id="sail">Sail Innovation Lab</span>
                        <span id="year">2024</span>
                    </div>

                    <ul id="ulAbt">
                        <li id="liAbt">Designed a to-do list application using HTML, CSS, and Javascript in a team of five.</li>
                        <li id="liAbt">Created and developed a functioning calculator using HTML and CSS.</li>
                        <li id="liAbt">Use React to create a sign-up and login page.</li>
                    </ul>
                </div>
            


        </div>
        </>
    )
}