
import { Link, NavLink } from "react-router-dom";
import { ToothIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <ToothIcon width={23} height={23} />
          </span>

          <div>
            <p className="text-base font-bold leading-tight text-slate-900 dark:text-white">
              Aarogya
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Dental Clinic
            </p>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* BOOK APPOINTMENT */}
          <Link
            to="/contact"
            className="hidden rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 sm:inline-block"
          >
            Book Appointment
          </Link>

          {/* THEME TOGGLE - AFTER BOOK APPOINTMENT */}
          <ThemeToggle />

          {/* MOBILE MENU */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 dark:border-slate-600 dark:text-slate-200 md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>

        </div>
      </div>
    </header>
  );
}

