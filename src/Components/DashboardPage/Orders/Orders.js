import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const Orders = () => {

    const [orderServices, setOrderServices] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://young-beach-67366.herokuapp.com/cart?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderServices(data))
    }, [loggedInUser.email])

    return (
        <div>
            <h1 className="mt-5 mb-5 text-center pt-5">HI <span className="text-danger">{loggedInUser.name}</span>...You Have Bought {orderServices.length} Service Total....!!!!!</h1>

            <table className="table mt-5 table-dark">
                <thead>
                    <tr>
                        <th className="text-light text-left" scope="col">Sr No</th>
                        <th className="text-light" scope="col">Service Name</th>
                        <th className="text-light" scope="col">Orders Placed At</th>
                        <th className="text-light" scope="col">Price</th>
                        <th className="text-light" scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderServices.map((order, index) =>

                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{order.title}</td>
                                <td> {(new Date(order.orderTime).toDateString('dd/MM/yyyy'))}</td>
                                <td>{order.price} $</td>
                                <td>{order.status}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;