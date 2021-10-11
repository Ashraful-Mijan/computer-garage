import React from 'react';
import Orders from '../Orders/Orders';
import DashboardNavbar from '../Sidebar/Sidebar';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div style={{ backgroundColor: "#12161f", color: "white", height: "980px" }} >
            <DashboardNavbar></DashboardNavbar>
            <div className="container pt-5">
                <Orders></Orders>
            </div>

        </div>
    );
};

export default Dashboard;