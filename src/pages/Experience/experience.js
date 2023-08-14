import "./_experience.scss";
import "./_experienceRespo.scss";
import { MdArrowRight } from "react-icons/md";

export const Experience = () => {
    return (
        <div className="Experience container-md" id="experience">
            <h1 className="title">EXPERIENCE</h1>
            <div className="tabs container-md">
                <div className="left">
                    <div className="list-group" id="list-tab" role="tablist">
                        <a
                            className="lists active"
                            id="list-home-list"
                            data-bs-toggle="list"
                            href="#list-home"
                            role="tab"
                            aria-controls="list-home"
                        >
                            Education
                        </a>
                        <a
                            className="lists "
                            id="list-profile-list"
                            data-bs-toggle="list"
                            href="#list-profile"
                            role="tab"
                            aria-controls="list-profile"
                        >
                            Work
                        </a>
                    </div>
                </div>
                <div className="right">
                    <div className="tab-content" id="nav-tabContent">
                        <div
                            className="prod tab-pane fade show active"
                            id="list-home"
                            role="tabpanel"
                            aria-labelledby="  list-home-list"
                        >
                            <div className="tableu">
                                <div className="learn">
                                    <h1><span className="icon"><MdArrowRight /></span>LIONSGEEK</h1>
                                    <div className="content">
                                        <h5>2023-Now</h5>
                                        <h6>Ain sbaa</h6>
                                        <p>A training program for a period of (6 months) in person to provide practical skills and modern knowledge in the areas of web development</p>
                                    </div>
                                </div>
                                <div className="learn">
                                    <h1><span className="icon"><MdArrowRight /></span>DUST ( Sciences et Techniques)</h1>
                                    <div className="content">
                                        <h5>2019-2022</h5>
                                        <h6>Mohammadia</h6>
                                        <p>Diploma of University Studies in Science and Technology, Mathematics, Computer Science and Physics (MIP)</p>
                                    </div>
                                </div><div className="learn">
                                    <h1><span className="icon"><MdArrowRight /></span>Baccalauréat Sciences</h1>
                                    <div className="content">
                                        <h5>2018-2019</h5>
                                        <h6>lycee dakhla -sidi moumen</h6>
                                        <p>Baccalaureate in physical sciences with honors </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div
                            className="prod tab-pane fade"
                            id="list-profile"
                            role="tabpanel"
                            aria-labelledby="list-profile-list"
                        >
                            <div className="tableu">
                                <div>
                                    <div className="learn">
                                        <h1><span className="icon"><MdArrowRight /></span>HANDDEVS</h1>
                                        <div className="content">
                                            <h5>2022-2023</h5>
                                            <p>We are a dynamic team of five, comprised of skilled programmers and talented designers. Our expertise flourishes in the world of freelancing, where we transform project concepts into impeccable final products.</p>
                                        </div>
                                    </div>
                                    <div className="learn">
                                        <h1><span className="icon"><MdArrowRight /></span>TG developers</h1>
                                        <div className="content">
                                            <h5>2021-2022</h5>
                                            <h6>company-Germany</h6>
                                            <p>I worked with them remotely as a UI/UX designer</p>
                                        </div>
                                   
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        </div >
    )
}