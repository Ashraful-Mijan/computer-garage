import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Images/logo (2).png"
import { UserContext } from '../../../App';
import '../ServiceAreas/ServiceAreas.css'


const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    useEffect(() => {
        fetch('https://young-beach-67366.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [loggedInUser.email])




    return (
        <nav className={(isSticky || isCollapsed) ? "navbar  navbar-expand-lg navbar-dark bg-dark fixed-top" : "navbar  navbar-expand-lg navbar-light color text-dark"}>
            <div class="container-fluid">
                <div>
                    <img className="transaction-area " style={{ height: "50px", }} src={logo} alt="" />
                    <a className="navbar-brand color ms-3 h1" href="#home">Computer Garage</a>
                </div>
                <button onClick={
                    () => setCollapsed(!isCollapsed ? 'show' : null)} class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ms-auto  mb-2 mb-lg-0 h5">
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link color" aria-current="page" href="#about">About</a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link color" href="#repair">Repair</a>
                        </li> */}
                        <li class="nav-item">
                            <a class="nav-link color" href="#service">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link color" href="#expert">Expert</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link color" href="#reviews">Reviews</a>
                        </li>
                        {isAdmin &&
                            <li className="nav-item ">
                                <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/admin"> Admin</Link>
                            </li>
                        }
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/checkOut/:title">CheckOut</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/dashboard">Dashboard</Link>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link color" href="#contact">Contact</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;