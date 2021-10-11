import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
        <div id="home" style={{ height: '700px' }} className="row align-items-center d-flex  justify-content-start px-5 my-5 py-5">
            <div className=" text-center my-5 py-5 ">
                <h1 className="text-light  display-1">
                    <Typewriter
                        options={{
                            strings: ["Best Computer Repair Solution Provider"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                {/* <button className="btn btn-danger btn-lg p-4 text-light  col-md-4 rounded-pill btn-block"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button> */}
            </div>
        </div>
    );
};

export default Header;