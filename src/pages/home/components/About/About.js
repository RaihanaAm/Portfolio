import "./_About.scss"
import "./_aboutRespo.scss"
export const About = () => {
    return (
        <>
        <div className="navs d-none d-md-flex"></div>
        <div className="About ">
            <div className="hi">
                <p>Hi, my name is</p>
            </div>
            <div className="name">
                <h1 className="raihana">Raihana Amrani.</h1>
                <div>
                    <h2 className="line-1 anim-typewriter">Front-End Web Developer.</h2>
                </div>

            </div>
            <div className="description">
            <p>Hello there! My name is Raihana, and I'm a 22-year-old front-end developer. I'm passionate about creating engaging and user-friendly web experiences. With a keen eye for design and a love for coding, I enjoy bringing websites to life by crafting visually appealing and responsive interfaces. I constantly strive to stay up-to-date with the latest trends and technologies in the world of front-end development. When I'm not immersed in lines of code, you might find me exploring new design concepts or collaborating with others to build innovative digital solutions.</p>
                {/* <p>Highly creative front-end web developer proficient in HTML, CSS, and JavaScript, with a keen eye for design and a passion for crafting engaging user experiences. Adept at leveraging cutting-edge technologies and frameworks like Bootstrap and React  with expertise in creating visually stunning and responsive websites. Detail-oriented and committed to delivering  pixel-perfect results while adhering to the latest web standards.  Committed to staying ahead of industry trends and continuously improving skills. Let's collaborate to bring your digital visions to life !</p> */}
            </div>
            
        </div>
        </>
    )
}