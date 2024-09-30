import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import "../../App.css";

const PackagesSection = () => {
    return (
        <div className="packages-section">
            <div></div>

            <h2 className="text-center package-title">
                Our Packages
            </h2>

            <p className="text-center package-subtitle">
                Check out our website packages!
            </p>

            <div className="packages-container">
                <div className="package-button-container">
                    <div className="package-button">
                        <a
                            href="https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/Website-Packages-list-TDM-compressed-1.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="package-link"
                        >
                            <strong>Click Here</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackagesSection;