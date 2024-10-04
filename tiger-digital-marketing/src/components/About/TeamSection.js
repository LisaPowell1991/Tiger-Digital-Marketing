// File: src/components/TeamMember.js

import React from 'react';
import KayLeighImage from '../../assets/images/Kay-Leigh.jpg';
import SteveImage from '../../assets/images/Steve.png';
import JeffeyImage from '../../assets/images/Jeffey.png';
import LisaImage from '../../assets/images/Lisa.png';
import ReaganImage from '../../assets/images/Reagan.png';
import MikaeelImage from '../../assets/images/Mika-eel.png';
import YzahImage from '../../assets/images/Yzah.png';
import AidenImage from '../../assets/images/Aiden.png';
import DanielImage from '../../assets/images/Daniel.png';
import MichaImage from '../../assets/images/Micha.png';
import NoohImage from '../../assets/images/Nooh.png';
import TarrynImage from '../../assets/images/Tarryn.jpeg';
import './About.css';

// TeamMember component
const TeamMember = ({ image, name, role, desc, isFounder }) => (
    <div className={`team-card ${isFounder ? 'founder' : ''}`}>
        <div className="team-card__image">
            <img src={image} className="team-image" alt={name} />
        </div>
        <div className="team-card__info">
            <h2 className="team-card__name">{name}</h2>
            <p className="team-card__desc">{desc}</p>
        </div>
        <div className="team-card__role">
            <h2 className="team-role">{role}</h2>
        </div>
    </div>
);

// Array of team members
const teamMembers = [
    {
        image: KayLeighImage,
        name: 'Kay-Leigh Bier',
        role: 'Kay-Leigh Bier - Founder',
        desc: 'Hi, I’m Kay-Leigh Bier, founder of Tiger Digital Marketing—a passion-driven marketer with expertise in digital strategies, fuelled by a love for nature and gourmet coffee. I specialize in crafting innovative campaigns that captivate audiences, always striving for creativity and excellence.',
    },
    {
        image: SteveImage,
        name: 'Steve Laubscher',
        role: 'Steve Laubscher - Sales Manager',
        desc: 'As the Head of Sales, I’m dedicated to fostering client relationships and driving strategic initiatives in the digital landscape. Beyond work, I enjoy watching sports and spending time outdoors, as I believe in embracing life’s adventures both inside and outside the boardroom.',
    },
    {
        image: JeffeyImage,
        name: 'Jeffey Dahan',
        role: 'Jeffey Dahan - Marketing Assistant',
        desc: 'In the vast landscape of digital marketing, I stand as a beacon of innovation and dedication. With each keystroke, I weave intricate strategies, merging creativity with precision to illuminate brands in the digital sphere. Beyond metrics and analytics, my true passion lies in cultivating authentic connections, bridging the gap between brands and their audiences with sincerity and empathy.Every campaign I embark upon is not merely a task, but a journey fuelled by a desire to touch hearts and inspire minds. In this ever - evolving digital realm, I am not just a marketer; I am a storyteller, crafting narratives that resonate deeply, leaving an indelible mark on the soul of every interaction.',
    },

    {
        image: LisaImage,
        name: 'Lisa Powell-Kuyk',
        role: 'Lisa Powell-Kuyk - Website Developer',
        desc: 'Hi, I’m Lisa, a creative web developer passionate about blending technical expertise with creativity to design dynamic, user-friendly websites. Outside of work, I love hiking scenic trails, enjoying family time, and exploring diverse culinary experiences.',
    },

    {
        image: ReaganImage,
        name: 'Reagan Hammers',
        role: 'Reagan Hammers - Social Media Manager',
        desc: 'I’m a results-driven social media manager with over 6 years of experience building social media accounts for a wide range of businesses and corporations. Experience managing digital marketing accounts to increase user engagement and brand awareness.',
    },
    {
        image: MikaeelImage,
        name: 'Mika-eel Albertyn',
        role: 'Mika-eel Albertyn - Email Marketing & SEO Specialist',
        desc: 'I speak human in a digital world. Leveraging people skills and digital skills to ensure success in every aspect of a project! All for one and one for all!',
    },
    {
        image: YzahImage,
        name: 'Yzah May Pagas',
        role: 'Yzah May Pagas - Marketing Assistant',
        desc: 'Magandang araw! I’m Yzah, a dynamic Marketing Assistant skilled in crafting engaging digital campaigns. When I’m not optimizing online presence, you’ll find me helping the current generation in believing, returning, and serving my religion',
    },
    {
        image: AidenImage,
        name: 'Aiden August',
        role: 'Aiden August - Sales Agent',
        desc: 'Hi I’m Aiden, my enthusiasm, attention to detail & talkative personality drives me as a sales marketer. If we’re not delving into our digital strategies I’ve probably steered the conversation to lifting or football, Yeah buddy!',
    },
    {
        image: DanielImage,
        name: 'Daniel Kotze',
        role: 'Daniel Kotze - Sales Agent',
        desc: 'I have a passion for football that shines through in my enthusiasm for the sport. My love for marketing is evident in my strategic approach and creativity in promoting our Digital Marketing services.',
    },
    {
        image: MichaImage,
        name: 'Micha Scheepers',
        role: 'Micha Scheepers - Sales Agent',
        desc: 'Hi, my name is Micha, a sales agent with a passion for marketing, always ready and willing to help. Outside of work you will find me drawing or exploring a new crime novel.',
    },
    {
        image: NoohImage,
        name: 'Nooh Brown',
        role: 'Nooh Brown - Sales Agent',
        desc: 'As a dynamic sales agent at a leading digital marketing firm, I leverage my expertise to drive growth and craft impactful strategies for our clients. With a deep understanding of the digital landscape and a passion for fostering relationships, I excel in spotting opportunities and delivering bespoke solutions that go beyond client expectations. My dedication to staying abreast of industry trends and my natural talent for effective communication make me an indispensable asset to both my clients and my team. My unwavering commitment to excellence, combined with my genuine enthusiasm for helping businesses thrive, distinguishes me as a trusted partner in the constantly evolving realm of digital marketing.',
    },
    {
        image: TarrynImage,
        name: 'Tarryn van Rooyen',
        role: 'Tarryn van Rooyen - Sales Agent',
        desc: 'Hi, I’m Tarryn. I am a passionate sales agent with a love for digital marketing. Outside of work you will find me visiting aesthetic cafe’s and taking walks along the beach.',
    },
];

// Team component that maps over the teamMembers array
const Team = () => (
    <div className="team-section">
        {/* Founder */}
        <div className="team-container founder-container">
            <TeamMember
                image={teamMembers[0].image}
                name={teamMembers[0].name}
                role={teamMembers[0].role}
                desc={teamMembers[0].desc}
                isFounder={teamMembers[0].isFounder}
            />
        </div>
        {/* Rest of the Team */}
        <div className="team-container members-container">
            {teamMembers.slice(1).map((member, index) => (
                <TeamMember
                    key={index}
                    image={member.image}
                    name={member.name}
                    role={member.role}
                    desc={member.desc}
                />
            ))}
        </div>
    </div>
);


export default Team;
