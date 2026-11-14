# 🏨 LuxuryStay — Luxury Hotel & Hospitality Platform

[![React](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-v2.14-764ABC?logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Auth-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**LuxuryStay** is an end-to-end, modern luxury hotel booking and hospitality web application designed to deliver a premier digital experience for guests. Guests can seamlessly discover exquisite suites, book stays with integrated date range pickers, request 24/7 concierge services, and manage their personal reservations within a secure Guest Portal.

Built with **React 19**, **Vite 8**, **Tailwind CSS v4**, **Redux Toolkit**, and **Supabase Authentication**.

---

## 🌟 Key Highlights & Features

### 1. 🌆 Immersive Editorial Landing Page
- **Hero Showcase**: Full-screen hero section with atmospheric backdrop, welcoming highlights, and direct call-to-actions.
- **Hotel Highlights & Metrics**: Real-time stats showcasing 4.7+ star guest ratings, luxury awards, 24/7 concierge support, and 10k+ satisfied travelers.
- **Featured Collection**: Curated suites displaying real-time pricing, discounts, dimensions ($m^2$), and bed configurations.
- **Curated Experience Section**: Highlights Michelin-starred rooftop dining, infinity spa, and luxury chauffeur transfers.

### 2. 🛏️ Dynamic Room Catalog & Detailed Showcase
- **Asynchronous Data Layer**: Rooms fetched dynamically via Redux Toolkit async thunk (`fetchRooms`) from remote JSON database.
- **Room Detail View (`/roomdetail/:id`)**:
  - High-resolution photography with full room amenity breakdown.
  - Calculation of discounted rates per night.
  - Safe-rendering architecture preventing crashes during page reloads.

### 3. 📅 DateRangePicker Booking Engine
- Integrated **Flowbite DateRangePicker** for interactive Check-in & Check-out date selection with minimum date validation.
- Real-time date syncing between DatePicker and Reservation form via custom callbacks.
- Configurable guest capacity select and special requirements/stay notes.
- **Persistent Booking Storage**: Reservations are automatically persisted in browser `localStorage` (`currentBooking` and `user_reservations` history array) with animated confirmation modals.

### 4. 🛎️ Concierge Service Request Portal (`/services`)
- Interactive **Request Service** interface.
- Room selector dropdown dynamically populated from active hotel rooms.
- Service categories: *Room Service, Housekeeping & Laundry, Spa & Wellness, Concierge & Luggage, Airport Transfer, Maintenance*.
- Detailed request textarea with submission validation and instant feedback.

### 5. 🔐 Supabase Authentication & State Persistence
- **Sign Up & Sign In**: Full authentication with Supabase (`@supabase/supabase-js`) and React Hook Form.
- **Password Visibility Toggle**: Interactive Eye / EyeClosed icon toggle.
- **Auto-Closing Feedback Modals**: Visual feedback on account creation and successful logins.
- **State & Session Persistence**: Integrated with browser `localStorage` and Supabase `onAuthStateChange` to keep guests logged in across page reloads.

### 6. 🛡️ Protected Guest Portal (`/guestarea`)
- Route-level security with custom **`<Privateroute>`** component.
- **Nested Dashboard Layout**:
  - **Sidebar**: Quick navigation across portal features and one-click Sign Out.
  - **Guest Home (`/guestarea/guesthome`)**: Personalized welcome dashboard displaying the guest's name.
  - **Reservations (`/guestarea/guestreserv`)**: Dynamic reservation history cards loaded directly from persistent storage.
  - **Guest Profile (`/guestarea/guestprofile`)**: Account preferences and details.

### 7. 🏛️ Editorial Heritage & About Page (`/about`)
- Architectural storytelling celebrating the hotel's legacy since 2012.
- Interactive Four Pillars of Excellence: *Bespoke Concierge, Haute Gastronomy, Sanctuary of Wellness, Sustainable Grandeur*.
- Metrics grid and executive leadership showcases.

### 8. 🌙 Midnight Luxury Footer
- 4-Column responsive layout featuring branded badge, quick navigation, direct contact with Lucide icons (address, phone, reservations email), and hotel operating hours (check-in, check-out, 24h concierge).

---

## 🛠️ Tech Stack & Libraries

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) | Component-driven UI development |
| **Bundler & Build Tool** | [Vite 8](https://vite.dev/) | Lightning-fast development & build pipeline |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/) & [Flowbite](https://flowbite.com/) | Modern utility-first responsive styling |
| **State Management** | [Redux Toolkit](https://redux-toolkit.js.org/) & [React-Redux](https://react-redux.js.org/) | Global store for rooms catalog & auth state |
| **Authentication & Backend** | [Supabase](https://supabase.com/) | Secure user registration, authentication, & session management |
| **Form Management** | [React Hook Form](https://react-hook-form.com/) | High-performance form state & input validation |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) | Client-side nested routing & Private Routes |
| **Date Picker** | [Flowbite Datepicker](https://flowbite.com/docs/plugins/datepicker/) | Interactive range calendar picker |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, lightweight SVG iconography |

---

## 📁 Directory Structure

```text
Luxurystay/
├── public/
│   ├── favicon.svg             # Application favicon
│   ├── home.jpg                # High-res hero background image
│   ├── home.webp               # Optimized hero asset
│   └── icons.svg
├── src/
│   ├── assets/                 # Static branding assets
│   ├── components/
│   │   ├── guestarea/
│   │   │   ├── GuestHome.jsx        # Personalized guest dashboard
│   │   │   ├── GuestProfile.jsx     # Guest profile view
│   │   │   ├── GuestReservation.jsx # Bookings history loaded from storage
│   │   │   └── Sidebar.jsx          # Dedicated Guest Portal navigation
│   │   ├── Booksection.jsx          # Reservation CTA section
│   │   ├── DatePicker.jsx           # Flowbite DateRangePicker integration
│   │   ├── Exploreservice.jsx       # Luxury highlights showcase
│   │   ├── Footer.jsx               # 4-Column midnight luxury footer
│   │   ├── Hero.jsx                 # Hero content & CTA actions
│   │   ├── Info.jsx                 # Hotel stats & key metrics cards
│   │   ├── Navbar.jsx               # Responsive glassmorphism navbar
│   │   ├── Privateroute.jsx         # Auth-guarded route wrapper
│   │   ├── Roompage.jsx             # Room display helpers
│   │   └── Rooms.jsx                # Featured room cards catalog grid
│   ├── layouts/
│   │   ├── Guestarea.jsx            # Portal nested layout (Sidebar + Outlet)
│   │   └── Mainlayouts.jsx          # Root master layout (Navbar + Outlet + Footer)
│   ├── pages/
│   │   ├── About.jsx                # Heritage story & leadership page
│   │   ├── Home.jsx                 # Main landing page
│   │   ├── Login.jsx                # Sign In view with validation & modal
│   │   ├── Roomdetail.jsx           # Single room details & booking engine
│   │   ├── Rooms.jsx                # All suites catalog page
│   │   ├── Services.jsx             # Concierge service request page
│   │   └── Signup.jsx               # Registration view with validation & modal
│   ├── redux/
│   │   ├── features/
│   │   │   ├── authSlice.js         # Supabase auth thunks, reducers & storage sync
│   │   │   └── roomSlice.js         # Async room fetch thunks & catalog state
│   │   └── store.js                 # Centralized Redux store configuration
│   ├── routes/
│   │   └── routes.jsx               # Comprehensive React Router config
│   ├── App.css
│   ├── App.jsx
│   ├── index.css                    # Global CSS variables & Tailwind v4 imports
│   ├── main.jsx                     # Application entry point with Redux Provider
│   └── supabasecCient.js            # Initialized Supabase client instance
├── hotel-rooms-db.json              # Mock room inventory database
├── package.json
├── vite.config.js                   # Vite configuration
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to set up and run LuxuryStay on your local environment.

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (or yarn / pnpm)
- A **Supabase** project (free tier at [supabase.com](https://supabase.com/))

### 2. Clone Repository
```bash
git clone https://github.com/ayan1906/Luxurystay.git
cd Luxurystay
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env` file in the root directory and add your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Launch Development Server
```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Runs the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and optimizes assets into the `dist/` directory for production. |
| `npm run preview` | Serves the production build locally for verification. |
| `npm run lint` | Runs ESLint to check for code quality and style guidelines. |

---

## 🔐 Route Permissions & Access Overview

| Route | View Component | Access Level | Description |
| :--- | :--- | :--- | :--- |
| `/` | `Home` | Public | Welcome banner, stats, featured rooms, amenities |
| `/about` | `About` | Public | Hotel heritage, pillars, metrics, leadership team |
| `/rooms` | `Rooms` | Public | Complete suites and room inventory catalog |
| `/roomdetail/:id`| `Roomdetail` | Public | Room specs, gallery, DateRangePicker booking form |
| `/services` | `Services` | Public | Request concierge, dining, housekeeping, transport |
| `/login` | `Login` | Public | Guest sign-in with email & password |
| `/signup` | `Signup` | Public | Guest account creation |
| `/guestarea/*` | `Guestarea` | **Protected** | Authenticated guest portal with Sidebar & Bookings |

---

## 👨‍💻 Author

- **AYAN** — *Frontend Developer & Maintainer*
- GitHub: [@ayan1906](https://github.com/ayan1906)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
