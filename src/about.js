import React from 'react';
import Menu from './menu';
import './scss/global.scss';

/**
 * Class for the about me page
 */
class About extends React.Component {
    render() {
        return (
            <div className="about-page">
                <Menu></Menu>
                <div className="left-side-bar">
                    <h1>About Me</h1>
                    <p>My name is Kaitlyn O'Donnell and I am a software developer located in Boston, MA. I am graduating from Northeastern University in the spring of 2020.</p>
                    <p>My software interests include:
                        <ul>
                            <li>User centered design</li>
                            <li>Writing understandable code</li>
                            <li>Web development (full stack)</li>
                            <li>Algorithmic fairness</li>
                        </ul>
                    </p>
                    <p>
                        My non-software interests include:
                        <ul>
                            <li>Woodworking - specifically fretwork with scrollsaws and pen turning</li>
                            <li>Crochet - usually hats</li>
                            <li>Piano</li>
                            <li>Swimming</li>
                        </ul>
                    </p>

                    <p>
                        My favorite non-STEM classes I took in college were:
                        <ul>
                            <li>MSCR 1220 - Media, Culture, and Society</li>
                            <li>SOCL 1280 - 21st Century Workplace</li>
                            <li>MUSC 1119 - Fundamentals of Western Music Theory</li>
                            <li>ENGW 3302 - Advanced Writing in the Technical Professions</li>
                            <li>THTR 1170 - The Eloquent Presenter</li>
                        </ul>
                    </p>
                </div>
                <div className="right-side-bar">

                </div>
            </div>
            
        );
    }
}

export default About;