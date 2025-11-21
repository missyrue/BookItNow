import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { apiCall } from '../utils/api';
import '../styles/Hotels.css';

const Hotels = () => {
    const [searchParams] = useSearchParams();
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({
        city: searchParams.get('city') || '',
        priceMin: '',
        priceMax: '',
        rating: '',
    });

    const fetchHotels = async (filterParams) => {
        setLoading(true);
        try {
            const query = new URLSearchParams(filterParams).toString();
            const response = await apiCall(`/hotels?${query}`);
            const data = await response.json();
            setHotels(data);
        } catch (error) {
            console.error('Error fetching hotels:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHotels(filters);
    }, [filters]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleResetFilters = () => {
        setFilters({
            city: '',
            priceMin: '',
            priceMax: '',
            rating: '',
        });
    };

    return (
        <div className="hotels-page">
            <h1>Search Hotels</h1>
            
            <div className="hotels-container">
                <aside className="filters-sidebar">
                    <h3>Filters</h3>
                    
                    <div className="filter-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={filters.city}
                            onChange={handleFilterChange}
                            placeholder="Enter city name"
                        />
                    </div>

                    <div className="filter-group">
                        <label htmlFor="priceMin">Min Price</label>
                        <input
                            type="number"
                            id="priceMin"
                            name="priceMin"
                            value={filters.priceMin}
                            onChange={handleFilterChange}
                            placeholder="Minimum price"
                        />
                    </div>

                    <div className="filter-group">
                        <label htmlFor="priceMax">Max Price</label>
                        <input
                            type="number"
                            id="priceMax"
                            name="priceMax"
                            value={filters.priceMax}
                            onChange={handleFilterChange}
                            placeholder="Maximum price"
                        />
                    </div>

                    <div className="filter-group">
                        <label htmlFor="rating">Min Rating</label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            value={filters.rating}
                            onChange={handleFilterChange}
                            min="1"
                            max="5"
                            placeholder="Minimum rating"
                        />
                    </div>

                    <button className="reset-btn" onClick={handleResetFilters}>Reset Filters</button>
                </aside>

                <main className="hotels-list">
                    {loading && <p className="loading">Loading hotels...</p>}
                    
                    {!loading && hotels.length === 0 && (
                        <p className="no-results">No hotels found. Try adjusting your filters.</p>
                    )}

                    {!loading && hotels.length > 0 && (
                        <div className="hotels-grid">
                            {hotels.map(hotel => (
                                <Link key={hotel._id} to={`/hotel/${hotel._id}`} className="hotel-card">
                                    {hotel.image && (
                                        <div className="hotel-image">
                                            <img src={hotel.image} alt={hotel.name} />
                                        </div>
                                    )}
                                    <div className="hotel-info">
                                        <h3>{hotel.name}</h3>
                                        <p className="location">📍 {hotel.address}, {hotel.city}</p>
                                        <p className="description">{hotel.description}</p>
                                        <div className="hotel-footer">
                                            <div className="rating">
                                                <span className="stars">⭐ {hotel.rating}</span>
                                                <span className="review-count">({hotel.reviewCount})</span>
                                            </div>
                                            <p className="price">₹{hotel.pricePerNight}/night</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Hotels;
