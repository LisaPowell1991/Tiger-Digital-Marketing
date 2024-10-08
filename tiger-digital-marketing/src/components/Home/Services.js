import React, { useState } from "react";
import "./Home.css";
import "../../App.css";

const serviceContent = {
    service1: (
        <>
            <h3>Branding Services:</h3>
            <p>
                Tiger Digital Marketing crafts compelling brand identities tailored to clients’ visions and market needs. Through meticulous logo design, brand guideline creation, and strategic messaging, they ensure consistent and impactful brand representation across all digital platforms.
            </p>
            <p>
                By cultivating distinct brand personas and fostering emotional connections with audiences, their branding services elevate brand recognition, establish credibility, and differentiate clients from competitors, ultimately fostering growth.
            </p>
            <a
                href="http://tigerdigitalmarketing.com/wp-content/uploads/2024/03/Service-Kit-TDM-b374e6f-compressed.pdf"
                target="_blank"
                rel="noreferrer"
            >
                <button className="btn-service">View Complete Service Kit</button>
            </a>
        </>
    ),
    service2: (
        <>
            <h3>Analytics and Reporting Services:</h3>
            <p>
                Tiger Digital Marketing crafts compelling brand identities tailored to clients’ visions and market needs. Through meticulous logo design, brand guideline creation, and strategic messaging, they ensure consistent and impactful brand representation across all digital platforms.
            </p>
            <p>
                By cultivating distinct brand personas and fostering emotional connections with audiences, their branding services elevate brand recognition, establish credibility, and differentiate clients from competitors, ultimately fostering growth.
            </p>
            <a
                href="http://tigerdigitalmarketing.com/wp-content/uploads/2024/03/Service-Kit-TDM-b374e6f-compressed.pdf"
                target="_blank"
                rel="noreferrer"
            >
                <button className="btn-service">View Complete Service Kit</button>
            </a>
        </>
    ),
    service3: (
        <>
            <h3>Content Creation:</h3>
            <p>
                Tiger Digital Marketing produces high-quality, engaging content that resonates with target audiences and drives meaningful interactions. From compelling blog posts and informative articles to captivating videos and eye-catching graphics, their content creation services cater to diverse digital platforms and consumer preferences.
            </p>
            <p>
                By delivering valuable, relevant content consistently, they enhance brand visibility, increase website traffic, and foster audience engagement. Through storytelling, education, and entertainment, their content drives brand awareness, builds trust, and positions clients as industry authorities, ultimately fueling business growth and driving conversions.
            </p>
            <a
                href="http://tigerdigitalmarketing.com/wp-content/uploads/2024/03/Service-Kit-TDM-b374e6f-compressed.pdf"
                target="_blank"
                rel="noreferrer"
            >
                <button className="btn-service">View Complete Service Kit</button>
            </a>
        </>
    ),
    service4: (
        <>
            <h3>Digital Paid Ads Management:</h3>
            <p>
                Tiger Digital Marketing orchestrates targeted, results-driven digital advertising campaigns across various platforms, including Google Ads, social media ads, and display advertising networks. With strategic audience targeting, compelling ad creatives, and meticulous campaign optimization, they maximize ad performance and deliver tangible results for clients.
            </p>
            <p>
                By reaching the right audience at the right time with tailored messaging, their paid ads management services generate qualified leads, drive website traffic, and boost conversions.
            </p>
            <p>
                With a focus on return on ad spend (ROAS) and continuous optimization, they ensure clients achieve maximum value from their advertising budgets, fueling business growth and scalability.
            </p>
            <a
                href="http://tigerdigitalmarketing.com/wp-content/uploads/2024/03/Service-Kit-TDM-b374e6f-compressed.pdf"
                target="_blank"
                rel="noreferrer"
            >
                <button className="btn-service">View Complete Service Kit</button>
            </a>
        </>
    ),
    service5: (
        <>
            <h3>Social Media Management:</h3>
            <p>
                Tiger Digital Marketing curates dynamic social media presences that foster meaningful connections and drive brand engagement. Through strategic content planning, community management, and audience engagement tactics, they cultivate vibrant social media communities that advocate for and amplify clients’ brands.
            </p>
            <p>
                By crafting compelling content, fostering genuine interactions, and leveraging platform-specific features, their social media management services increase brand visibility, drive website traffic, and nurture customer relationships.
            </p>
            <p>
                With data-driven insights and continuous optimization, they enhance social media performance, expand reach, and ultimately drive business growth through social channels.
            </p>
            <a
                href="http://tigerdigitalmarketing.com/wp-content/uploads/2024/03/Service-Kit-TDM-b374e6f-compressed.pdf"
                target="_blank"
                rel="noreferrer"
            >
                <button className="btn-service">View Complete Service Kit</button>
            </a>
        </>
    ),
    service6: (
        <>
            <h3>SEO (Search Engine Optimization) Services:</h3>
            <p>
                Tiger Digital Marketing optimizes clients’ online visibility and organic search rankings through comprehensive SEO strategies. From technical website audits and keyword research to on-page optimization and link building, their SEO services improve website accessibility, relevance, and authority.
            </p>
            <p>
                By aligning website content and structure with search engine algorithms and user intent, they enhance organic search visibility, drive qualified traffic, and increase website conversions.
            </p>
            <p>
                Through continuous monitoring, analysis, and optimization, they ensure clients maintain competitive positions in search engine results pages (SERPs) and capitalize on evolving search trends, ultimately driving sustained business growth and long-term success.
            </p>
            <a
                href="http://tigerdigitalmarketing.com/wp-content/uploads/2024/03/Service-Kit-TDM-b374e6f-compressed.pdf"
                target="_blank"
                rel="noreferrer"
            >
                <button className="btn-service">View Complete Service Kit</button>
            </a>
        </>
    ),
};

