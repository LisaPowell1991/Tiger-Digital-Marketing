import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { searchPhotos } from '../../unsplashService';
import '../../App.css';

const ProductPage = ({ shoes, setShoes }) => {
    const [, setPhotos] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            const results = await searchPhotos('shoes');
            setPhotos(results);

            const updatedShoes = shoes.map((shoe, index) => ({
                ...shoe,
                photoUrl: results[index] ? results[index].urls.small : 'https://via.placeholder.com/300x200'
            }));

            setShoes(updatedShoes);
        };

        fetchPhotos();
    }, [shoes, setShoes]);

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Shoe Collection</h1>
            <div className="row">
                {shoes.map(shoe => (
                    <div className="col-md-4 mb-4" key={shoe.id}>
                        <Link to={`/product/${shoe.id}`} className="card-link">
                            <div className="card">
                                <img
                                    src={shoe.photoUrl}
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