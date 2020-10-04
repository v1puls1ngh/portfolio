import React from 'react';

const ProjectDisplay = (props) => {
    return (
        <a href={props.url} rel="noopener noreferrer" style={{textDecoration: 'none', color: 'black'}} target='_blank'>
            <div style={{margin: '2rem', width: '170px'}}>
                <iframe title={props.title} src={props.url} allowFullScreen={false} style={{width:'160px', height: '80', display:'block', margin: '0 auto'}}>
                </iframe>
                <h3 style={{textAlign: 'center', marginTop: '0.5rem'}}>{props.title}</h3>
            </div>
        </a>
        
    )
}

export default ProjectDisplay;