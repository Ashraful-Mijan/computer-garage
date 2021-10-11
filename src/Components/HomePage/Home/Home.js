import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import "../Header/Header.css"
import About from '../About/About';
import Repair from '../Repair/Repair';
import ExpertTeam from '../ExpertTeam/ExpertTeam';
import Footer from '../Footer/Footer';
import ServiceAreas from '../ServiceAreas/ServiceAreas';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div style={{ backgroundColor: "#12161f", color: "white" }}>
            <div className="header bg-light">
                <Navbar></Navbar>
                <Header></Header>
            </div>
            <div className="p-3">
                <About></About>
                {/* <Repair></Repair> */}
                <ServiceAreas></ServiceAreas>
                <ExpertTeam></ExpertTeam>

            </div>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;