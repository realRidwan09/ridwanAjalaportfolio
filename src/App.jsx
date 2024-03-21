import "./App.css"
import Index from "/component/index/Index";
import Legend from "./component/legend/Legend";
import Skills from "./component/skills/Skills";
import About from "./component/about/About";
import Project from "/component/project/Project"
import Contact from "./component/contact/Contact";




function App(){
    return(
        <>
            <Index/>
            <Legend/>
            <About/>
            <Skills/>
            <Project/>
            <Contact/>
            
        </>
    )
}

export default App
