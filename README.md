# 🦷 Aarogya Dental Clinic

A modern, responsive dental clinic website built with **React.js** and **Tailwind CSS**.

Aarogya Dental Clinic is a frontend-focused project designed to provide a clean and professional online experience for patients. The website includes dental services, clinic information, a gallery, appointment booking interface, testimonials, responsive navigation, and a global light/dark theme.

---

## ✨ Features

* 🏠 Modern and responsive homepage
* 🦷 Dental services showcase
* 🖼️ Clinic gallery with category filters
* 👩‍⚕️ Dentist/doctor information section
* ⭐ Patient testimonials and ratings
* 📅 Appointment booking interface
* 📍 Clinic contact information and location
* 🕐 Office hours and emergency information
* 🌙 Global light/dark mode
* 💾 Theme preference saved using `localStorage`
* 🧭 React Router navigation
* 📱 Responsive design for desktop, tablet, and mobile
* 🎨 Reusable React components
* 🧩 Reusable SVG icon components
* 📌 Sticky navigation bar
* 🦷 Animated dental-themed background elements
* 🔗 Consistent footer across all pages

---

## 📄 Pages

### 🏠 Home

The homepage introduces Aarogya Dental Clinic and contains:

* Hero section
* Clinic introduction
* Statistics
* Dental services
* Dentist/doctor section
* Patient testimonials
* Call-to-action section
* Dental-themed background animation

### 🦷 Services

Displays the clinic's available dental services, including:

* Preventive Care
* Orthodontics
* Other dental treatments
* Service descriptions
* "Book Now" links
* Step-by-step appointment process

### 🖼️ Gallery

A visual showcase of the clinic and treatments with:

* Category filtering
* Treatment images
* Before/after transformation section
* Responsive image grid
* Call-to-action section

### 📞 Contact

Provides an appointment and contact interface with:

* Patient information form
* Appointment date and time
* Service selection
* Additional notes
* Appointment confirmation message
* Clinic contact details
* Office hours
* Emergency information
* Location/map section

---

## 🌙 Light & Dark Mode

The project includes a **global theme system**.

The theme is managed using React Context so that changing the theme from the navbar automatically updates the entire website.

The selected theme is also stored in `localStorage`, meaning the user's preference remains available when they revisit the website.

### Theme architecture

```text
ThemeProvider
      │
      ├── Navbar
      │     └── ThemeToggle
      │
      ├── Home
      ├── Services
      ├── Gallery
      ├── Contact
      │
      └── Footer
```

The project uses Tailwind CSS's class-based dark mode:

```js
darkMode: "class"
```

---

## 🛠️ Technologies Used

| Technology        | Purpose                       |
| ----------------- | ----------------------------- |
| React.js          | Frontend framework            |
| React Router      | Page navigation               |
| Tailwind CSS      | Styling and responsive design |
| JavaScript (ES6+) | Application logic             |
| HTML5             | Page structure                |
| CSS3              | Custom styling and animations |
| Vite              | Development/build tool        |
| LocalStorage      | Saving theme preference       |

---

## 📁 Project Structure

```text
aarogya-dental-clinic-react/
│
├── public/
│   └── images/
│       ├── hero.jpg
│       ├── dr-anand-acharya.jpg
│       ├── patient1.jpg
│       ├── patient2.jpg
│       ├── maps.jpg
│       └── ...
│
├── src/
│   │
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Icons.jsx
│   │   ├── Navbar.jsx
│   │   ├── StarsBackground.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   │
│   ├── data/
│   │   └── siteData.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/aarogya-dental-clinic-react.git
```

### 2. Navigate to the project

```bash
cd aarogya-dental-clinic-react
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The project will then be available at the local development URL provided by Vite, usually:

```text
http://localhost:5173
```

---

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## 🎨 Design

The website follows a clean and modern dental-care visual style.

### Design principles

* Minimal and professional layout
* Dental-focused visual identity
* Emerald green as the primary accent
* Clean typography
* Rounded cards and buttons
* Subtle animations
* Responsive layouts
* Accessible color contrast
* Light and dark themes

---

## 🧩 Reusable Components

The project is structured around reusable components instead of putting everything inside individual pages.

### Navbar

Provides:

* Clinic branding
* Navigation links
* Book Appointment button
* Theme toggle
* Mobile menu button

### Footer

Shared across all pages and contains:

* Clinic branding
* Quick links
* Services
* Contact information
* Social media icons

### ThemeToggle

Controls the global light/dark theme.

### Icons

Contains reusable SVG icons used throughout the website, including:

* Tooth
* Sparkle
* Clock
* Phone
* Mail
* Location
* Instagram
* Facebook
* TikTok

### ThemeContext

Manages the application's global theme state.

---

## 📱 Responsive Design

The website is designed to work across different screen sizes:

* 📱 Mobile
* 📱 Tablet
* 💻 Laptop
* 🖥️ Desktop

Tailwind CSS responsive utilities are used throughout the application.

---

## 🔮 Future Improvements

The current project is primarily a frontend implementation. Possible future improvements include:

* 🔐 Patient authentication
* 🗄️ Backend API
* 📅 Real appointment scheduling
* 📨 Email appointment confirmation
* 🧑‍⚕️ Doctor/admin dashboard
* 🗃️ Database integration
* 💳 Online payment integration
* 📊 Admin appointment management
* 📱 Improved mobile navigation
* 🔍 SEO optimization
* 🚀 Deployment with a custom domain

---

## 📌 Current Project Status

**Status:** 🚧 Frontend Complete

The current version focuses on the UI/UX and frontend experience. Appointment submission is currently handled on the frontend and does not yet connect to a backend or database.

---

## 👩‍💻 Author

**Sandhya Paudel**

BCA Student | Aspiring Java & Full-Stack Developer

### Connect with me

* GitHub: `https://github.com/sandhyapaudel18`
* LinkedIn: `https://www.linkedin.com/in/sandhya-paudel-418b972b3/`

---

## 📄 License

This project is created for learning and portfolio purposes.

You are welcome to explore the code and use it as a reference for learning React, Tailwind CSS, and modern frontend development.

---

⭐ If you found this project useful or interesting, consider giving the repository a star!
