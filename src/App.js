import React from "react";
 import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom';
 import Home from "./Navigation using router/Home";
 import About from "./Navigation using router/About";
 import Contact from "./Navigation using router/Contact";

 const App = () => {
    return(
        <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to= "/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link  className="nav-link" to = "/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to = "/contact">Contact</Link>
                        </li>
                    </ul>
                    </div>
                    </div>
                </nav>
                <hr />
                 <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                 </Routes>
            </div>
        </Router>
    );
 };

 export default App;