import Header from '../../common/header/Header';  
import './Home.css'
import React from 'react'
//import React, { useEffect, useState } from "react";


function Home(props){

return (
        <div>
            <Header {...props}/>
            <div className="upcoming-movies-heading">Upcoming Movies</div>  
        </div>
    )
}
export default Home
