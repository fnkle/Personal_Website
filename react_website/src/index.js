import { render } from '@testing-library/react';
import { Component, useState } from 'react';
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
    return <div class="subTitle" id={this.props.titleId}>
        <h2>{this.props.text}</h2>
    </div>
}

class UniversityProjects extends Component {
    render() {
        const Projects = [
            {
                id: "uniAssignment 1",
                title: 'Programming Using an Object-Orientated Language - Revision App',
                decription: "For this module our main assignment was to code a revision app for use in a school; this was my first introduction to the Java programming language. I made use of various OOP principals such as inheritance, abstract classes and interfaces in an attempt to create a highly cohesive application with low coupling. I am unable to share the code due to university policy",
                moduleMark: "84%",
                assignmentMark: "82%",
                date: "Year 1 Semester 2",
            },
            {
                id: "uniAssignment 2",
                title: "Introduction to Programming - Networking Assignment",
                description: "For this module we worked with Arduinos and Arduino C to make various applications. For the main assignment I had to make a program about communicating on a simulated network. We were provided with functions for use to communicate with the various 'hosts' over different channels.",
                moduleMark: "85%",
                assignmentMark: "83%",
                date: "Year 1 Semester 1",
            },
        ]


        let projectsHTML = Projects.map((project) => {
            return (
                <div className="project" id={project.id}>
                <h2>{project.title}</h2>
                <h3>Description</h3>
                <p>
                    {project.description}
                </p>
                <h3>Marks and Feedback</h3>
                <ul>
                    <li>Overall Module Mark: {project.moduleMark}</li>
                    <li>Programming Assignment Mark: {project.assignmentMark}</li>
                </ul>
                <h3>Date</h3>
                <p>{project.date}</p>
            </div>
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
    <SubTitle titleId="subTitle1" text="University Projects" />
    <UniversityProjects />
    </>
);



