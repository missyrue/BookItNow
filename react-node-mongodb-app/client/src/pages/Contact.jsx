import React, { useState } from 'react';
import { apiCall } from '../utils/api';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        rating: 5,
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await apiCall('/reviews', {
                method: 'POST',
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to submit form');
            }

            setSuccess('Thank you for your message! We will get back to you soon.');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
                rating: 5,
            });

            setTimeout(() => setSuccess(''), 5000);
        } catch (error) {
            setError(error.message || 'Error submitting form');
            console.error('Contact form error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Get in touch with our team.</p>
            </section>

            <div className="contact-container">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <div className="info-card">
                        <h3>📍 Address</h3>
                        <p>101 Tech Park, Whitefield<br />Bangalore, Karnataka 560066<br />India</p>
                    </div>
                    <div className="info-card">
                        <h3>📞 Phone</h3>
                        <p>Main: +91 80 4949 4949<br />Support: +91 98765 43210<br />Toll Free: 1800-425-1234</p>
                    </div>
                    <div className="info-card">
                        <h3>✉️ Email</h3>
                        <p>General: info@bookitnow.com<br />Support: support@bookitnow.com<br />Partnerships: partnerships@bookitnow.com</p>
                    </div>
                    <div className="info-card">
                        <h3>🕐 Business Hours</h3>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                    <h2>Send us a Message</h2>

                    {success && <div className="success-message">{success}</div>}
                    {error && <div className="error-message">{error}</div>}

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your email"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject of your message"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us how we can help..."
                            rows="6"
                            required
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="rating">Rate Your Experience</label>
                        <select
                            id="rating"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                        >
                            <option value="1">1 - Poor</option>
                            <option value="2">2 - Fair</option>
                            <option value="3">3 - Good</option>
                            <option value="4">4 - Very Good</option>
                            <option value="5">5 - Excellent</option>
                        </select>
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
