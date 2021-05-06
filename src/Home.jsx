import React from 'react';
import web from '../src/images/iimg3.png';
import Common from './Common';

const Home = () => {
    return (
        <>
        <Common 
        name="Grow Your Business With"
        imgsrc={web}
        visit="/Service"
        btname="Get Started"
        />
            
        </>
    );
};

export default Home;

