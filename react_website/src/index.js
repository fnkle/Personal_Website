
import { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"


const root = ReactDOM.createRoot(document.getElementById('root'));

class Banner extends Component {
    render() {

        return (
            <div className='banner'>
                <h1>Finlay Ross</h1>
            </div>
        )
    }
}

const SubTitle = (props) => {
    return <div className="subTitle" id={props.titleId}>
        <h2>{props.titleText}</h2>
    </div>
}

class UniversityProjects extends Component {
    render() {
        const Projects = [
            {
                id: "uniAssignment1",
                title: "Programming Using an Object-Orientated Language - Revision App",
                description: "For this module our main assignment was to code a revision app for use in a school; this was my first introduction to the Java programming language. I made use of various OOP principals such as inheritance, abstract classes and interfaces in an attempt to create a highly cohesive application with low coupling. I am unable to share the code due to university policy",
                moduleMark: "84%",
                assignmentMark: "82%",
                date: "Year 1 Semester 2",
            },
            {
                id: "uniAssignment2",
                title: "Introduction to Programming - Networking Assignment",
                description: "For this module we worked with Arduinos and Arduino C to make various applications. For the main assignment I had to make a program about communicating on a simulated network. We were provided with functions for use to communicate with the various 'hosts' over different channels.",
                moduleMark: "85%",
                assignmentMark: "83%",
                date: "Year 1 Semester 1",
            },
        ]


        const projectsHTML = Projects.map((project) => {
            return (
                <div key={crypto.randomUUID()} className="project" id={project.id}>
                    <h2 key={crypto.randomUUID()}>{project.title}</h2>
                    <h3 key={crypto.randomUUID()}>Description</h3>
                    <p key={crypto.randomUUID()}>
                        {project.description}
                    </p>
                    <h3 key={crypto.randomUUID()}>Marks</h3>
                    <ul key={crypto.randomUUID()}>
                        <li key={crypto.randomUUID()}>Overall Module Mark: {project.moduleMark}</li>
                        <li key={crypto.randomUUID()}>Programming Assignment Mark: {project.assignmentMark}</li>
                    </ul>
                    <h3 key={crypto.randomUUID()}>Date</h3>
                    <p key={crypto.randomUUID()}>{project.date}</p>
                </div>
            )
        })

        return (
            <>{projectsHTML}</>
        )
    }
}


class PersonalProjects extends Component {
    render() {

        const Projects = [
            {
                title: "Snake",
                description: "I have developed a basic snake game using C++, it is not complete but was used in order for me to start working with C++ and CMake in conjunction with SFML",
                features: ["Wall collision", "Ability for user to modify values", "Tidy up code by making use of more functions"],
                image: "snake.png",
                projectid: "personalProject1",
                imgid:"image1",
                imgalt: "A screenshot of my snake game",
            },
            {
                title: "Personal Website",
                description: "An ongoing website of mine is this website in order to have a collection of my various personal projects. This will be updated as more projcts are created.",
                features: ["About me section", "Update colour scheme", "Convert to React.js"],
                image: "website.png",
                projectid: "personalProject2",
                imgid:"image2",
                imgalt: "A screenshot of an old version of my site",
            }
        ]



        const projectsHTML = Projects.map((project) => {
            return (
                <>
                    <div className="project" id={project.projectid}>
                        <h2>{project.title}</h2>
                        <h3>Description</h3>
                        <p>{project.description}</p>
                        <h3>Possible features</h3>
                        <ul>
                            {project.features.map((feature) => {
                                return <li>{feature}</li>
                            })}
                        </ul>

                    </div>
                    <div className="projectImage" id={project.imgid}>
                        <img src={project.image} alt={project.imgalt} />
                    </div>
                </>
            )
        })

        return (
            <>{projectsHTML}</>
        )
    }
}


root.render(
    <>
        <Banner />
        <SubTitle titleId="subTitle1" titleText="University Projects" />
        <UniversityProjects />
        <SubTitle titleId="subTitle2" titleText="Personal Projects" />
        <PersonalProjects />
    </>
);



