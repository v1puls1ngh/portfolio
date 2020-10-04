import React from 'react';
import {Link} from 'react-router-dom';
import  design from '../pics/design-thinking.jpg';
import './Home.css';
const Home = () => {
    return(
        <div className="home-container">
            <div className='home-text'>
                <p>Hi,</p>
                <span>I am Vipul Singh, and</span>
                <p>I am a Software Developer and Technology Enthusiast.</p>
                <Link className="home-to-work" to="/work">Checkout my work</Link>
            </div>
            <div className="home-image">
                <img src={design} alt="An illustration"/>
            </div>
        </div>
    )
}

export default Home;