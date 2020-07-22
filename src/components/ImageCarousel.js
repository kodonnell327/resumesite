import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import cat from "../media/cat.jpg";
import {Storage} from 'aws-amplify';

let cat_img = null;

Storage.vault.get('images/cat.jpeg')
    .then(
        result => {
            cat_img = result;
            console.log(cat_img);
        }).catch(err => console.log(err));
// Get the cat.jpeg belonging to current user

const items = [
    {
        src: cat_img,
        altText: 'Slide 1',
        captionText: 'Slide 1',
        header: 'Slide 1 Header',
        key: '1'
    },
    {
        src: cat,
        altText: 'Slide 2',
        captionText: 'Slide 2',
        header: 'Slide 2 Header',
        key: '2'
    },
    {
        src: cat,
        altText: 'Slide 3',
        captionText: 'Slide 3',
        header: 'Slide 3 Header',
        key: '3'
    }
];

const ImageCarousel = (props) => <UncontrolledCarousel items={items} {...props} />;

export default ImageCarousel;