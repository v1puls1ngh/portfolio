import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GithubRepoLink from './githubRepoLink';
import ProjectDisplay from './projectdisplay.js';
import './work.css';

class Work extends Component{
    state = {
        projectList: [],
        githubRepos: [],
        error: false
    }
    componentDidMount(){
        fetch('https://api.github.com/users/vipulsinghofficial/repos').then(response => {
            return response.json();
        }).then(resData => {
            this.setState({
                githubRepos: resData
            })
        }).catch(err => {
            if (err) {
                this.setState({
                    error: err
                })
            }
        })


        fetch('https://portfolio-4752e.firebaseio.com/get-project-display.json').then(result => {
            return result.json();
        }).then(resData => {
            let responseData = []
            for (let key in resData) {
                responseData.push({
                    id: key,
                    title: resData[key]['title'],
                    url: resData[key]["url"]
                })                         
            }
            this.setState({
                projectList: responseData
            })
        }).catch(err => {
            if (err) {
                this.setState({
                    error: err
                })
            }
        });
    }
    render(){
        const projectList = this.state.projectList.map(item => {
            return <ProjectDisplay key={item.id} title={item.title} url={item.url} />
        })
        const listOfRepos = this.state.githubRepos.map(item => {
            return (
                <GithubRepoLink key={item.id} name={item.name} url={item.html_url}/>
            )
        })

        if (this.state.error) {
            return(
                <div style={{marginTop: '4rem'}} className="work-container">
                    <p className="error">Error occurred</p>
                </div>
            )
        }
        else {
            return(
                <div style={{marginTop: '4rem'}} className="work-container">
                    <div style={{margin: '2rem 0'}} className='project-display-container'>
                        <h2>Projects:</h2>
                        <section className='project-list'>
                            {projectList}
                        </section>
                    </div>
                    <div className='repo-container' style={{marginBottom: '2rem'}}>
                        <h2 style={{marginBottom: '2rem'}}>Github Repositories:</h2>
                        <section className='repo-list-container'>
                            {listOfRepos}
                        </section>
                    </div>
                    <div className='button'>
                        <Link className="work-to-about" to='/about'>About Me</Link>
                    </div>
                </div>
            )
        }
      
    }
}

export default Work;