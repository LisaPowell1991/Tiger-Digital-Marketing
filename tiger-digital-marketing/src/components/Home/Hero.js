import React from "react";
import "./Home.css";

const HeroSection = ({ backgroundImage }) => (
    <div
        className="jumbotron"
        style={{
            backgroundImage: `url(${backgroundImage})`,
            position: 'relative',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '22em 0',
            maxWidth: '100%',
            height: 'auto'
        }}
    >
        {/* Add other hero content if needed */}
    </div>
);

export default HeroSection;
