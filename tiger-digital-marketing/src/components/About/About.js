// React related imports
import React from 'react';

// CSS imports
import './About.css';
import '../../App.css';

// HeroSection component
import HeroSection from '../Home/Hero';
import heroImageAbout from '../../assets/images/about-hero.webp';

// TeamMember component
import Team from './TeamSection';

// AboutGoals component
const AboutGoals = () => {
    return (
        <div className="goals-grid">
            <div className="spacer"></div>

            <div className="goal-block vision-block">
                <h2 className="goal-title">Vision</h2>
                <hr className="goal-separator" />
                <p className="goal-description">
                    Our vision at Tiger Digital Marketing is to revolutionize the digital
                    marketing industry by leveraging cutting-edge technologies and
                    creative solutions. We aspire to become the go-to agency recognized
                    for our unwavering commitment to delivering measurable results, driving
                    brand success, and shaping the future of digital marketing.
                </p>
            </div>

            <div className="goal-block mission-block">
                <h2 className="goal-title">Mission</h2>
                <hr className="goal-separator" />
                <p className="goal-description">
                    At Tiger Digital Marketing, our mission is to empower businesses of all
                    sizes to thrive in the digital landscape through innovative and
                    data-driven marketing strategies. We strive to be the trusted partner
                    that fosters growth, maximizes ROI, and cultivates lasting relationships
                    with our clients.
                </p>
            </div>

            <div className="goal-block value-block">
                <h2 className="goal-title">Value</h2>
                <hr className="goal-separator" />
                <p className="goal-description">
                    At Tiger Digital Marketing, we uphold excellence, integrity, and
                    innovation in all endeavors. Through collaborative partnerships and a
                    commitment to accountability, we empower businesses to thrive in the
                    digital age. Our values drive us to deliver impactful results, shaping
                    the future of marketing with creativity and integrity.
                </p>
            </div>

            <div className="spacer"></div>
        </div>
    );
};


// AboutUs component
const AboutUs = () => (
    <div className="text-center">
        <HeroSection backgroundImage={heroImageAbout} />
        <h1 className="welcome-heading text-center">Our Story</h1>
        <p className="welcome-text text-center">
            Tiger Digital Marketing is a distinguished digital marketing agency founded in 2021, headquartered in the vibrant city of Cape Town, South Africa. With a rich blend of local expertise and global perspective, we proudly serve a diverse clientele spanning across South Africa and beyond. Our commitment to excellence is evident in our bespoke solutions crafted to suit the unique needs and aspirations of each client.</p>

        <p className="welcome-text text-center">
            Leveraging the latest technologies and innovative strategies, we specialise in driving measurable results that propel businesses to new heights of success. Our team of seasoned professionals is dedicated to staying ahead of the curve, meticulously analysing market trends and consumer behaviour to deliver cutting-edge solutions. At Tiger Digital Marketing, we prioritise transparency, integrity, and client satisfaction, fostering enduring partnerships built on trust and mutual respect. Whether you’re a local startup looking to establish a formidable online presence or a multinational corporation seeking to expand your digital footprint, we are here to guide you every step of the way.</p>

        <p className="welcome-text text-center">
            Join us on this journey towards digital excellence, where your success is our ultimate reward.
        </p>
        <AboutGoals />
        <h2 className="services-heading text-center">Meet Our Team</h2>
        <h6 className="services-text text-center">
            Introducing a team where expertise meets passion,driving excellence through collaboration and dedication<br></br> by connecting you with the faces behind our success.
        </h6>
        <Team /> {/* Use the Team component */}
    </div>
);

export default AboutUs;