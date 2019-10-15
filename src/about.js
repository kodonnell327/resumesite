import React from 'react';
import Menu from './menu';
import './scss/global.scss';

/**
 * Class for the about me page
 */
class About extends React.Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <h1>About Me!</h1>
                <p></p>
            </div>
            
        );
    }
}

export default About;