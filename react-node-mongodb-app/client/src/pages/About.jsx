import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <h1>About BookItNow</h1>
                <p>Your trusted partner in finding the perfect hotel experience</p>
            </section>

            <section className="about-content">
                <div className="content-section">
                    <h2>Who We Are</h2>
                    <p>
                        HotelHub is a leading online hotel booking platform dedicated to making hotel reservations
                        easy, affordable, and accessible to travelers worldwide. Founded in 2020, we've successfully
                        helped thousands of customers find and book their ideal accommodations.
                    </p>
                </div>

                <div className="content-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to revolutionize the way people book hotels by providing a user-friendly platform
                        that connects travelers with a wide range of accommodation options at competitive prices. We believe
                        everyone deserves to find the perfect hotel without hassle.
                    </p>
                </div>

                <div className="content-section">
                    <h2>Our Vision</h2>
                    <p>
                        We envision a world where hotel booking is seamless, transparent, and tailored to each traveler's
                        unique needs. By leveraging technology and customer insights, we aim to become the go-to platform
                        for hotel reservations globally.
                    </p>
                </div>

                <div className="content-section">
                    <h2>Why Choose Us?</h2>
                    <ul className="features-list">
                        <li>✓ Wide selection of hotels worldwide</li>
                        <li>✓ Best price guarantee</li>
                        <li>✓ Secure and easy booking process</li>
                        <li>✓ 24/7 customer support</li>
                        <li>✓ Flexible cancellation policies</li>
                        <li>✓ Transparent pricing with no hidden fees</li>
                        <li>✓ User-friendly mobile and web platforms</li>
                        <li>✓ Loyalty rewards program</li>
                    </ul>
                </div>

                <div className="content-section">
                    <h2>Our Team</h2>
                    <p>
                        Our passionate team consists of travel enthusiasts, technology experts, and customer service professionals
                        who are dedicated to making your hotel booking experience exceptional. We work tirelessly to improve our
                        services and exceed your expectations.
                    </p>
                </div>

                <div className="stats-section">
                    <h2>By The Numbers</h2>
                    <div className="stats-grid">
                        <div className="stat-card">
                            <h3>50,000+</h3>
                            <p>Hotels Listed</p>
                        </div>
                        <div className="stat-card">
                            <h3>500,000+</h3>
                            <p>Happy Customers</p>
                        </div>
                        <div className="stat-card">
                            <h3>100+</h3>
                            <p>Countries Covered</p>
                        </div>
                        <div className="stat-card">
                            <h3>1M+</h3>
                            <p>Bookings Completed</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
