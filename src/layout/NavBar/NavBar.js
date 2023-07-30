import "./_NavBar.scss"
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { SlSocialFacebook } from 'react-icons/sl';
import { BiLogoInstagram } from 'react-icons/bi';


export const NavBar = () => {
    return (
        <div className="navbar">
            <div className="resume ">
                <ul className="">
                    <li className="nav-item"><a className="nav-link" href=""><span>01.</span> <h6>About</h6></a></li>
                    <li className="nav-item"><a className="nav-link" href=""><span>02.</span> <h6>Experience</h6></a></li>
                    <li className="nav-item"><a className="nav-link" href=""><span>03.</span> <h6>Portfolio</h6></a></li>
                    <li className="nav-item"><a className="nav-link" href=""><span>04.</span> <h6>Contact</h6></a></li>
                    <button>Resume</button>
                </ul>
            </div>
            <div className="icons">
                <a className="nav-link" href=""><FiGithub /></a>
                <a className="nav-link" href=""><FiLinkedin /></a>
                <a className="nav-link" href=""><SlSocialFacebook /></a>
                <a className="nav-link" href=""><BiLogoInstagram/></a>

                <div></div>
            </div>
            <div className="email">
                <a href="" className="nav-link">Raihana.amrani999@gmail.com</a>
            </div>
            <div className="di"></div>

        </div>
    )
}