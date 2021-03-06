import React from 'react';
import Menu from './menu';
import './scss/home.scss';
import cat from './cat.jpg';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Menu currentPage="home"></Menu>
                <div className="Home-body">
                    <h1>Welcome!</h1>
                    <p>This site is a work in progress. 
                        If you would like to be in contact with me, please <a href="mailto: kodonnell327@gmail.com">email me!</a></p>
                    <p>Here is a picture of my cat while I work on the website in my free time.</p>
                    <img style={{'width' : '400px', 'height':'auto'}} src={cat} alt="Sydney, my cat, bothering my boyfriend while he does music homework."></img>
                </div>
            </div>
        );
    }
}

export default Home;