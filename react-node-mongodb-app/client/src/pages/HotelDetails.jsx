import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apiCall } from '../utils/api';
import '../styles/HotelDetails.css';

const HotelDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [bookingData, setBookingData] = useState({
        checkInDate: '',
        checkOutDate: '',
        numberOfGuests: 1,
    });

    useEffect(() => {
        const fetchHotel = async () => {
            try {
                const response = await apiCall(`/hotels/${id}`);
                const data = await response.json();
                setHotel(data);
            } catch (error) {
                console.error('Error fetching hotel:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchHotel();
    }, [id]);

    const handleBookingChange = (e) => {
        const { name, value } = e.target;
        setBookingData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleBooking = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        if (!bookingData.checkInDate || !bookingData.checkOutDate) {
            alert('Please select both check-in and check-out dates');
            return;
        }

        navigate(`/checkout/${id}`, { state: { hotel, bookingData } });
    };

    if (loading) return <div className="loading">Loading hotel details...</div>;
    if (!hotel) return <div className="error">Hotel not found</div>;

    return (
        <div className="hotel-details-page">
            <div className="hotel-header">
                {hotel.image && (
                    <img src={hotel.image} alt={hotel.name} className="hotel-hero-image" />
                )}
                <div className="header-overlay">
                    <h1>{hotel.name}</h1>
                    <p className="location">📍 {hotel.address}, {hotel.city}</p>
                </div>
            </div>

            <div className="details-container">
                <div className="main-content">
                    <section className="description-section">
                        <h2>About this hotel</h2>
                        <p>{hotel.description}</p>
                    </section>

                    <section className="amenities-section">
                        <h2>Amenities</h2>
                        <div className="amenities-grid">
                            {hotel.amenities && hotel.amenities.map((amenity, index) => (
                                <div key={index} className="amenity-item">
                                    <span className="amenity-icon">✓</span>
                                    <span>{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="rating-section">
                        <h2>Guest Reviews</h2>
                        <div className="rating-display">
                            <span className="rating-score">⭐ {hotel.rating}/5</span>
                            <span className="review-count">Based on {hotel.reviewCount} reviews</span>
                        </div>
                    </section>
                </div>

                <aside className="booking-sidebar">
                    <div className="booking-card">
                        <h3>Book Now</h3>
                        <p className="price">₹{hotel.pricePerNight} per night</p>

                        <div className="form-group">
                            <label htmlFor="checkIn">Check-in Date</label>
                            <input
                                type="date"
                                id="checkIn"
                                name="checkInDate"
                                value={bookingData.checkInDate}
                                onChange={handleBookingChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="checkOut">Check-out Date</label>
                            <input
                                type="date"
                                id="checkOut"
                                name="checkOutDate"
                                value={bookingData.checkOutDate}
                                onChange={handleBookingChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="guests">Number of Guests</label>
                            <input
                                type="number"
                                id="guests"
                                name="numberOfGuests"
                                value={bookingData.numberOfGuests}
                                onChange={handleBookingChange}
                                min="1"
                                max="10"
                            />
                        </div>

                        <button className="book-btn" onClick={handleBooking}>
                            Proceed to Booking
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default HotelDetails;
