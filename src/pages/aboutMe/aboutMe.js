import "./_aboutMe.scss"
import src from "../../assets/images/img.jpg"
import { MdArrowRight } from "react-icons/md";
export const AboutMe = () => {
    return (
        <div className="AboutMe container">
            {/* <div><span>-----</span>01</div> */}
            <div className="image">
                <img src={src} alt="" />
            </div>
            <div className="aboutt">
                <div className="title">
                    <h1>About me</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsum vel ab distinctio minima placeat, provident numquam? Odit natus adipisci blanditiis quos qui fuga vero aspernatur. Officiis dolorum quas ipsam.</p>
                </div>
                <div >
                    <ul>
                    <div>
                        <li><span><MdArrowRight /></span><b>Age:</b>22</li>
                        <li><span><MdArrowRight /></span><b>Age:</b>22</li>
                        <li><span><MdArrowRight /></span><b>Age:</b>22</li>
                    </div>
                    <div>
                        <li><span><MdArrowRight /></span><b>Age:</b>22</li>
                        <li><span><MdArrowRight /></span><b>Age:</b>22</li>
                        <li><span><MdArrowRight /></span><b>Age:</b>22</li>
                    </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
