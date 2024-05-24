import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductPage = () => {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        const fetchShoes = async () => {
            try {
                const shoeCollection = collection(db, 'shoes');
                const shoeSnapshot = await getDocs(shoeCollection);
                const shoesData = shoeSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setShoes(shoesData);
            } catch (error) {
                console.error('Error fetching shoes:', error);
            }
        };

        fetchShoes();
    }, []);

    const getPlaceholderImage = (width = 300, height = 200) => {
        return `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 1000)}`;
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Shoe Collection</h1>
            <div className="row">
                {shoes.map(shoes => (
                    <div className="col-md-4 mb-4" key={shoes.id}>
                        <div className="card">
                            <img
                                src={shoes.photoUrl ? shoes.photoUrl : getPlaceholderImage()}
                                className="card-img-top"
                                alt={shoes.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{shoes.name}</h5>
                                <p className="card-text">${typeof shoes.price === 'number' ? shoes.price.toFixed(2) : 'N/A'}</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;