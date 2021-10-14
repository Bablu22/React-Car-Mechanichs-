import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Booking = () => {
    const { bookingId } = useParams();
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        fetch('../services.json')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])

    const item = booking.find(i => i?.id == bookingId)


    return (
        <div className="container">
            <h3 className=" mt-4 text-center fw-bold fst-italic">Booking service- {bookingId}</h3>
            <div class="card mb-3 mt-4 w-50 mx-auto">
                <img src={item?.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Name: {item?.name}</h5>
                    <p class="card-text">Description: {item?.description}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>

        </div>
    );
};

export default Booking;