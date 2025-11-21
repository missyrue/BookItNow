import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    const [searchCity, setSearchCity] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchCity.trim()) {
            navigate(`/hotels?city=${encodeURIComponent(searchCity)}`);
        }
    };

    return (
        <div className="home-page">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to BookItNow</h1>
                    <p>Find and book your perfect hotel stay</p>
                    
                    <form className="search-form" onSubmit={handleSearch}>
                        <div className="search-input-group">
                            <input
                                type="text"
                                placeholder="Search by city..."
                                value={searchCity}
                                onChange={(e) => setSearchCity(e.target.value)}
                                className="search-input"
                            />
                            <button type="submit" className="search-btn">Search Hotels</button>
                        </div>
                    </form>
                </div>
            </section>

            <section className="featured-section">
                <h2>Featured Hotels</h2>
                <div className="featured-grid">
                    <div className="featured-card">
                        <div className="card-image">
                            <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop" alt="Luxury Hotel" />
                        </div>
                        <div className="card-content">
                            <h3>Luxury Resort</h3>
                            <p>Experience ultimate comfort and luxury</p>
                            <p className="price">From ₹12,500/night</p>
                        </div>
                    </div>
                    
                    <div className="featured-card">
                        <div className="card-image">
                            <img src="https://images.unsplash.com/photo-1582719471537-c3400ca199e7?w=500&h=300&fit=crop" alt="Boutique Hotel" />
                        </div>
                        <div className="card-content">
                            <h3>Boutique Hotel</h3>
                            <p>Charming and intimate accommodation</p>
                            <p className="price">From ₹6,700/night</p>
                        </div>
                    </div>
                    
                    <div className="featured-card">
                        <div className="card-image">
                            <img src="https://images.unsplash.com/photo-1572120471610-ba4facef254d?w=500&h=300&fit=crop" alt="Budget Hotel" />
                        </div>
                        <div className="card-content">
                            <h3>Budget Hotel</h3>
                            <p>Affordable comfort for every traveler</p>
                            <p className="price">From ₹3,300/night</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="benefits-section">
                <h2>Why Choose HotelHub?</h2>
                <div className="benefits-grid">
                    <div className="benefit-card">
                        <div className="benefit-icon">🔍</div>
                        <h3>Easy Search</h3>
                        <p>Find hotels quickly with our powerful search filters</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">💰</div>
                        <h3>Best Prices</h3>
                        <p>Get the best deals on hotel bookings</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">✅</div>
                        <h3>Easy Booking</h3>
                        <p>Simple and secure booking process</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">📞</div>
                        <h3>24/7 Support</h3>
                        <p>Our support team is always here to help</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
