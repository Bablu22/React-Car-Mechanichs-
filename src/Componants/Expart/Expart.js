import React from 'react';

const Expart = ({ expert }) => {
    const { img, name, expertize } = expert;
    return (
        <div>
            <div className="col shadow-sm p-3 mb-5 bg-white rounded">
                <div className="card h-100 border-0">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fst-italic">{name}</h5>
                        <p className="card-text fw-bold">{expertize}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Expart;