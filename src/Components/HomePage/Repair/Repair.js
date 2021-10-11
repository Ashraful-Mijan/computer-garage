import React from 'react';
import repair from '../../../Images/service 2.jpg'

const Repair = () => {
    return (
        <div id="repair" className="row offset-md-1 my-5 py-5">
            <div className="col-md-6 my-5 py-5">
                <img className="img-fluid" src={repair} alt="" />
            </div>
            <div className="col-md-6 my-5 py-5">
                <h1 style={{ fontSize: "70px" }}>Repair Services Pricing Plan For Your Computer.</h1>
                <div class="form-check   fs-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault" >
                        <h3>Basic Plan</h3>
                    </label>
                </div>
                <div class="form-check  fs-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault" >
                        <h3>Medium Plan</h3>
                    </label>
                </div>
                <div class="form-check  fs-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault" >
                        <h3> Ultimate Plan</h3>
                    </label>
                </div>

            </div>
        </div>
    );
};

export default Repair;