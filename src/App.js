import ParticleBackground from "./components/particleBg";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Info from './utils/userInfo';

function App() {
    return ( <
            Router basename = "/portfolio" >
            <
            ParticleBackground > < /ParticleBackground> <
            div > Navbar < /div> <
            Routes >
            <
            Route path = '/'
            element = { < Home / > } > < /Route> <
            Route path = '*'
            element = {
                ( < div > No Page exists... < /div>)}> <
                    /Route> <
                    /Routes> <
                    /Router>
                )
            }

            export default App;