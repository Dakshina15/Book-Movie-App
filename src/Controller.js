import React from "react";
import Home from "../src/screens/home/Home";
import Details from "../src/screens/details/Details";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookShow from "../src/screens/bookshow/BookShow";
import Confirmation from "../src/screens/confirmation/Confirmation";

const Controller = () => {
const baseUrl = "/api/v1/";
return (
<Router>
<div className="main-container">
<Route
exact
path="/"
render={(props) => <Home {...props} baseUrl={baseUrl} />}
/>
<Route
path="/movie/:id"
render={(props) => <Details {...props} baseUrl={baseUrl} />}
/>
<Route
path="/bookshow/:id"
render={(props) => <BookShow {...props} baseUrl={baseUrl}
/>}
/>
<Route
path="/confirm/:id"
render={(props) => <Confirmation {...props} baseUrl=
{baseUrl} />}
/>
</div>
</Router>
);
};
export default Controller;
