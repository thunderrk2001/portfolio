import ParticleBackground from "./components/particleBg";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Info from './utils/userInfo';
import Navbar from "./components/navbar";

function App() {
    return (
        <Router basename="/portfolio" >
            <Navbar> </Navbar>
            <ParticleBackground></ParticleBackground>
            <Routes>
                <Route path='/' element={< Home />} > </Route>
                <Route path='*'
                    element={
                        (< div > No Page exists... </div>)
                    }
                >
                </Route>
            </Routes>
        </Router>
    )
}

export default App;