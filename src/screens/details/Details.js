import React, { useState, useEffect, Fragment } from "react";
import Header from "../../common/header/Header";
import "./Details.css";
import Typography from "@material-ui/core/Typography";


function Details(props) {
     
    return (
        <div>
            <Header {...props} />  
            <Typography
                 component="div"
                 className="back-to-home-btn"
                 onClick={() => {
                 props.history.push("/");
            }}>
             &#60; Back to Home
            </Typography>
        </div>
    )
  } 
  export default Details;