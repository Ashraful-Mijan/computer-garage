import axios from 'axios';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import Swal from 'sweetalert2';
import DashboardNavbar from '../Sidebar/Sidebar';

const AddReviews = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const { handleSubmit, register } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            from: data.from,
            quote: data.quote,
            img: imageURL
        }

        const url = `https://young-beach-67366.herokuapp.com/addReview`
        console.log(reviewData)

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Thanks For Your Valuable Review.',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log('server side', res)
            })
    };


    const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '45989dd4589e7b6e62f67e349b536454');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div style={{ backgroundColor: "#12161f", height: "980px", color: "white" }} className="pt-5">
            <DashboardNavbar></DashboardNavbar>


            <div className="container mt-5">
                <div className="text-center  pt-5">
                    <h1>HI <span className="text-danger">{loggedInUser.name}</span>....Add Reviews Here ....!!!!</h1>
                </div>
                <form className="row mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6 mt-3">
                        <label for="name" className="form-label"><h4>Your Name</h4></label>
                        <input style={{ backgroundColor: "#050c1f" }} placeholder="Write Your Name" name="name" ref={register} className="form-control text-light" id="inputEmail4" />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label for="from" className="form-label"><h4>Place You Live</h4></label>
                        <input style={{ backgroundColor: "#050c1f" }} placeholder="Write Your Location" name="from" className="form-control text-light" ref={register} id="inputPassword4" />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label for="quote" className="form-label"><h4>Your Review About Our Service </h4></label>
                        <input style={{ backgroundColor: "#050c1f" }} placeholder="Write Your Review" name="quote" className="form-control text-light" ref={register} id="inputEmail4" />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label className="form-label"><h4>Insert Your Image</h4></label>
                        <input style={{ backgroundColor: "#050c1f" }} className="form-control text-light" type="file" onChange={handleImageUpload} id="formFile" />
                    </div>
                    <div className="col-12 d-grid ">
                        <button className="mt-4 btn btn-danger btn-lg btn-block" type="submit" ><FontAwesomeIcon icon={faPlusCircle} />  Add Reviews</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddReviews;