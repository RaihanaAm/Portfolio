import "./_aboutMe.scss"
import "./aboutMeRespo.scss"
import src from "../../assets/images/img.jpg"
import { MdArrowRight } from "react-icons/md";
export const AboutMe = () => {
    return (
        <>

            <div className="AboutMe container-md  ">
                <div className="image">
                    <img src={src} alt="" />
                </div>
                <div className="aboutt">
                    <div className="title">
                        <h1>About me</h1>
                        <p> My name is <span>Raihana</span> passion for turning designs into digital realities.<br /> My journey started in <span>2020</span>  when I began exploring UI/UX design. The thrill of transforming concepts into visuals ignited my interest in web development. In <span>2023</span>, I took a pivotal step by learning to code with <span>LionsGeek</span>. Now, I'm all about crafting seamless user experiences through code and design, with an ever-growing excitement for what's next.</p>
                    </div>
                    <div >
                        <ul>
                            <div>
                                <li><span className="icon"><MdArrowRight /></span><span className="title">Birthday :</span> 12 septembre 2001</li>
                                <li><span className="icon"><MdArrowRight /></span><span className="title">city :</span> Casablanca,Morrocco </li>
                                <li><span className="icon"><MdArrowRight /></span><span className="title">Degree :</span> Bac+2</li>
                            </div>
                            <div>
                                <li><span className="icon"><MdArrowRight /></span><span className="title">Age : </span> 22</li>
                                <li><span className="icon"><MdArrowRight /></span><span className="title">Phone :</span> +212 672 838 309</li>
                                <li><span className="icon"><MdArrowRight /></span><span className="title">Email :</span> <a href="">Raihana.amrani999@gmail.com</a></li>
                            </div>
                        </ul>
                    </div>
                    <div className="skills">
                        <h1>Here are a few technologies I’ve been working with recently:</h1>
                        <div className="skill">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>SASS</p>
                            <p>BOOTSTRAP</p>
                            <p>JAVASCRIPT</p>
                            <p>GIT</p>
                            <p>TERMINAL</p>
                            <p>REACT</p>
                            <p>GITHUP</p>
                            <p>LARAVEL</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
