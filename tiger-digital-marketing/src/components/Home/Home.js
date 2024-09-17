import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import "../../App.css";

const HeroSection = () => (
  <div className="jumbotron text-center bg-dark text-white">
  </div>
);

const WelcomeSection = () => (
  <>
    <h1 className="text-center">Welcome to The Shoe Spot</h1>
    <p className="text-center">Your one-stop shop for the best Shoes.</p>
    <a className="shop-now-btn custom-button btn-large" href="/products" role="button">
      Shop Now
    </a>
  </>
);

const ShoeCard = ({ shoe }) => (
  <div key={shoe.id} className="col-md-4 mb-4">
    <div className="card">
      <img
        src={shoe.photoUrl}
        className="card-img-top"
        alt={shoe.name}
      />
      <div className="card-body">
        <h5 className="card-title">{shoe.name}</h5>
        <p className="card-text">${shoe.price.toFixed(2)}</p>
        <a
          href={`/product/${shoe.id}`}
          className="custom-button-secondary"
        >
          View Details
        </a>
      </div>
    </div>
  </div>
);

const FeaturedProducts = ({ shoes }) => (
  <div className="container mt-5">
    <h2 className="featured-product text-center mb-4">Featured Products</h2>
    <div className="row">
      {shoes.map((shoe) => (
        <ShoeCard shoe={shoe} />
      ))}
    </div>
  </div>
);

const HomePage = ({ shoes }) => {
  return (
    <div className="text-center">
      <HeroSection />
      <WelcomeSection />
      <FeaturedProducts shoes={shoes} />
    </div>
  );
};

export default HomePage;