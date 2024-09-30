import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import "../../App.css";

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
export default SuccessStories;
