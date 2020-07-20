import React from 'react';
import MenuComponent from "../components/MenuComponent";
import cat from "../media/cat.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// the icon below is testing that the library in App.js works

const HomeContainer = () => (
    <div className="Home">
        <MenuComponent/>
        <FontAwesomeIcon icon="check-square" />
        <div className="Home-body">
            <h1>Welcome!</h1>
            <p>This site is a work in progress.
                If you would like to be in contact with me, please <a href="mailto: kodonnell327@gmail.com">email me!</a></p>
            <p>Here is a picture of my cat while I work on the website in my free time.</p>
            <img style={{'width' : '400px', 'height':'auto'}} src={cat} alt="Sydney, my cat, bothering my boyfriend while he does music homework."/>
        </div>
    </div>
);

export default HomeContainer;