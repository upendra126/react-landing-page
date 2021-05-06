import React from 'react';
import web from '../src/images/ill8.png';
import Common from './Common';

const About = () => {
    return (
        <>
        <Common 
        name="Welcome to About Us Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
        />
            
        </>
    );
};

export default About;

