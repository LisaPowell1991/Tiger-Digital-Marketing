import React from 'react'
import Logo from './Assets/Shoe_spot.png';
import './header.css'

const Headers = () => {
  return (
    <header>
      <div className="logo">
        <a>
          <img src={Logo} />
        </a>
      </div>
      <div className="links">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Cart</a>
          </li>
          <li>
            <a>Checkout</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Headers;