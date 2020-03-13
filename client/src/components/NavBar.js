import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode'

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false)
    const onClick = e => {
        e.preventDefault()
        console.log(document.querySelector('body').classList)
        setDarkMode(!darkMode)
    }
    return (
        <div>
           <button id='submit' onClick={onClick}>Enable Dark Mode</button>
        </div>
    );
};

export default NavBar;