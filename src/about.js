import React from 'react';
import Menu from './menu';
import './scss/global.scss';

/**
 * Class for the about me page
 */
class About extends React.Component {

    softwareInterests = [
        'User centered design',
        'Writing understandable code',
        'Web development (full stack)',
        'Algorithmic fairness'
    ];

    nonSoftwareInterests = [
        'Woodworking - specifically fretwork with scrollsaws and pen turning',
        'Crochet - usually hats',
        'Piano',
        'Swimming'
    ];

    courseNumberToNameMap = {
        "MSCR 1220": "Media, Culture, and Society",
        "SOCL 1280": "21st Century Workplace",
        "MUSC 1119": "Fundamentals of Western Music Theory",
        "ENGW 3302": "Advanced Writing in the Technical Professions",
        "THTR 1170": "The Eloquent Presenter"
    };

    getInterests(interestList) {
        const list = [];
        for (let item of interestList) {
            list.push(<li>{item}</li>);
        }
        return <ul>{list}</ul>;
    }

    getNonSoftwareInterests() {
        return this.getInterests(this.nonSoftwareInterests);
    }

    getSoftwareInterests() {
        return this.getInterests(this.softwareInterests);
    }

    getCourseListItem(courseNumber, courseName) {
        return <li>{courseNumber} - {courseName}</li>;
    }

    getFavoriteCourseList() {
        const list = [];
        for (let cNum of Object.keys(this.courseNumberToNameMap)) {
            list.push(this.getCourseListItem(cNum, this.courseNumberToNameMap[cNum]));
        }
        return <ul>{list}</ul>;
    }

    render() {
        return (
            <div className="about-page">
                <Menu></Menu>
                <div className="left-side-bar">
                    <h1>About Me</h1>
                    <p>My name is Kaitlyn O'Donnell and I am a software developer located in Boston, MA. I am graduating from Northeastern University in the spring of 2020.</p>
                    <p>My software interests include:
                        {this.getSoftwareInterests()}
                    </p>
                    <p>
                        My non-software interests include:
                        {this.getNonSoftwareInterests()}
                    </p>

                    <p>
                        My favorite non-STEM classes I took in college were:
                        {this.getFavoriteCourseList()}
                    </p>
                </div>
                <div className="right-side-bar">
                    <image></image>
                    <div className="contact">
                        
                    </div>
                </div>
            </div>
            
        );
    }
}

export default About;