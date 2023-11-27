import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitch,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    const footerLinks = [
        "Home",
        "Doctorate Formations",
        "Establishments",
        "Professors",
        "Research Groups",
        "About Us",
        "Contact Us",
        "Privacy Policy",
        "Terms of Service",
        "FAQs",
        "Blog/News",
        "Careers",
    ];

    return (
        <div className="bg-gray-50 text-sm border-b-4">
            <div className="container mx-auto py-6">
                <div className="flex flex-col md:flex-row justify-center md:items-center md:justify-between my-3 md:my-6">
                    {/* left side of the footer */}
                    <div className="flex flex-col justify-start">
                        {/* Logo */}
                        <span className="text-lg font-bold">Logo</span>
                        {/* Adress */}
                        <div className="flex flex-col items-center justify-center md:items-start md:justify-start mt-3 md:mt-4">
                            <p>Adress:</p>
                            <p>Level 1, 12 Sample St.Sydney NSW 2000</p>
                        </div>
                        {/* Contact */}
                        <div className="flex flex-col items-center justify-center md:items-start md:justify-start mt-1 md:mt-3">
                            <p>Contact:</p>
                            <p>1800 782379@example.com</p>
                        </div>
                        {/* Social Media logos */}
                        <div className="text-lg mt-2 md:mt-4 flex gap-1 md:gap-3 items-center justify-center md:justify-start md:items-start">
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                            <FaLinkedin />
                            <FaYoutube />
                        </div>
                    </div>
                    {/* right hand side of the footer */}
                    <div className="hidden md:flex justify-between items-center">
                        <ul className="hidden md:grid md:gap-3 md:grid-cols-2 md:grid-rows-6">
                            {footerLinks.map((link, index) => (
                                <li key={index}>{link}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
