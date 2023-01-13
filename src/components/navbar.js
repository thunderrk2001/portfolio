import { useState } from 'react';
import './css/navbar.css';
const Navbar = () => {
    const [navStyle, setNavStyle] = useState('navbar');

    function changeNavStyle() {
        if (navStyle === 'navbar')
            setNavStyle('navbar navbar-mobile');
        else
            setNavStyle('navbar')
    }
    return ( <
        div className = { navStyle } >
        <
        div > < div className = 'myname' > Ritik Kumar < /div>

        <
        div id = 'menu-btn'
        className = "switch"
        onClick = { changeNavStyle } >
        <
        input type = "checkbox" / >
        <
        div >
        <
        span className = "line-1" / >
        <
        span className = "line-2" / >
        <
        span className = "line-3" / >
        <
        /div> <
        /div>

        <
        /div>

        <
        div className = 'menu' >
        <
        ul >
        <
        li > < a href = '#project' > Projects < /a></li >
        <
        li > < a href = '/' > Skills < /a></li >
        <
        li > < a href = '/' > Experience < /a></li >
        <
        /ul> <
        /div> <
        /div>
    )

}
export default Navbar;