# BookItNow – Hotel Booking Web Application

## Team Members

 Aaruni Choudhary | PES2UG24CS013 

 Aditya Rad | PES2UG24CS034 

---

## Overview

<video controls src="20260414-1657-40.2096758-1.mp4" title="Title"></video>

**BookItNow** is a comprehensive full-stack web application that enables users to discover, search, and book hotels effortlessly. Built with modern web technologies following the **MERN architecture** (MongoDB, Express.js, React.js, Node.js), BookItNow provides a seamless hotel booking experience with user authentication, real-time availability checks, and a responsive design.

### Key Features

**Hotel Discovery & Search**
- Browse hotels by location, price, and ratings
- Advanced filtering and sorting options
- Real-time availability checking
- Detailed hotel information with amenities and images

**User Authentication & Profiles**
- Secure registration and login with email validation
- JWT-based session management
- User profile management and booking history
- Password security with bcrypt hashing

**Booking Management**
- Intuitive booking interface with date selection
- Real-time price calculation
- Booking confirmation and email notifications
- Edit and cancel bookings

**Checkout & Payments**
- Secure checkout process
- Special requests during booking
- Order confirmation page

**Reviews & Ratings**
- Submit and view hotel reviews
- Star ratings system
- Guest feedback

**Security**
- JWT authentication for protected routes
- Bcrypt password hashing
- CORS enabled for secure communication

**Responsive Design**
- Mobile-friendly interface
- Cross-browser compatibility
- Modern UI/UX with intuitive navigation

---

## Tech Stack

### Frontend
- **Framework**: React.js 18.x
- **Routing**: React Router v7.x
- **HTTP Client**: Axios
- **Styling**: CSS3, Tailwind CSS components
- **UI Components**: Shadcn/ui component library

### Backend
- **Runtime**: Node.js
- **Server**: Express.js
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Middleware**: CORS, dotenv for environment variables

### Database
- **Database**: MongoDB (Atlas Cloud)
- **ODM**: Mongoose v5.x
- **Models**: User, Hotel, Room, Booking, Review

### Development Tools
- **Package Manager**: npm
- **Development Server**: Nodemon (for backend hot-reload)

---

## Project Structure

