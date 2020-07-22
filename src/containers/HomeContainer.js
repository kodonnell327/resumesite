import React from 'react';
import {Container} from "reactstrap";
import ImageCarousel from "../components/ImageCarousel";

// the icon below is testing that the library in App.js works

const HomeContainer = () => (
    <Container className=" text-center">
        <h1>Welcome!</h1>
        <p>This site is a work in progress.
            If you would like to be in contact with me, please <a href="mailto: kodonnell327@gmail.com">email me!</a>
        </p>
        <p>Here is a picture of my cat while I work on the website in my free time.</p>
        <ImageCarousel className="mx-auto d-block w-50"/>
    </Container>
);

export default HomeContainer;