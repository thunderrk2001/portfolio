import Typed from "react-typed";
import TypingSentences from '../utils/typingSentences';
function Home() {
return(
    <div>
    <div className="Home-center">
    <Typed className="title"
      strings={TypingSentences}
          typeSpeed={140}
          backSpeed={20}
          loop
        />
       <div className="links">
         <a href="https://github.com/thunderrk2001" target='_blank' rel="noreferrer">Github</a>
         <a href="https://leetcode.com/thunderrk2001/" target='_blank' rel="noreferrer">Leetcode</a>
         <a href="https://www.linkedin.com/in/ritik-kumar-a4226023b/" target='_blank' rel="noreferrer">LinkedIn</a>

       </div>
       <a id="resume-btn" rel="noreferrer" href="https://drive.google.com/file/d/1bUssp-TB0I0snM7kOlYheF2D7AqXkTfV/view?usp=share_link"  target='_blank'>Resume   </a>
    </div>
    </div>

 )
}
export default Home;