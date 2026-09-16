import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    // Number format: removes '+' and spaces
    const phoneNumber = "97450192200";
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsappLink}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
        >
            <img src="/static/images/w4.png" alt="WhatsApp Icon" className="whatsapp-icon" />
        </a>
    );
};

export default WhatsAppButton;
