import React, { useState, useEffect, useRef } from "react";
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

const SuccessStories = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleItems, setVisibleItems] = useState(2); // Default for large screens
  const carouselInnerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (carouselInnerRef.current) {
        const card = carouselInnerRef.current.querySelector(".carousel-item");
        if (card) {
          setCardWidth(card.offsetWidth);

          // Update the number of visible items based on screen width
          const screenWidth = window.innerWidth;
          if (screenWidth >= 1024) {
            setVisibleItems(2); // 3 items for large screens
          } else if (screenWidth >= 576) {
            setVisibleItems(2); // 2 items for medium screens
          } else {
            setVisibleItems(1); // 1 item for small screens
          }
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    const carouselInner = carouselInnerRef.current;
    const carouselWidth = carouselInner.scrollWidth;

    const maxScrollPosition = carouselWidth - cardWidth * visibleItems;
    const nextScrollPosition = scrollPosition + cardWidth;

    if (scrollPosition < maxScrollPosition) {
      const newPosition = Math.min(nextScrollPosition, maxScrollPosition);
      setScrollPosition(newPosition);
      carouselInner.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };
  const handlePrev = () => {
    const previousScrollPosition = scrollPosition - cardWidth;

    if (scrollPosition > 0) {
      const newPosition = Math.max(previousScrollPosition, 0);
      setScrollPosition(newPosition);
      carouselInnerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const successStories = [
    {
      name: "First Pathway Partners, USA",
      website: "https://www.firstpathway.com/",
      position: "Peter Helland (Marketing Manager)",
      text: "Tiger Digital Marketing excels in social media and video editing, propelling our brand to new heights. Their creativity and expertise have significantly boosted our online presence. I highly recommend Tiger Digital Marketing for impactful and results-driven digital solutions.",
      image: "https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/FPP-e1711008968927.jpg"
    },
    {
      name: "Language Professionals, Dubai",
      website: "https://io-sphere.io/",
      position: "Marilisa Conese Gordon (Sales and Marketing Director)",
      text: "Collaborating with Tiger Digital Marketing has been a distinctive and rewarding journey. Their unwavering commitment to excellence, coupled with innovative strategies, has genuinely captivated our team at Language Professionals. I enthusiastically recommend Tiger Digital Marketing for their unique blend of professionalism and a proven track record in navigating the dynamic realm of digital marketing.",
      image: "https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/language-professionals-e1711005793289.png"
    },
    {
      name: "iO-Sphere, UK",
      website: "https://io-sphere.io/",
      position: "Oscar Colin (Founder)",
      text: "Tiger Digital Marketing has been instrumental for iO-Sphere, particularly in social media and email marketing. Their innovative solutions align perfectly with our commitment to high- growth, high - performance futures. TDM is the go - to partner for organizations navigating the dynamic digital landscape.",
      image: "https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/io-sphere-e1711007710163.jpg"
    },
    {
      name: "NaturPack, Slovakia",
      website: "https://www.naturpack.sk/en/",
      position: "Mária Trošanová (Director)",
      text: "The partnership between Naturpack and Tiger Digital Marketing has been outstanding. TDM's proficiency in social media and SEO has markedly improved our online visibility. I highly recommend their effective digital marketing services.",
      image: "https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/natur-pack-e1711028510304.jpg"
    },
    {
      name: "CodeVision, South Africa",
      website: "https://codevision.co.za/",
      position: "Graham Miller (Owner)",
      text: "I wouldn't hesitate to recommend Tiger Digital Marketing. Kay-Leigh and her team manages our blogs and social media accounts. She does an excellent job and is always on time. No hesitation whatsoever when requesting anything and I am always truly happy with the work they deliver for my business with their dedicated commitment. The quality of the work I have received is truly exceptional.They are highly skilled at what they do and always an absolute pleasure to work with. Thank you for everything you have done so far! I cannot thank you enough!",
      image: "https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/CodeVision.png"
    },
    {
      name: "Real Estate Investing, South Africa",
      website: "https://www.rei.co.za/",
      position: "Neale Petersen (Founder)",
      text: "At Real Estate Investment, we confidently recommend Tiger Digital Marketing for their impressive expertise in social media and SEO. TDM's strategies have significantly elevated our online presence and contributed to our success in the real estate industry.",
      image: "https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/image-4-e1710087715432.png"
    },
    {
      name: "Lingerie Queen, Australia",
      website: "https://thelingeriequeen.com/",
      position: "Julianna Bonet (Owner and Designer)",
      text: "Tiger Digital Marketing, led by Kay-Leigh and team, seamlessly accommodated international time changes, while greatly contributing to our brand development at Lingerie Queen. Their expertise is unmatched, making them a standout choice for digital marketing services.",
      image: "https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/lingerieQueen-1-e1711030000879.png"
    },
    {
      name: "De Hollandsche Molen, South Africa",
      website: "https://dehollandschemolen.co.za/",
      position: "Nicl Du Plooy (Manager)",
      text: "Tiger Digital Marketing has transformed our online presence at De Hollandsche Molen. From social media to photography, email marketing, website development, and SEO, their expertise shines. I highly recommend TDM for top - notch digital solutions.",
      image: "https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/DHM-removebg-preview.png"
    },
    {
      name: "Two Oceans Marathon, South Africa",
      website: "https://www.twooceansmarathon.org.za/",
      position: "William Swartbooi (Director)",
      text: "Leveraging our passion for storytelling, we had the privilege of spearheading a seasonal campaign for the renowned Two Oceans Marathon in Cape Town. From capturing the scenic beauty of the race route to showcasing the determination and spirit of the participants, our campaign aimed to encapsulate the essence of this iconic ultramarathon.Through compelling visuals and engaging content, we celebrated the unique blend of athleticism and scenic allure, that defines the Two Oceans Marathon experience.",
      image: "https://tigerdigitalmarketing.com/wp-content/uploads/2024/03/twoOceans.png"
    },
  ];

  return (
    <div className="container bg-body-tertiary py-3">
      <h2 className="text-center package-title">
        Success Stories
      </h2>
      <div id="testimonialCarousel" className="carousel">
        <div className="carousel-inner" ref={carouselInnerRef}>
          {successStories.map(({ name, website, position, text, image }, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="card shadow-sm rounded-3 p-2">
                <div className="quotes display-2 text-body-tertiary"></div>
                <div className="card-body">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    fill="currentColor"
                    className="bi bi-quote"
                    viewBox="0 0 30 30"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                  </svg>
                  <p className="card-text">{text}</p>
                  <div className="d-flex align-items-center pt-4">
                    <img src={image} alt={name} />
                    <div>
                      <h5 className="card-title fw-bold">
                        <a href={website} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                          {name}
                        </a>
                      </h5>
                      <span className="text-secondary">{position}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};


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