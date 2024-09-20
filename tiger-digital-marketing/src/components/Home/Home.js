import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import "../../App.css";

const HeroSection = () => (
  <div className="jumbotron text-center bg-dark text-white">
  </div>
);

const WelcomeSection = () => (
  <>
    <h1 className="text-center">Why Choose Us?</h1>
    <p className="text-center">At Tiger Digital Marketing we offer unwavering dedication to excellence, innovative strategies, and transparent approach. With a focus on collaboration and accountability, we empower businesses to succeed in the digital landscape. Our proven track record of delivering impactful results sets us apart as the trusted partner for driving brand success.</p>
  </>
);

const ServicesSection = () => {
  const [lightboxContent, setLightboxContent] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const serviceContent = {
    service1: (
      <>
        <h3>Branding Services:</h3>
        <p>
          Tiger Digital Marketing crafts compelling brand identities tailored to
          clients’ visions and market needs. Through meticulous logo design,
          brand guideline creation, and strategic messaging, they ensure
          consistent and impactful brand representation across all digital
          platforms.
        </p>
        <p>
          By cultivating distinct brand personas and fostering emotional
          connections with audiences, their branding services elevate brand
          recognition, establish credibility, and differentiate clients from
          competitors, ultimately fostering growth.
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
        <h3>Analystics and Reporting Services:</h3>
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
          By delivering valuable, relevant content consistently, they enhance brand visibility, increase website traffic, and foster audience engagement.Through storytelling, education, and entertainment, their content drives brand awareness, builds trust, and positions clients as industry authorities, ultimately fueling business growth and driving conversions.
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
    // Add other services in the same manner
  };

  const openLightbox = (serviceKey) => {
    setLightboxContent(serviceContent[serviceKey]);
    setIsLightboxOpen(true); // Use state to control lightbox visibility
  };

  const closeLightbox = () => {
    setLightboxContent(null);
    setIsLightboxOpen(false); // Close the lightbox
  };

  return (
    <>
      <h1 className="text-center">Our Services</h1>
      <p className="text-center">
        We offer a wide range of services to help you grow your business and
        reach your goals. Our team of experts will work with you to create a
        customized plan that fits your needs and budget. Whether you need help
        with social media marketing, search engine optimization, or website
        design, we have the skills and experience to help you succeed.
      </p>
      <section id="webcoderskull-area" className="webcoderskull-law-area">
        <div className="container">
          <div className="webcoderskull-row">
            {/* Branding Services */}
            <div className="webcoderskull-item">
              <img
                src="http://tigerdigitalmarketing.com/wp-content/uploads/2024/03/Blue_White_We_Are_Open_Coffee_Shop_Poster__3_-removebg-preview-e1711120870944.png"
                alt=""
                width="60px"
                height="60px"
              />
              <h3>Branding Services:</h3>
              <p>Crafting cohesive brand identities tailored to clients’ visions.</p>
              <button
                className="learn-more"
                onClick={() => openLightbox("service1")}
              >
                <b>Learn more</b>
              </button>
            </div>
            {/* Analystics Services */}
            <div className="webcoderskull-item">
              <img
                src="https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/analytics-removebg-preview.png"
                alt=""
                width="60px"
                height="60px"
              />
              <h3>Analystics and Reporting Services:</h3>
              <p>Utilising data insights to optimise marketing strategies.</p>
              <button
                className="learn-more"
                onClick={() => openLightbox("service2")}
              >
                <b>Learn more</b>
              </button>
            </div>
            {/* Content Creation */}
            <div className="webcoderskull-item">
              <img
                src="https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/Blue_White_We_Are_Open_Coffee_Shop_Poster-removebg-preview-e1711121441793.png"
                alt=""
                width="60px"
                height="60px"
              />
              <h3>Content Creation:</h3>
              <p>Developing engaging and relevant content for target audiences.</p>
              <button
                className="learn-more"
                onClick={() => openLightbox("service3")}
              >
                <b>Learn more</b>
              </button>
            </div>
          </div>
          <div className="webcoderskull-row">
            {/* Digital Paid Ads Management */}
            <div className="webcoderskull-item">
              <img
                src="https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/digital-ads-e1711263691570.png"
                alt=""
                width="60px"
                height="60px"
              />
              <h3>Digital Paid Ads Management:</h3>
              <p>Strategically managing online advertising campaigns for maximum impact.</p><br></br>
              <button
                className="learn-more"
                onClick={() => openLightbox("service4")}
              >
                <b>Learn more</b>
              </button>
            </div>
            {/* Social Media Management */}
            <div className="webcoderskull-item">
              <img
                src="https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/socail-media.png"
                alt=""
                width="60px"
                height="60px"
              />
              <h3>Social Media Management:</h3>
              <p>Cultivating vibrant social media communities to engage audiences.</p><br></br>
              <button
                className="learn-more"
                onClick={() => openLightbox("service5")}
              >
                <b>Learn more</b>
              </button>
            </div>
            {/* SEO Services */}
            <div className="webcoderskull-item">
              <img
                src="https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/seo-removebg-preview-e1711260539817.png"
                alt=""
                width="60px"
                height="60px"
              />
              <h3>SEO Services:</h3>
              <p>Enhancing online visibility and rankings through Search Engine Optimisation (SEO) strategies.</p>
              <button
                className="learn-more"
                onClick={() => openLightbox("service6")}
              >
                <b>Learn more</b>
              </button>
            </div>
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

const HomePage = () => {
  return (
    <div className="text-center">
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
    </div>
  );
};

export default HomePage;