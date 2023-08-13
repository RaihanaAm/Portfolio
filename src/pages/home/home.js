import { AboutMe } from "../aboutMe/aboutMe"
import "./_home.scss"
import { About } from "./components/About/About"
export const Home =()=>{
    return(
        <div className="home">
            <About/>
            <AboutMe/>
            
        </div>
    )
}