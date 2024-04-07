import "./App.css"
import Nav from "./component/nav/Nav";
import Legend from "./component/legend/Legend";
import Skills from "./component/skills/Skills";
import About from "./component/about/About";
import Project from "./component/project/Project"
import Contact from "./component/contact/Contact";




function App(){
    return(
        <div>
            <Nav/>
            <Legend/>
            <About/>
            <Project/>
            <Skills/>
            <Contact/>
            
        </div>
    )
}

export default App
