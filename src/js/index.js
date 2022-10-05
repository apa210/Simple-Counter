//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//Funcion setInterval para setear el tiempo
let seg = 0;
setInterval(() => {
    const segundo6 = Math.floor(seg / 100000);
    const segundo5 = Math.floor(seg / 10000);
    const segundo4 = Math.floor(seg / 1000);
    const segundo3 = Math.floor(seg / 100);
    const segundo2 = Math.floor(seg / 10);
    const segundo1 = seg;
    seg++;

    //render your react application
    ReactDOM.render( < Home segundo1 = {segundo1}
                            segundo2 = {segundo2}
                            segundo3 = {segundo3}
                            segundo4 = {segundo4}
                            segundo5 = {segundo5}
                            segundo6 = {segundo6}/ > 
                            , document.querySelector("#app"));
}, 1000);