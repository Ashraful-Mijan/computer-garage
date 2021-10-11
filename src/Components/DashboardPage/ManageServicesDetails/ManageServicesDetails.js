import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Swal from 'sweetalert2';

const ManageServicesDetails = (props) => {
    const { _id, title, price, description } = props.services
    const handleDelete = (id) => {
        fetch(`https://young-beach-67366.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Service Has Been Deleted.',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log('deleted')
            })
        console.log(id)
    }
    return (
        <ul className="list-group col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 focus mt-3">
            <li className="list-group-item list-group-item-dark"><span className="fw-bolder text-dark">Service Name : {title} </span></li>
            <li className="list-group-item "><span className="fw-bolder text-dark">Service Price : {price} $</span> </li>
            <li className="list-group-item "><span className="fw-bolder text-dark">Service Description : {description}</span> </li>
            <li onClick={() => handleDelete(_id)} className="list-group-item d-grid"><span className="btn btn-outline-danger  fw-bolder text-dark"><FontAwesomeIcon icon={faTrashAlt} />  Delete Service</span></li>

        </ul>
    );
};

export default ManageServicesDetails;