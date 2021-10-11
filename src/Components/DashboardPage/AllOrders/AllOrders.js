import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AllOrdersDetails from '../AllOrdersDetails/AllOrdersDetails';
import Dashboard from '../Dashboard/Dashboard';
import DashboardNavbar from '../Sidebar/Sidebar';
import Sidebar from '../Sidebar/Sidebar';


const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(allOrders);

    useEffect(() => {

        fetch('https://young-beach-67366.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => setAllOrders(data))

    }, [])

    return (
        <div style={{ backgroundColor: "#12161f", color: "white" }} className="pt-5 pb-5">

            <DashboardNavbar></DashboardNavbar>

            <div className="container mt-5 ">
                <h1 className="pt-5 text-center">HI <span className="text-danger">{loggedInUser.name}</span>...You Have  Total  {allOrders.length} Orders Pending....!!!!!</h1>

                <div className="row ms-1">
                    {
                        allOrders.map(allOrder => <AllOrdersDetails allOrder={allOrder}></AllOrdersDetails>)
                    }
                </div>


            </div>

        </div>


    );
};

export default AllOrders;