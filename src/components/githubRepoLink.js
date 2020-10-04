import React from 'react';
import Folder from '../pics/blueFolder.png';
import './githubRepoLink.css';
const GithubRepoLink = (props) => {
    return(
        <a className='repo-link' href={props.url} target='_blank' rel="noopener noreferrer">
            <div className='repo-link-container'>
                <img src={Folder} alt='folder'/>
                <h3 style={{margin: '1rem 0', color:'black'}}>{props.name}</h3>
            </div>
        </a>
    )
}

export default GithubRepoLink;