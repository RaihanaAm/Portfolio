import { Experience } from "../Experience/experience"
import { AboutMe } from "../aboutMe/aboutMe"
import { Portfolio } from "../portfolio/portfolio"
import "./_home.scss"
import { About } from "./components/About/About"
export const Home =()=>{
    return(
        <div className="home">
            <About/>
            <AboutMe />
            <Experience/>
            <Portfolio/>
            
        </div>
    )
}