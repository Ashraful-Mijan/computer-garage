
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'
import logo from '../../../Images/logo (2).png'

const DashboardNavbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);


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
        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark fixed-top" >
            <div class="container-fluid">
                <div>
                    <img className="transaction-area " style={{ height: "50px", }} src={logo} alt="" />
                    <a className="navbar-brand color ms-3 h1" href="#home">Computer Garage</a>
                </div>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ms-auto  mb-2 mb-lg-0 h5">
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/checkOut/:title">CheckOut</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/dashboard">Dashboard</Link>
                        </li>

                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/addReview">Add Review</Link>
                        </li>
                        {isAdmin &&
                            <li class="nav-item">
                                <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/admin">Add Service</Link>
                            </li>
                        }
                        {isAdmin &&
                            <li class="nav-item">
                                <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/manage">Manage Service</Link>
                            </li>
                        }
                        {isAdmin &&
                            <li class="nav-item">
                                <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/addAdmin">Add Admin</Link>
                            </li>
                        }
                        {isAdmin &&
                            <li class="nav-item">
                                <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/allOrders">Pending Orders</Link>
                            </li>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default DashboardNavbar;