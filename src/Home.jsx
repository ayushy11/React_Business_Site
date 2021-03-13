import React from 'react';
import web from '../src/Images/img1.jpg';
import Common from './Common';

const Home = () => {
    return (
        <>
           <Common 
               name='Grow your business with'
               imgsrc={web}
               visit='/about'
               btname="Get started"
           />
        </>
    );
};
export default Home;