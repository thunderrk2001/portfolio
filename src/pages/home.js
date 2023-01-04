import Typed from "react-typed"
import ParticleBackground from "../components/particleBg";
function home(){

 return(
    <div>
    <ParticleBackground></ParticleBackground>
    <div className="Home-center">
    <Typed className="title"
      strings={[
            "Hey I'm Ritik Kumar.",
            "Some Pages will be added soon.",
            "I am Full stack developer."
          
          ]}
          typeSpeed={140}
          backSpeed={20}
          loop
        />
      
       <div className="links">
         <a href="https://github.com/thunderrk2001" target='_blank'>Github</a>
         <a href="https://leetcode.com/thunderrk2001/" target='_blank'>Leetcode</a>
         <a href="https://www.linkedin.com/in/ritik-kumar-a4226023b/" target='_blank'>LinkedIn</a>

       </div>
       <a id="resume-btn" href="https://drive.google.com/file/d/1bUssp-TB0I0snM7kOlYheF2D7AqXkTfV/view?usp=share_link"  target='_blank'>Resume   </a>
    </div>
    </div>
  
 )
}
export default home;