# 🏠 Airbnb Clone - Full Stack Application

A full-featured Airbnb clone built with **Express.js** (Backend) and **React** (Frontend). This project provides a complete vacation rental platform where users can browse properties, make bookings, and hosts can list their properties.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the Project](#-running-the-project)
- [API Endpoints](#-api-endpoints)
- [Frontend Routes](#-frontend-routes)
- [Database Schema](#-database-schema)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### User Features
- 🔐 **Authentication & Authorization**
  - User registration with email verification (OTP)
  - Secure login with JWT tokens
  - Role-based access (User, Business/Host, Admin)
  - Session management with Redis

- 🏡 **Property Browsing**
  - Browse available properties
  - Advanced location-based search (Country, State, City)
  - Filter properties by location
  - View property details and images
  - Responsive property listings

- 📅 **Booking System**
  - Book properties with date selection
  - View booking history
  - Transaction management

- 💳 **Payment Integration**
  - Razorpay payment gateway integration
  - Secure transaction processing
  - Payment history

### Host Features
- 🏠 **Property Management**
  - Create and manage property listings
  - Upload multiple property images
  - Set pricing and availability
  - Manage property details (title, description, amenities)

- 📊 **Dashboard**
  - View bookings
  - Manage property listings
  - Analytics and insights

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Session Store**: Redis
- **Authentication**: JWT (JSON Web Tokens), Passport.js
- **File Upload**: Multer
- **Payment Gateway**: Razorpay
- **Email Service**: Nodemailer
- **Template Engine**: EJS

### Frontend
- **Framework**: React 19.2.0
- **Language**: TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM 7.9.6
- **Styling**: Tailwind CSS 4.1.17
- **UI Components**: 
  - Radix UI
  - Lucide React (Icons)
  - TanStack Table (Data Tables)
- **HTTP Client**: Axios
- **State Management**: React Hooks

### Additional Tools
- **Password Hashing**: bcryptjs
- **OTP Generation**: otp-generator
- **Location API**: CountriesNow API

## 📁 Project Structure

```
Back-end-/
├── config/                 # Configuration files
│   ├── mongoose.js        # MongoDB connection
│   ├── redis.js           # Redis connection
│   └── razorpay.js        # Razorpay configuration
│
├── controller/            # Business logic controllers
│   ├── sign.js           # Authentication (login, signup, OTP)
│   ├── home.js           # Property management
│   ├── housebook.js      # Booking management
│   ├── payment.js        # Payment processing
│   ├── upload.js         # File upload handling
│   └── option.js         # Additional options
│
├── middleware/            # Custom middleware
│   ├── jwt.js            # JWT verification for users
│   └── jwts.js           # JWT verification for hosts
│
├── models/               # Database models
│   ├── user.js           # User schema
│   ├── add.js            # Property/Home schema
│   ├── booking.js        # Booking schema
│   ├── review.js         # Review schema
│   ├── session.js       # Session management
│   └── transtion.js      # Transaction schema
│
├── router/               # Express routes
│   ├── user.js           # User routes
│   └── host.js           # Host routes
│
├── utils/                 # Utility functions
│   └── Otp.js            # OTP email service
│
├── views/                # EJS templates (legacy)
│   ├── home.ejs
│   ├── login.html
│   ├── signup.html
│   └── ...
│
├── uploads/              # Uploaded files directory
│
├── frontend/             # React frontend application
│   ├── src/
│   │   ├── component/    # React components
│   │   │   ├── Host/     # Host-specific components
│   │   │   │   └── Bookingform.tsx
│   │   │   └── User/     # User-specific components
│   │   │       ├── Hostlist.tsx
│   │   │       ├── LocationSelector.tsx
│   │   │       ├── Navbar.tsx
│   │   │       └── Footer.tsx
│   │   ├── components/   # Reusable UI components
│   │   │   └── ui/      # shadcn/ui components
│   │   ├── ui/          # Page components
│   │   │   ├── Loginpage.tsx
│   │   │   └── Datatable.tsx
│   │   ├── App.tsx      # Main app component
│   │   ├── Home.tsx     # Home page
│   │   ├── Login.tsx    # Login page
│   │   └── Signup.tsx   # Signup page
│   ├── package.json
│   └── vite.config.ts
│
├── login.js              # Main server entry point
├── package.json          # Backend dependencies
└── .env                  # Environment variables (create this)
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (running locally or MongoDB Atlas connection string)
- **Redis** (for session management)
- **Git**

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Back-end-
```

### 2. Install Backend Dependencies

```bash
npm install
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
cd ..
```

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
port=3000

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/airbnb-clone
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/airbnb-clone

# JWT Secret
jwt_sceret=your-super-secret-jwt-key-here

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379

# Email Configuration (for OTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Razorpay Configuration
RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-key-secret

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## ▶️ Running the Project

### Start MongoDB

Make sure MongoDB is running on your system:

```bash
# Windows
net start MongoDB

# macOS (with Homebrew)
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### Start Redis

```bash
# Windows (download Redis for Windows)
redis-server

# macOS
brew services start redis

# Linux
sudo systemctl start redis
```

### Start Backend Server

```bash
# Development mode (with nodemon)
npm run dev

# OR Production mode
node login.js
```

The backend server will run on `http://localhost:3000`

### Start Frontend Development Server

Open a new terminal:

```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173` (Vite default port)

## 📡 API Endpoints

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/signup` | Register new user | No |
| POST | `/login` | User login | No |
| POST | `/auth` | Verify OTP | No |
| GET | `/logout` | User logout | Yes |

### User Endpoints (`/user`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/user/` | Get all properties | Yes |
| GET | `/user/profile` | Get user profile | Yes |
| GET | `/user/productdetail` | Property details page | Yes |
| POST | `/user/book` | Create booking | Yes |
| GET | `/user/book` | Get booking details | Yes |
| POST | `/user/payment` | Process payment | Yes |
| GET | `/user/transtion` | Transaction history | Yes |
| GET | `/user/logout` | Logout user | Yes |

### Host Endpoints (`/host`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/host/` | Host dashboard | Yes |
| POST | `/host/add` | Add new property | Yes |
| GET | `/host/profile` | Host profile | Yes |
| GET | `/host/logout` | Logout host | Yes |

## 🎨 Frontend Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home` | Home page with property listings |
| `/login` | `Login` | User login page |
| `/loginpage` | `Loginpage` | Modern login page (Airbnb style) |
| `/signup` | `Signup` | User registration page |
| `/bookingform` | `Bookingform` | Property booking form |
| `/data` | `DataTableDemo` | Data table demo page |

## 🗄 Database Schema

### User Model
```javascript
{
  username: String (required),
  email: String (required, unique),
  password: String (hashed, required),
  role: String (enum: 'user', 'business', 'admin'),
  otp: String,
  isverified: Boolean,
  otpExpires: Date,
  address: {
    street, city, state, country, zipCode
  },
  createdAt: Date
}
```

### Property Model
```javascript
{
  title: String (required),
  description: String (required),
  type: String (enum: 'apartment', 'house', 'villa', 'Hotel room'),
  location: {
    address, city, state, country,
    coordinates: { lat, lng }
  },
  stats: {
    guests, bedrooms, beds, baths
  },
  price: {
    amount, currency, period
  },
  images: [String],
  amenities: [String],
  productid: ObjectId (ref: 'user'),
  rating: {
    average, count
  },
  availability: {
    blockedDates: [Date]
  }
}
```

## 🧪 Development

### Backend Development

```bash
# Install nodemon for auto-reload
npm install -g nodemon

# Run with nodemon
nodemon login.js
```

### Frontend Development

```bash
cd frontend

# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🔧 Common Issues & Solutions

### MongoDB Connection Error
- Ensure MongoDB is running
- Check `MONGODB_URI` in `.env`
- Verify network connectivity

### Redis Connection Error
- Ensure Redis server is running
- Check Redis port (default: 6379)
- Verify Redis configuration

### Port Already in Use
- Change the port in `.env` file
- Or kill the process using the port:
  ```bash
  # Windows
  netstat -ano | findstr :3000
  taskkill /PID <PID> /F
  
  # macOS/Linux
  lsof -ti:3000 | xargs kill
  ```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Airbnb for design inspiration
- CountriesNow API for location data
- All open-source contributors

---

**Note**: This is a clone project for educational purposes. Make sure to comply with all legal requirements and terms of service when deploying to production.

