import React, { useState, useEffect } from "react";
/* import { collection, getDocs } from "firebase/firestore"; */
import { getFaqs } from "../../config/firebase";
import "./FAQ.css";
import "../../App.css";

const FAQ = ({ collectionName }) => {
    const [faqs, setFaqs] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const fetchFaqs = async () => {
            const faqList = await getFaqs(collectionName); // Use dynamic collection name
            setFaqs(faqList);
        };

        fetchFaqs();
    }, [collectionName]); // Run whenever collectionName changes

    const toggleActive = (index) => {
        setActiveIndex(index === activeIndex ? null : index); // Toggle active state
    };

    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div
                    key={faq.id}
                    className={`faq ${index === activeIndex ? 'active' : ''}`}
                >
                    <h3 className="faq-title">{faq.question}</h3>
                    <p className={`faq-text ${index === activeIndex ? 'active' : ''}`}>{faq.answer}</p>
                    <button className="faq-toggle" onClick={() => toggleActive(index)}>
                        <i className={`fa ${index === activeIndex ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
