import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="project-card">
                    <h3>Project 1-Smart Farming Using IOT </h3>
                    <p>We have used Air quality of surrounding, Air pressure, light, humidity, temperature, soil moisture sensors which are embedded with Arduino and Gsm module.
We transfer the data to cloud from Arduino through Gsm module.
We send SMS to farmer when the threshold values of the crop goes beyond critical.
Farmer just needs to have internet connection to monitor his crops online from anywhere on earth.
</p>
                </div ><div className="project-card">
                <h3>Project 2-Developed a messaging app using android studio</h3>
                <p>Learned java programming and XML and used those skills to develop an app named ChitChat which is an android application. 
Used XML for designing the interfaces and Java programming for backend functionalities.
The app is authenticated to firebase data base to collect and store the data. App consists a chat bot which can reply for basic questions. 
Feature of the app includes stories, messages and camera to send photos.</p>
                </div><div className="project-card">
                    <h3>Project 3-Software for Personal Finance Management</h3>
                    <p>Performed requirement analysis to know the downsides in the existing software and prepared an SRS.
Analysed the risks involved and worked on the software.
Designed the required data flow and use case diagrams and flow charts to depict the work flow.
Test cases were designed and tested manually.</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
