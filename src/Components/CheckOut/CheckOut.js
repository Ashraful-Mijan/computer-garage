import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Navbar from '../HomePage/Navbar/Navbar';
import Payment from '../Payments/Payment/Payment';
import './CheckOut.css'
import Swal from 'sweetalert2';
const CheckOut = () => {
    const { title } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services, setServices] = useState([])



    useEffect(() => {

        fetch('https://young-beach-67366.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [services])

    let serviceType = services.find(serviceType => serviceType.title === title);

    const addToCart = () => {
        const newAddToCart = { ...loggedInUser, ...serviceType, orderTime: new Date(), status: 'Pending' };
        delete newAddToCart._id
        fetch('https://young-beach-67366.herokuapp.com/addToCart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAddToCart)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your Order Has Been Added Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }


    const [orderedService, setOrderedService] = useState(false)
    let display;
    if (orderedService) {
        display =
            <div className="pay">
                <Navbar></Navbar>
                <div>
                    <h3 className="mt-5 pt-5 text-center container">Hi <span className="text-danger">{loggedInUser.name}</span>. Please Pay For Getting Your Services.If You Want To Update Your Information PLease Click On the Update Information Button.</h3>
                    <div className="d-grid text-center container mt-2">
                        <button onClick={() => setOrderedService(!orderedService)} variant="secondary" className="btn-lg  btn-block btn-danger" block>Update Information</button>
                    </div>
                </div>
                <div id="Contact" className=" mb-5" fluid>
                    <div className=" row mt-5 d-flex justify-content-center align-items-center">
                        <div className="text-center col-md-6">
                            <Payment></Payment>

                        </div>
                        <div className="col-md-4">
                            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_yzoqyyqf.json" background="transparent" speed="1" loop autoplay></lottie-player>
                        </div>

                    </div>
                </div>
            </div>
    }
    else {
        display =
            <div>
                <Navbar></Navbar>
                <div className="container">
                    <div id="Contact" className=" my-5 pb-5 mx-3" fluid>
                        <div className="row mt-5">
                            <div className="col-md-7 mt-5 pt-5">
                                <table className="table mt-2 table-hover table-striped table-secondary">
                                    <thead>
                                        <tr>
                                            <th scope="col">Service</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="fw-bolder">{title}</td>
                                            <td className="ps-4  fw-bolder">{serviceType && serviceType.description}</td>
                                            <td className="fw-bolder">{serviceType && serviceType.price + '$'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="col-md-12 d-grid">
                                    <button onClick={addToCart} className="btn btn-danger btn-lg" ><FontAwesomeIcon icon={faCartPlus} /> Add To Cart</button>
                                </div>
                            </div>
                            <div className="col-md-5"  >
                                <div style={{ marginTop: "100px" }} id="booking-area" className="booking-form ">
                                    <div className="input-group ">
                                        <label for="">Your Name</label>
                                        <input className="inp-style text-light" type="text" name="" placeholder="Write Your Name" />
                                    </div>
                                    <div className="input-group">
                                        <label for="">Your Phone Number</label>
                                        <input className="inp-style text-light" type="text" name="" placeholder="Write Your Phone Number" />
                                    </div>
                                    <div className="input-group">
                                        <label for="">Delivered Location</label>
                                        <input className="inp-style text-light" type="text" name="" placeholder="Write Your Location" />
                                    </div>
                                    <div className="inputs">
                                        <div className="input-group">
                                            <label for="">Order Date</label>
                                            <input className="inp-style text-light" type="date" name="" />
                                        </div>
                                    </div>
                                    <div className="d-grid">
                                        <button onClick={() => setOrderedService(!orderedService)} variant="secondary" className="btn-lg  btn-block btn-danger" block>Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
    return (
        <div style={{ color: "white" }} className="background">
            {display}
        </div >
    );
};

export default CheckOut;