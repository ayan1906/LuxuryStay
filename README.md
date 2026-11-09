# 🏨 LuxuryStay — Luxury Hotel & Hospitality Platform

[![React](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-v2.14-764ABC?logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**LuxuryStay** is an elegant, modern hotel booking and hospitality web application designed to provide guests with a seamless experience when discovering luxury suites, exploring hotel amenities, and planning their stays. Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Redux Toolkit**.

---

## ✨ Key Features

- **🌆 Immersive Hero Showcase**: Full-screen hero section featuring dynamic backgrounds, welcoming highlights, and direct call-to-actions.
- **📊 Highlights & Statistics**: Real-time hotel milestones featuring guest ratings, luxury awards, 24/7 concierge support, and happy guest metrics.
- **🛏️ Featured Rooms & Suites**: Dynamic room catalog fetched via Redux Toolkit async thunk, featuring:
  - Real-time pricing with automatic discount calculation
  - Capacity, bed configuration, and room size ($m^2$)
  - High-resolution imagery with hover transitions
  - Room availability badges and guest rating breakdowns
- **📱 Fully Responsive Navigation**: Glassmorphism navbar with active route detection, mobile slide-down menu, and quick navigation to Guest Area and Login.
- **⚡ Redux State Management**: Centralized store with `roomSlice` handling asynchronous data loading, pending states, and error handling.
- **🧭 Multi-Page Routing**: Seamless client-side routing via React Router DOM v7 (`/`, `/about`, `/rooms`, `/services`, `/reviews`).
- **🔐 Guest & Auth Modules**: Modular foundation for user authentication (Login/Signup) and personalized Guest Dashboard.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend Library** | [React 19](https://react.dev/) |
| **Build Tool & Bundler** | [Vite 8](https://vite.dev/) + [React Compiler](https://react.dev/learn/react-compiler) |
| **Styling & UI** | [Tailwind CSS v4](https://tailwindcss.com/) & [Flowbite React](https://flowbite-react.com/) |
| **State Management** | [Redux Toolkit](https://redux-toolkit.js.org/) & [React-Redux](https://react-redux.js.org/) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |

---

## 📁 Project Directory Structure

```text
Luxurystay/
├── public/
│   ├── home.jpg                # Hero background image
│   ├── favicon.svg             # Website favicon
│   └── icons.svg
├── src/
│   ├── assets/                 # Static branding assets & illustrations
│   ├── Auth/
│   │   ├── Login.jsx           # Guest authentication login view
│   │   └── Signup.jsx          # New user registration view
│   ├── components/
│   │   ├── guestarea/
│   │   │   └── Dashboard.jsx   # Guest portal / dashboard
│   │   ├── Footer.jsx          # Bottom site footer & credits
│   │   ├── Hero.jsx            # Hero content & CTA actions
│   │   ├── Info.jsx            # Hotel stats & key metrics cards
│   │   ├── Navbar.jsx          # Responsive glassmorphism navigation bar
│   │   └── Rooms.jsx           # Featured room cards catalog grid
│   ├── layouts/
│   │   └── Mainlayouts.jsx     # Master layout wrapper (Navbar + Outlet + Footer)
│   ├── pages/
│   │   ├── About.jsx           # About hotel & hospitality details
│   │   ├── Home.jsx            # Landing page (Hero + Info + Rooms)
│   │   ├── Reviews.jsx         # Guest reviews & testimonials page
│   │   ├── Rooms.jsx           # All rooms & suites listing page
│   │   └── Services.jsx        # Hotel amenities & premium services
│   ├── redux/
│   │   ├── features/
│   │   │   └── roomSlice.js    # Async room fetch thunks & reducers
│   │   └── store.js            # Redux store configuration
│   ├── routes/
│   │   └── routes.jsx          # Central React Router configuration
│   ├── App.css
│   ├── App.jsx
│   ├── index.css               # Global styles, variables & Tailwind imports
│   └── main.jsx                # Application root mount with Redux Provider
├── hotel-rooms-db.json         # Mock database of hotel rooms & suites
├── package.json
├── vite.config.js              # Vite configuration with Tailwind & Flowbite plugins
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** or **yarn** / **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/Luxurystay.git
   cd Luxurystay
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:5173](http://localhost:5173) to view the application.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and builds production-ready static assets into the `dist/` directory. |
| `npm run preview` | Runs a local web server to preview the production build. |
| `npm run lint` | Runs ESLint to identify code style and quality issues. |

---

## 🎨 Theme & Color Variables

Custom colors are configured in `src/index.css`:

```css
:root {
  --text-secondary: #c56206;  /* Warm golden / amber accent */
  --navtext: #fef3c7;         /* Soft warm ivory navigation text */
  --accent: #aa3bff;
}
```

---

## 🗺️ Roadmap & Upcoming Features

- [ ] Complete Guest Booking checkout flow with date picker
- [ ] Connect Authentication system with backend / Firebase
- [ ] Implement Search & Filter by price range, capacity, and bed type
- [ ] Interactive room detail modal with full image gallery
- [ ] Guest review submission form & rating system

---

## 👨‍💻 Author

- **AYAN** — *Developer & Maintainer*
- GitHub: [@your-username](https://github.com/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
