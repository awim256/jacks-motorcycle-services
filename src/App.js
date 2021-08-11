import './App.scss';
import {BrowserRouter as Router} from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import React from "react";
import Header from "./components/header/header";
import About from "./components/about/about";
import Services from "./components/services/services";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";


function App() {
    return (
        <Router>
            <Navigation/>
            <Header/>
            <About/>
            <Services/>
            <Contact/>
            <Footer/>
        </Router>
    );
}

export default App;
