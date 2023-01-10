import ParticleBackground from "./components/particleBg";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Info from './utils/userInfo';

function App() {
    return ( <
            Router >
            <
            ParticleBackground > < /ParticleBackground> <
            div > Navbar < /div> <
            Routes >
            <
            Route path = '/portfolio'
            element = { < Home / > } > < /Route> <
            Route path = '/portfolio/abcd'
            element = {
                ( < div > 123 No Page exists... < /div>)}></Route >
                    <
                    Route path = '*'
                    element = {
                        ( < div > No Page exists... < /div>)}> <
                            /Route> <
                            /Routes> <
                            /Router>
                        )
                    }

                    export default App;