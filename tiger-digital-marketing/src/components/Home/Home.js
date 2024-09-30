import React from "react";
import ServicesSection from "./Services";
import PackagesSection from "./Packages";
import SuccessStories from "./SuccessStories";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import "../../App.css";

const HeroSection = () => (
  <div className="jumbotron"></div>
);

const WelcomeSection = () => (
  <>
    <h1 className="welcome-heading text-center">Why Choose Us?</h1>
    <p className="welcome-text text-center">
      At Tiger Digital Marketing we offer unwavering dedication to excellence, innovative strategies, and transparent approach. With a focus on collaboration and accountability, we empower businesses to succeed in the digital landscape. Our proven track record of delivering impactful results sets us apart as the trusted partner for driving brand success.
    </p>
  </>
);

const HomePage = () => (
  <div className="text-center">
    <HeroSection />
    <WelcomeSection />
    <ServicesSection />
    <PackagesSection />
    <SuccessStories />
  </div>
);

export default HomePage;