import Typed from "react-typed";
import TypingSentences from "../utils/typingSentences";
import './home.css'
import Projects from "../components/projects/projects-section";
function Home() {
    return (
        <div>
            <div className="Home-center">
                <div className="my-card">
                    <div className="imgbox">
                        <div className="img" />
                    </div>
                    <div className="my-details">
                        <h2 className="my-title">Ritik Kumar</h2>

                    </div>
                </div>
                <Typed
                    className="title"
                    strings={TypingSentences}
                    typeSpeed={140}
                    backSpeed={20}
                    loop
                />
                <div className="links">
                    <a
                        href="https://github.com/thunderrk2001"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        Github{" "}
                    </a>{" "}
                    <a
                        href="https://leetcode.com/thunderrk2001/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        Leetcode{" "}
                    </a>{" "}
                    <a
                        href="https://www.linkedin.com/in/ritik-kumar-a4226023b/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        LinkedIn{" "}
                    </a>
                </div>{" "}
                <a
                    id="resume-btn"
                    rel="noreferrer"
                    href="https://drive.google.com/file/d/1SG5spjmLcaJGaCd3-GuVeHk3gjr3HUAr/view"
                    target="_blank"
                >
                    {" "}
                    Resume{" "}
                </a>{" "}
            </div>{" "}
            <Projects> </Projects>


        </div>

    );
}
export default Home;
