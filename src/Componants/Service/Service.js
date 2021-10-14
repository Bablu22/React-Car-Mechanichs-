import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service, button }) => {
    const { name, price, img, description, id } = service



    return (
        <div className="">
            <div className="col shadow p-3 mb-4 bg-body rounded">
                <div className="card h-100 border-0">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fst-italic">{name}</h5>
                        <h5 className="card-title">$ {price}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <div className="card-footer border-0 bg-white">
                        <Link to={`/booking/${id}`}>
                            <button className="btn btn-dark fst-italic">Book now {name}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;