```
BookItNow/
├── App.tsx                          # Main React application component
├── README.md                        # This file
├── Attributions.md                  # Project attributions
├── client/                          # Frontend application
│   ├── components/                  # Reusable React components
│   │   ├── AdminDashboardPage.tsx
│   │   ├── BookingPage.tsx
│   │   ├── ConfirmationPage.tsx
│   │   ├── CoverPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── HotelDetailsPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── SearchResultsPage.tsx
│   │   ├── UserDashboardPage.tsx
│   │   ├── figma/
│   │   └── ui/                      # Shadcn UI component library
│   ├── package.json
│   └── src/
├── react-node-mongodb-app/
│   ├── client/                      # React frontend with Vite
│   │   ├── src/
│   │   │   ├── pages/              # Page components
│   │   │   ├── components/         # Reusable components
│   │   │   ├── hooks/              # Custom React hooks
│   │   │   ├── services/           # API service functions
│   │   │   └── styles/             # CSS stylesheets
│   │   └── package.json
│   ├── server/                      # Node.js/Express backend
│   │   ├── src/
│   │   │   ├── models/             # Mongoose database models
│   │   │   ├── controllers/        # Business logic controllers
│   │   │   ├── routes/             # API route definitions
│   │   │   ├── middleware/         # Authentication & middleware
│   │   │   ├── config/             # Database configuration
│   │   │   ├── seeds/              # Database seed data
│   │   │   ├── app.js              # Express app initialization
│   │   │   └── index.js            # Server entry point
│   │   └── package.json
│   ├── SETUP_GUIDE.md              # Installation & setup instructions
│   ├── DEPLOYMENT_GUIDE.md         # Deployment instructions
│   └── README.md                   # Backend documentation
├── styles/                          # Global CSS styles
│   └── globals.css
└── guidelines/                      # Project guidelines
    └── Guidelines.md
```

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB** - Use either:
  - Local MongoDB installation - [Download](https://www.mongodb.com/try/download/community)
  - MongoDB Atlas (Cloud) - [Sign up](https://www.mongodb.com/cloud/atlas)
- **Git** (optional) - [Download](https://git-scm.com/)

### Installation Steps

#### 1. Clone or Download the Repository

```bash
# If using Git:
git clone <repository-url>
cd BookItNow

# Or if downloaded as ZIP, extract and navigate to:
cd BookItNow
```

#### 2. Install Backend Dependencies

```bash
cd react-node-mongodb-app/server
npm install
```

#### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
cd ../..
```

#### 4. Configure Environment Variables

Create a `.env` file in the `react-node-mongodb-app/server` directory with the following variables:

```bash
# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bookitnow?retryWrites=true&w=majority
# Or for local MongoDB:
# MONGODB_URI=mongodb://localhost:27017/bookitnow

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here_change_this_in_production

# Optional: For email notifications
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_email_password
```

**Tip**: For MongoDB Atlas:
1. Create a free account at [mongodb.com/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string and replace `username:password@cluster` with your credentials

#### 5. Seed Database (Optional)

If there are seed scripts, run them to populate initial data:

```bash
cd react-node-mongodb-app/server
npm run seed  # If this command exists
cd ../..
```

---

## Running on Localhost

### Method 1: Running Both Frontend & Backend (Recommended)

#### Terminal 1 - Start Backend Server

```bash
cd react-node-mongodb-app/server
npm start
# Or for development with auto-reload:
npm run dev
```

**Expected Output:**
```
Server running on http://localhost:5000
MongoDB connected successfully
```

#### Terminal 2 - Start Frontend Application

Open a new terminal and run:

```bash
cd react-node-mongodb-app/client
npm start
```

**Expected Output:**
```
Compiled successfully!
You can now view the application in your browser.
Local: http://localhost:3000
```

#### Access the Application

Open your web browser and navigate to:
```
http://localhost:3000
```

### Method 2: Running Using npm Scripts (From Root)

If the root package.json has concurrent scripts:

```bash
npm run dev
```

This should start both servers simultaneously.

---

## Available Scripts

### Frontend Scripts
```bash
cd react-node-mongodb-app/client

npm start          # Start development server on port 3000
npm run build      # Create optimized production build
npm test           # Run tests
npm run eject      # Eject from create-react-app (irreversible!)
```

### Backend Scripts
```bash
cd react-node-mongodb-app/server

npm start          # Start server on port 5000
npm run dev        # Start with nodemon (auto-reload on file changes)
npm test           # Run tests
npm run seed       # Seed database with initial data (if available)
```

---

## API Endpoints

### Authentication Routes
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Hotel Routes
- `GET /api/hotels` - Get all hotels
- `GET /api/hotels/:id` - Get hotel details
- `GET /api/hotels/search?city=...` - Search hotels by city
- `POST /api/hotels` - Create hotel (Admin only)

### Booking Routes
- `GET /api/bookings` - Get user's bookings
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Cancel booking

### Review Routes
- `GET /api/reviews/:hotelId` - Get hotel reviews
- `POST /api/reviews` - Submit review
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review

### User Routes
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/:id` - Get user details (Admin only)

---

## Default Credentials (If Available)

If the database has been seeded with test data:

**Admin Account:**
- Email: `admin@example.com`
- Password: `password123`

**Test User:**
- Email: `user@example.com`
- Password: `password123`

**Note**: Change these credentials immediately in production!

---

## Troubleshooting

### Port Already in Use
If port 3000 or 5000 is already in use:

**For Frontend (Port 3000):**
```bash
# Windows (Command Prompt)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

**For Backend (Port 5000):**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

### MongoDB Connection Error
- Verify MongoDB is running locally: `mongod`
- Or check MongoDB Atlas connection string in `.env`
- Ensure firewall isn't blocking connections
- Check network access in MongoDB Atlas dashboard

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Module Not Found Errors
```bash
# Reinstall dependencies in both client and server
cd react-node-mongodb-app/client && npm install
cd ../server && npm install
```

### CORS Errors
Ensure the backend CORS configuration includes your frontend URL:
```javascript
// In server/src/app.js or index.js
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

---

## Building for Production

### Build Frontend
```bash
cd react-node-mongodb-app/client
npm run build
```

This creates an optimized build in the `build/` directory.

### Deploy Backend
See [DEPLOYMENT_GUIDE.md](./react-node-mongodb-app/DEPLOYMENT_GUIDE.md) for cloud deployment options (Heroku, AWS, DigitalOcean, etc.)

---

## Documentation

- [Setup Guide](./react-node-mongodb-app/SETUP_GUIDE.md) - Detailed installation instructions
- [Deployment Guide](./react-node-mongodb-app/DEPLOYMENT_GUIDE.md) - Production deployment
- [Project Guidelines](./guidelines/Guidelines.md) - Coding standards and conventions
- [Attributions](./Attributions.md) - Third-party libraries and resources

---
### Code Style
- Follow the guidelines in [Guidelines.md](./guidelines/Guidelines.md)
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and modular

---

## Next Steps

1. Install all dependencies
2. Configure MongoDB connection
3. Start the backend server
4. Start the frontend application
5. Create a user account and test the booking flow
6. Explore the admin dashboard

---

## Support & Questions

For questions or issues:
- Check the [Troubleshooting](#-troubleshooting) section
- Review [SETUP_GUIDE.md](./react-node-mongodb-app/SETUP_GUIDE.md)
- Check browser console for error messages
- Verify all environment variables are correctly set

---

**Happy Booking!**
