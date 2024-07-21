import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';



const PageNotFound = () => {
    return (
        <>
        <Navbar />
        <h1>404-Page Not Found</h1>
        <p>The page you are looking for doesn't exist</p>
       <a href = "/">Go to home</a> 
       <Footer />
        </>
    )
}

export default PageNotFound; 