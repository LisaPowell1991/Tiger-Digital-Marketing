// React related imports
import React from 'react';

// CSS imports
import './About.css';
import '../../App.css';

// Component imports
import HeroSection from '../Home/Hero';
import Team from './TeamSection';

// Asset imports
import heroImageAbout from '../../assets/images/about-hero.webp';

// AboutGoals component
const AboutGoals = () => (
    <div className="goals-grid">
        <div className="spacer"></div>

        <GoalBlock
            title="Vision"
            description="Our vision at Tiger Digital Marketing is to revolutionize the digital
            marketing industry by leveraging cutting-edge technologies and
            creative solutions. We aspire to become the go-to agency recognized
            for our unwavering commitment to delivering measurable results, driving
            brand success, and shaping the future of digital marketing."
            className="vision-block"
        />

        <GoalBlock
            title="Mission"
            description="At Tiger Digital Marketing, our mission is to empower businesses of all
            sizes to thrive in the digital landscape through innovative and
            data-driven marketing strategies. We strive to be the trusted partner
            that fosters growth, maximizes ROI, and cultivates lasting relationships
            with our clients."
            className="mission-block"
        />

        <GoalBlock
            title="Value"
            description="At Tiger Digital Marketing, we uphold excellence, integrity, and
            innovation in all endeavors. Through collaborative partnerships and a
            commitment to accountability, we empower businesses to thrive in the
            digital age. Our values drive us to deliver impactful results, shaping
            the future of marketing with creativity and integrity."
            className="value-block"
        />

        <div className="spacer"></div>
    </div>
);

// GoalBlock component
const GoalBlock = ({ title, description, className }) => (
    <div className={`goal-block ${className}`}>
        <h2 className="goal-title">{title}</h2>
        <hr className="goal-separator" />
        <p className="goal-description">{description}</p>
    </div>
);

// AboutUs component
const AboutUs = () => (
    <div className="text-center">
        <HeroSection backgroundImage={heroImageAbout} />
        <SectionHeading title="Our Story" />
        <SectionText>
            Tiger Digital Marketing is a distinguished digital marketing agency founded in 2021, headquartered in the vibrant city of Cape Town, South Africa. With a rich blend of local expertise and global perspective, we proudly serve a diverse clientele spanning across South Africa and beyond. Our commitment to excellence is evident in our bespoke solutions crafted to suit the unique needs and aspirations of each client.
        </SectionText>
        <SectionText>
            Leveraging the latest technologies and innovative strategies, we specialise in driving measurable results that propel businesses to new heights of success. Our team of seasoned professionals is dedicated to staying ahead of the curve, meticulously analysing market trends and consumer behaviour to deliver cutting-edge solutions. At Tiger Digital Marketing, we prioritise transparency, integrity, and client satisfaction, fostering enduring partnerships built on trust and mutual respect. Whether you’re a local startup looking to establish a formidable online presence or a multinational corporation seeking to expand your digital footprint, we are here to guide you every step of the way.
        </SectionText>
        <SectionText>
            Join us on this journey towards digital excellence, where your success is our ultimate reward.
        </SectionText>
        <AboutGoals />
        <SectionHeading title="Meet Our Team" />
        <SectionSubText>
            Introducing a team where expertise meets passion, driving excellence through collaboration and dedication by connecting you with the faces behind our success.
        </SectionSubText>
        <Team />
    </div>
);

// SectionHeading component
const SectionHeading = ({ title }) => (
    <h1 className="welcome-heading text-center">{title}</h1>
);

// SectionText component
const SectionText = ({ children }) => (
    <p className="welcome-text text-center">{children}</p>
);

// SectionSubText component
const SectionSubText = ({ children }) => (
    <h6 className="services-text text-center">{children}</h6>
);

export default AboutUs;