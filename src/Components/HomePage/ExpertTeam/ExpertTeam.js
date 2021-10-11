import React from 'react';
import alex from '../../../Images/alex.png'
import piter from '../../../Images/Piter.png'
import watson from '../../../Images/watson.png'
const ExpertTeam = () => {
    return (
        <div id="expert" className="py-5">
            <div className="text-center py-5">
                <h1 style={{ fontSize: "65px" }}>Our Expert Team</h1>
            </div>
            <div className="row d-flex justify-content-center text-end">
                <div className="focus col-md-3">
                    <div className="card bg-dark text-white">
                        <img src={piter} className="card-img" alt="..." />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className=" focus card bg-dark text-white">
                        <img src={alex} className="card-img" alt="..." />
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className="focus card bg-dark text-white">
                        <img src={watson} className="card-img img-fluid" alt="..." />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ExpertTeam;