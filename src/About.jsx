import React from 'react';
import web from '../src/Images/img2.jpg';
import Common from './Common.jsx';

const About = () => {
    return (
        <>
            <Common 
                name='About'
                imgsrc={web}
                visit='/contact'
                btname="Contact now"
                />
        </>
    );
};
export default About;