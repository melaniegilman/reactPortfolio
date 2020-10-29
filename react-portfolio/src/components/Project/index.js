import React from 'react';

function Project() {
    const projects = [
        {
            name: 'Ask Father Time',
            image: require('../../assets/img/ask.png'),
            deployedLink: 'https://mighty-meadow-10557.herokuapp.com/login',
            repoLink: 'https://github.com/nosremetnarg/askFatherTime',
            description: 'Ask Father Time is a modern take on the vintage advice column.  Users can anonymously submit questions for Father Time (site admin) to answer.  Users may also communicate with one another inside of a live chat room.'
        },
        {
            name: 'News By The Map',
            image: require('../../assets/img/news.png'),
            deployedLink: 'https://adamkeyser45.github.io/newsbythemap/',
            repoLink: 'https://github.com/adamkeyser45/newsbythemap',
            description: 'News By The Map is a web application that brings you the latest news based off of a searched location using Google Maps.'
        },
        {
            name: 'Tech Blog',
            image: require('../../assets/img/blog.png'),
            deployedLink: 'https://mysterious-fjord-57455.herokuapp.com/',
            repoLink: 'https://github.com/melaniegilman/tech-blog',
            description: 'A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.'
        },
        {
            name: 'Budget Tracker',
            image: require('../../assets/img/budget.png'),
            deployedLink: 'https://powerful-crag-39646.herokuapp.com/',
            repoLink: 'https://github.com/melaniegilman/budget-tracker',
            description: 'Updating an existing budget tracker application to allow for offline access and functionality.'
        },
        {
            name: 'Taskmaster Pro',
            image: require('../../assets/img/task.png'),
            deployedLink: 'https://melaniegilman.github.io/taskmaster-pro/',
            repoLink: 'https://github.com/melaniegilman/taskmaster-pro',
            description: 'A productivity application that helps with scheduling throughout your busy month'
        },
        {
            name: 'Weather App',
            image: require('../../assets/img/weather.png'),
            deployedLink: 'https://melaniegilman.github.io/weather-app/',
            repoLink: 'https://github.com/melaniegilman/weather-app',
            description: 'This application is a simple, user friendly way to check the weather in any City! Persistent data hangs on to the users previously searched cities, so that the user can quickly revisit their favorite locations.'
        }
    ]

    return (
        <div >
            {projects.map(project => (
                <div className="row">
                    <div className="media border col-12" key={project.name}>
                        <div className="row">
                            <div className="project-img">
                                <img src={project.image} className="mr-3 p-2" alt=""/>
                            </div>
                            <div className="">
                                <div className="media-body">
                                    <h5 className="mt-0">{project.name}</h5>
                                    <p>{project.description}</p>
                                    <a className="btn btn-primary m-1 p-2" href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a>
                                    <a className="btn btn-primary m-1 p-2" href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Project;