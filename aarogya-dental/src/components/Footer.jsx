
import { Link } from "react-router-dom";
import { clinicInfo, footerLinks } from "../data/siteData";
import {
  ToothIcon,
  PinIcon,
  PhoneIcon,
  MailIcon,
  InstagramIcon,
  TikTokIcon,
  FacebookIcon,
} from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-[#0B1B33] text-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">

          {/* CLINIC INFO */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-emerald-400 text-emerald-400">
                <ToothIcon />
              </span>

              <span className="text-sm font-semibold tracking-wide">
                AAROGYA DENTAL CLINIC
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm text-white/60">
              {clinicInfo.tagline}
            </p>

            {/* SOCIAL MEDIA */}
            <div className="mt-5 flex gap-3">

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-emerald-400 hover:text-emerald-400"
              >
                <InstagramIcon />
              </a>

              {/* TikTok */}
              <a
                href="#"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-emerald-400 hover:text-emerald-400"
              >
                <TikTokIcon />
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-emerald-400 hover:text-emerald-400"
              >
                <FacebookIcon />
              </a>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold text-white">
              Quick Links
            </h4>

            <ul className="mt-4 space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-semibold text-white">
              Services
            </h4>

            <ul className="mt-4 space-y-2.5">
              {footerLinks.services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-white/60"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold text-white">
              Contact
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-white/60">

              <li className="flex gap-2.5">
                <PinIcon className="mt-0.5 shrink-0 text-emerald-400" />
                <span>{clinicInfo.address}</span>
              </li>

              <li className="flex gap-2.5">
                <PhoneIcon className="mt-0.5 shrink-0 text-emerald-400" />
                <span>{clinicInfo.phone}</span>
              </li>

              <li className="flex gap-2.5">
                <MailIcon className="mt-0.5 shrink-0 text-emerald-400" />
                <span>{clinicInfo.email}</span>
              </li>

            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Aarogya Dental Clinic. All rights reserved.
          </p>

          <div className="flex gap-5">
            <span className="cursor-pointer hover:text-white/80">
              Privacy Policy
            </span>

            <span className="cursor-pointer hover:text-white/80">
              Terms of Service
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
