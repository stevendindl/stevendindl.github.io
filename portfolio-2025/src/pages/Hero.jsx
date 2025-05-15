import React, { useState } from 'react';
import NavBar from "../components/nav-bar.jsx";
import light_logo from '../assets/light/text-logo.svg';
import me from '../assets/steeze.jpg';
import './Hero.css';

const Hero = () => {
    // Set a theme
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <div className={`hero-page ${theme}`}>
        <section className="hero-section intro">
            <NavBar />
            <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
            <img src={light_logo} alt="Steven Dindl" />
        </section>
        <section className="hero-section features">
            <p>Scroll down for more</p>
        </section>
        <section className="hero-section cta">
        </section>
        </div>
    );
};

export default Hero;