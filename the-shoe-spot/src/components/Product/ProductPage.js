import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductPage = ({ shoes }) => {
    const getPlaceholderImage = (width = 300, height = 200) => {
        return `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 1000)}`;
    };
    /*PhotoUrl = a SHOE API here */

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Shoe Collection</h1>
            <div className="row">
                {shoes.map(shoe => (
                    <div className="col-md-4 mb-4" key={shoe.id}>
                        <Link to={`/product/${shoe.id}`} className="card-link">
                            <div className="card">
                                <img
                                    src={shoe.photoUrl ? shoe.photoUrl : getPlaceholderImage()}
                                    className="card-img-top"
                                    alt={shoe.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{shoe.name}</h5>
                                    <p className="card-text">${typeof shoe.price === 'number' ? shoe.price.toFixed(2) : 'N/A'}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;