const ServiceItem = ({ imgSrc, title, description, onClick }) => (
    <div className="service-item">
        <img src={imgSrc} alt={title} width="60px" height="60px" />
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="learn-more-button" onClick={onClick}>
            <b>Learn more</b>
        </button>
    </div>
);

const ServicesSection = () => {
    const [lightboxContent, setLightboxContent] = useState(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = (serviceKey) => {
        setLightboxContent(serviceContent[serviceKey]);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxContent(null);
        setIsLightboxOpen(false);
    };

    return (
        <>
            <h2 className="services-heading text-center">Our Services</h2>
            <p className="services-text text-center">
                We offer a wide range of services to help you grow your business and reach your goals. Our team of experts will work with you to create a customized plan that fits your needs and budget. Whether you need help with social media marketing, search engine optimization, or website design, we have the skills and experience to help you succeed.
            </p>
            <section id="services-section" className="services-area">
                <div className="container">
                    <div className="services-row">
                        <ServiceItem
                            imgSrc="http://tigerdigitalmarketing.com/wp-content/uploads/2024/03/Blue_White_We_Are_Open_Coffee_Shop_Poster__3_-removebg-preview-e1711120870944.png"
                            title="Branding Services"
                            description="Crafting cohesive brand identities tailored to clients’ visions."
                            onClick={() => openLightbox("service1")}
                        />
                        <ServiceItem
                            imgSrc="https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/analytics-removebg-preview.png"
                            title="Analytics and Reporting Services"
                            description="Utilising data insights to optimise marketing strategies."
                            onClick={() => openLightbox("service2")}
                        />
                        <ServiceItem
                            imgSrc="https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/Blue_White_We_Are_Open_Coffee_Shop_Poster-removebg-preview-e1711121441793.png"
                            title="Content Creation"
                            description="Developing engaging and relevant content for target audiences."
                            onClick={() => openLightbox("service3")}
                        />
                        <ServiceItem
                            imgSrc="https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/digital-ads-e1711263691570.png"
                            title="Digital Paid Ads Management"
                            description="Strategically managing online advertising campaigns for maximum impact."
                            onClick={() => openLightbox("service4")}
                        />
                        <ServiceItem
                            imgSrc="https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/socail-media.png"
                            title="Social Media Management"
                            description="Cultivating vibrant social media communities to engage audiences."
                            onClick={() => openLightbox("service5")}
                        />
                        <ServiceItem
                            imgSrc="https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/seo-removebg-preview-e1711260539817.png"
                            title="SEO Services"
                            description="Enhancing online visibility and rankings through Search Engine Optimisation (SEO) strategies."
                            onClick={() => openLightbox("service6")}
                        />
                    </div>
                </div>
            </section>

            {isLightboxOpen && (
                <div className="lightbox">
                    <div className="lightbox-content">
                        <span className="close" onClick={closeLightbox}>
                            &times;
                        </span>
                        <div id="lightbox-content-container">{lightboxContent}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ServicesSection;