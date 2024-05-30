// Import necessary libraries and components
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = ({ products }) => {
  return (
    <div>
      {/* Hero Section */}
      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to The shoe spot</h1>
        <p className="lead">Your one-stop shop for the best Shoes.</p>
        <a className="btn btn-primary btn-lg" href="/products" role="button">
          Shop Now
        </a>
      </div>

      {/* Featured Products Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={product.photoUrl}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price.toFixed(2)}</p>
                  <a
                    href={`/product/${product.id}`}
                    className="btn btn-primary"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light text-center text-lg-start mt-5">
        <div className="container p-4">
          <p>&copy; 2023 E-Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
