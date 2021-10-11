import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { UserContext } from '../../../App';
import DashboardNavbar from '../Sidebar/Sidebar';
import Sidebar from '../Sidebar/Sidebar';


const AddAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { handleSubmit, register } = useForm();


    const onSubmit = data => {
        const adminData = {
            name: data.name,
            email: data.email,
        }

        const url = `https://young-beach-67366.herokuapp.com/addAdmin`
        console.log(adminData)

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(adminData)
        })
            .then(res => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'New Admin Added',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log('server side', res)
            })
    };
    return (
        <div style={{ backgroundColor: "#12161f", height: "980px", color: "white" }} className="pt-5">


            <DashboardNavbar></DashboardNavbar>

            <div className="container pt-5">
                <div className="text-center pt-5">
                    <h1>HI <span className="text-danger">{loggedInUser.name}</span> ...Add Admin Here ....!!!!</h1>
                </div>
                <form className=" my-5 py-5 row" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6">
                        <label for="name" className="form-label"><h4>Admin Name </h4></label>
                        <input style={{ backgroundColor: "#050c1f" }} placeholder="Write Admin Name" name="name" ref={register} className="form-control text-light" />
                    </div>
                    <div className="col-md-6">
                        <label for="email" className="form-label"><h4>Admin Email Address</h4></label>
                        <input style={{ backgroundColor: "#050c1f" }} placeholder="Write Admin Email Address" name="email" className="form-control text-light" ref={register} />
                    </div>
                    <div className="col-12 d-grid ">
                        <button className="mt-4  btn btn-danger btn-lg btn-block" type="submit" ><FontAwesomeIcon icon={faPlusCircle} />  Add Admin</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddAdmin;