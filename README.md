# 🛒 DZ Store | E-Commerce Web Application

[![Live Demo](https://img.shields.io/badge/Live%20Demo-3b82f6?style=for-the-badge\&logo=vercel\&logoColor=white)](https://e-dz.vercel.app/)
[![Author](https://img.shields.io/badge/Author-Nidal15--ds-0f172a?style=for-the-badge\&logo=github\&logoColor=white)](https://github.com/Nidal15-ds)

## 📌 Project Overview

**DZ Store** is a fully responsive e-commerce web application tailored for the Algerian market. It features a curated catalog of traditional and contemporary menswear, including Qamiss (Thobes), sport shoes, t-shirts, watches, jackets, slacks, and multi-item bundle packs.

The application focuses on practical React development, clean UI/UX, reusable components, client-side routing, global state management, product filtering, dynamic search, and cart management.

It also includes a customer suggestion/product request system covering all 58 wilayas of Algeria.

---

## ✨ Features

* Responsive design for desktop, tablet, and mobile
* Product catalog with multiple categories
* Dynamic product search
* Category filtering
* Product sorting
* Product details pages
* Dynamic product routes
* Shopping cart management
* Add and remove products from cart
* Update product quantities
* Automatic cart total calculation
* Customer suggestion/product request form
* Wilaya selection covering all 58 Algerian wilayas
* Mobile navigation drawer
* Responsive UI with CSS animations and transitions
* Client-side routing without full page reloads

---

## 🛠️ Tech Stack

* **Frontend Library:** React.js
* **Routing:** React Router DOM
* **State Management:** React Context API
* **React Hooks:** `useState`, `useEffect`, `useContext`, `useParams`, `useSearchParams`
* **Styling:** CSS, CSS Variables, Flexbox, CSS Grid, Media Queries
* **Icons & UI Assets:** Custom SVG elements and vector iconography
* **Deployment:** Vercel

---

## 🧠 React Concepts Implemented

This project was built to practice and apply core React concepts in a complete application.

### React Hooks

* `useState`

  * Search state
  * Filtering and sorting state
  * Cart interactions
  * Mobile navigation state
  * Form state

* `useEffect`

  * Synchronizing application state with URL parameters
  * Timed alerts and UI effects

* `useContext`

  * Global cart state
  * Sharing cart data between components without prop drilling

* Custom Hooks

  * `useCart` for accessing cart functionality

### Routing & Navigation

* Client-side routing with `react-router-dom`
* Dynamic product routes using `useParams`
* Query parameters using `useSearchParams`
* Navigation using `Link`
* Route configuration using `useRoutes`

### State Management

* Array state
* Object state
* Immutable state updates
* Derived state
* Cart quantity management
* Cart total calculations

### JavaScript Array Methods

Used extensively for application logic:

* `map()`
* `filter()`
* `reduce()`
* `sort()`
* `forEach()`

### Component Architecture

The application is divided into reusable components and pages, including:

* `Navbar`
* `Footer`
* `ProductCard`
* `SuggestionBox`
* Cart components
* Product pages
* Home page
* Contact page

### Responsive Design

* CSS media queries
* Flexbox
* CSS Grid
* Responsive navigation
* Mobile drawer menu
* Animated UI transitions

---

## 📂 Project Structure

```text
dz-store/
├── public/
│   └── assets/                  # Public static assets
│
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── ProductCard/
│   │   └── SuggestionBox/
│   │
│   ├── context/                 # Global React state
│   │   └── CartContext.jsx
│   │
│   ├── data/                    # Product data
│   │   └── products.js
│   │
│   ├── pages/                   # Application pages
│   │   ├── Home/
│   │   ├── Products/
│   │   ├── ProductDetails/
│   │   ├── Cart/
│   │   └── Contact/
│   │
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # Global application styles
│   └── main.jsx                 # Application entry point
│
├── package.json
├── vite.config.js
└── README.md
```

> Adjust the structure above to match the exact folders and files in your repository.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Nidal15-ds/e-commerce-front-end.git
cd e-commerce-front-end
```

### 2. Install Dependencies

Make sure [Node.js](https://nodejs.org/) is installed.

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at the local URL displayed by Vite, usually:

```text
http://localhost:5173
```

---

## 🌐 Deployment

The application is deployed and hosted using **Vercel**.

**Live Demo:**

https://e-dz.vercel.app/

The deployed application is automatically updated when changes are pushed to the connected GitHub repository.

---



## 🔮 Future Improvements

Possible future improvements include:

* Backend integration (django)
* Real product database
* User authentication
* Product administration dashboard
* Order management
* Persistent shopping cart
* Online payment integration
* Product reviews and ratings
* Real customer orders

These features are not currently implemented and would require a backend/API.

---

## 👨‍💻 Author

**Nidal Dous**

* GitHub: [@Nidal15-ds](https://github.com/Nidal15-ds)
* Live Project: [DZ Store](https://e-dz.vercel.app/)

---

## 📄 License

This project was created for educational and portfolio purposes.
