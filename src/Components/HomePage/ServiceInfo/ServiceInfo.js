import { faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';
import Icon from '../../../Images/logo (2).png'
import '../ServiceAreas/ServiceAreas.css'

const ServiceInfo = (props) => {
    const { title, description, image, price } = props.service


    const history = useHistory()
    const handleBuy = (title) => {
        history.push(`/checkOut/${title}`)
    }
    return (
        <div className="card mb-3 my-3 focus mx-3 col-xxl-5 col-xl-5 col-lg-10 col-md-10 col-sm-12 col-xs-12 border border-3">
            <div style={{ backgroundColor: "#050c1a" }} className="row ">
                <div className="col-md-6 d-grid">
                    <img src={image} alt="..." className="img-fluid my-3" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <div className="d-flex card-title">
                            <img style={{ height: "50px" }} src={Icon} alt="" />
                            <h5 className="card-title pt-2 ps-1">{title}</h5>
                        </div>

                        <p className="card-text">{description}</p>
                        <h5 className="card-text">Price : {price} $</h5>
                    </div>
                </div>
                <button onClick={() => handleBuy(title)} className="btn btn-danger btn-lg"><FontAwesomeIcon icon={faTools} /> Repair</button>
            </div>
        </div>

    );
};

export default ServiceInfo;