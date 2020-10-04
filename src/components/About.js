import React from 'react';
import {Link} from 'react-router-dom';
import './About.css';
import creativity from '../pics/creativity-concept.jpg';
import html from '../logo pics/html.png';
import css3 from '../logo pics/css3.png';
import js from '../logo pics/js.png';
import react from '../logo pics/react.png';
import node from '../logo pics/node.png';
import mongodb from '../logo pics/mongodb.png';
import postgres from '../logo pics/postgres.png';
import python from '../logo pics/python.png';
import java from '../logo pics/java.png';
import c from '../logo pics/c.png';

const About = () => {
    return (
        <div className="about-container">
            <div className='about-image'>
                <img className='about-img' src={creativity} alt="Illustration on the about page"/>
            </div>
            <div className='about-content'>
                <div className='about-mainText'>
                    <h1>About Me</h1>
                    <p>
                        My name is Vipul Singh.
                        I am a Full Stack Engineer, Technology Enthusiast, and Blogger.
                        I have a degree in Electronics Engineering, and I am blessed
                        with an unending affinity to learning new things, which
                        equips me with tools to tackle software development problems successfully in a given time
                        frame.
                    </p>
                </div>
                <div className='about-skills'>
                    <h1>Skills</h1>
                    <img className="logo-img" src={html} alt="html logo" />
                    <img className="logo-img" src={css3} alt="css logo" />
                    <img className="logo-img" src={js} alt="js logo" />    
                    <img className="logo-img mongodb" src={react} alt="react logo" />    
                    <img className="logo-img" src={node} alt="react logo" />    
                    <img className="logo-img mongodb" src={mongodb} alt="react logo" />    
                    <img className="logo-img" src={postgres} alt="react logo" />    
                    <img className="logo-img" src={python} alt="react logo" />    
                    <img className="logo-img" src={java} alt="react logo" />    
                    <img className="logo-img" src={c} alt="react logo" />    
                </div>
                <Link className="about-to-contact" to='/contact'>Contact Me</Link>
            </div>
        </div>
    )
}

export default About;