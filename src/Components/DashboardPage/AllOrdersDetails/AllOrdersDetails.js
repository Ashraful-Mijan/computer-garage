import { faCheckCircle, faHourglassStart, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import '../Orders/Orders.css'

const AllOrdersDetails = (props) => {
    const { status, _id, name, title, description, price, orderTime } = props.allOrder

    const [orderServices, setOrderServices] = useState([]);
    console.log(orderServices);

    useEffect(() => {
        fetch('https://young-beach-67366.herokuapp.com/cart')
            .then(res => res.json())
            .then(data => setOrderServices(data))
    }, [])


    const handleUpdate = (status, id) => {
        fetch(`https://young-beach-67366.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(result => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Customer Order Status Has Been Updated.',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(result)
            })
        console.log(status, id)
    }
    return (

        <ul className="list-group  focus col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
            <li className="list-group-item list-group-item-dark"><span className="fw-bolder text-dark">Customer Name : {name} </span></li>
            <li className="list-group-item "><span className="fw-bolder text-dark">Service Name : {title} </span> </li>
            <li className="list-group-item "><span className="fw-bolder text-dark">Service Price : {price} $</span> </li>
            <li className="list-group-item "><span className="fw-bolder text-dark">Description : {description}</span> </li>
            <li className="list-group-item "><span className="fw-bolder text-dark">Orders Placed At : {(new Date(orderTime).toDateString('dd/MM/yyyy'))}</span> </li>

            <li className="list-group-item d-flex justify-content-center">
                {status !== "pending" && <button onClick={() => handleUpdate('Pending', _id)} className="btn btn-outline-danger fw-bold text-dark ms-2"><FontAwesomeIcon icon={faHourglassStart} /> Pending</button>}
                {status !== "on going" && <button onClick={() => handleUpdate('On Going', _id)} className="btn btn-outline-secondary fw-bold ms-2 text-dark"><FontAwesomeIcon icon={faRocket} />Going</button>}
                {status !== "done" && <button onClick={() => handleUpdate('Done', _id)} className="btn btn-outline-success text-dark fw-bold ms-2"><FontAwesomeIcon icon={faCheckCircle} /> Done</button>}
            </li>

        </ul>

    );
};

export default AllOrdersDetails;