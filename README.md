# 🛒 DZ Store | E-Commerce Web Application

[![Live Demo](https://img.shields.io/badge/Live-Demo-3b82f6?style=for-the-badge&logo=vercel&logoColor=white)](https://e-dz.vercel.app/)
[![Author](https://img.shields.io/badge/Author-Nidal15--ds-0f172a?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Nidal15-ds)

## 📌 Project Overview
**DZ Store** is a fully responsive, modern e-commerce web application tailored for the Algerian market. It features a curated catalog of traditional and contemporary menswear—including Qamiss (Thobes), sport shoes, t-shirts, watches, jackets, slacks, and exclusive multi-item bundle packs. Designed with clean UI/UX principles, the platform provides seamless product filtering, interactive cart management, dynamic search functionality, and a dedicated customer suggestion/product request system covering all 58 wilayas.

---

## 🛠️ Tech Stack
* **Frontend Library:** React.js (Functional Components)
* **Routing:** React Router DOM (`useRoutes`, `Link`, `useSearchParams`)
* **State Management & Context:** React Context API (`useContext`, Custom Hooks)
* **Styling:** Modular CSS with CSS Variables and Flexbox/Grid responsive layouts
* **Icons & UI Assets:** Custom SVG elements and vector iconography

---

## 🧠 What I Learned & React Concepts Implemented
Building this project deeply enhanced my practical mastery of core React architecture and modern frontend workflows:

* **React Hooks:**
  * `useState`: Managed local component states for search filters, sorting options, interactive mobile hamburger menus, and multi-field form data inputs.
  * `useEffect`: Synchronized document filtering states with URL parameters and handled timed alerts.
  * `useContext` & Custom Hooks (`useCart`): Implemented global state management to share cart items and quantities smoothly across separate Navbar, Catalog, and Cart components without prop drilling.
* **Routing & Navigation:** Utilized `react-router-dom` for client-side multi-page routing, dynamic product URL parameters (`useParams`), and query string manipulation (`useSearchParams`) for category filtering.
* **Component-Based Architecture:** Broken down the UI into reusable, modular components (`Navbar`, `Footer`, `SuggestionBox`, Product Cards) to keep code clean and maintainable.
* **State Immutability & Array Methods:** Leveraged modern JavaScript array methods (`filter`, `reduce`, `map`, `forEach`, `sort`) to handle cart calculations, pricing updates, and multi-criteria product filtering.
* **Responsive Web Design:** Built custom CSS media queries and mobile drawer navigation with animated transitions and state toggling.

---

## 📂 Project Structure
```text
dz-store/
├── public/                # Static assets and public index
├── src/
│   ├── components/        # Reusable UI parts (Navbar, Footer, SuggestionBox)
│   ├── context/           # React Context state providers (CartContext)
│   ├── data/              # Mock database objects (products.js)
│   ├── pages/             # Route pages (Home, Products, ProductDetails, Cart, Contact)
│   ├── App.jsx            # Main app router wrapper
│   ├── App.css            # Global application styles
│   └── main.js / index.js # Application entry point
├── package.json           # Dependencies and project scripts
└── README.md              # Project documentation

🚀 Getting Started & Local Installation

To run this project locally on your machine, follow these simple steps:
1. Clone the Repository
Bash

git clone [https://github.com/Nidal15-ds/dz-store.git](https://github.com/Nidal15-ds/dz-store.git)
cd dz-store

2. Install Dependencies

Make sure you have Node.js installed, then run:
Bash

npm install

3. Run on Localhost

Start the local development server:
Bash

npm run dev

Open your browser and navigate to http://localhost:5173 (or the port specified in your terminal).
🌐 Deployment

The project is continuously deployed and hosted live using Vercel:

    Live Demo: https://e-dz.vercel.app/

✍️ Author

    Nidal Dous (Nidal15-ds)
