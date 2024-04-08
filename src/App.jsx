import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./component/home/Home";
import Skills from "./component/skills/Skills";
import About from "./component/about/About";
import Project from "./component/project/Project"
import Contact from "./component/contact/Contact";





function App(){
    return(
        <div>
            

            <BrowserRouter>
            <Home/>
                <Routes>
                    <Route path={'/'} element={ <About/>}/>
                    <Route path={'/project'} element={<Project/>}/>
                    <Route path={'/skills'} element={<Skills/>}/>
                    <Route path={'/contact'} element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
           
        
           
            
        </div>
    )
}

export default App
