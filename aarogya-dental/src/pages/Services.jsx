
import { Link } from "react-router-dom";
import {
  preventiveCare,
  orthodonticsCare,
  howItWorks,
} from "../data/siteData";
import { SparkleIcon, ClockIcon } from "../components/Icons";

function ServiceCard({ title, description, image }) {
  return (
    <div
      className="
        group overflow-hidden rounded-xl
        border border-slate-100
        bg-white
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg

        dark:border-slate-700
        dark:bg-slate-800
      "
    >
      {/* IMAGE */}
      <div className="aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-700">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {description}
        </p>

        <Link
          to="/contact"
          className="mt-4 inline-block text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
        >
          Book Now &rarr;
        </Link>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-white">

      {/* PAGE HEADER */}
      <section className="bg-slate-50 dark:bg-slate-800">
        <div className="mx-auto max-w-6xl px-5 py-16">

          <p className="text-xs text-slate-400 dark:text-slate-500">
            Home &gt; Services
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
            Our dental services
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            We provide a full range of dental and orthodontic services, from
            preventive care to advanced restorative and cosmetic
            treatments&mdash;carefully tailored to your individual needs for a
            healthy, confident smile.
          </p>

        </div>
      </section>


      {/* PREVENTIVE CARE */}
      <section className="mx-auto max-w-6xl px-5 py-16">

        <div className="flex items-center gap-2.5">

          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            <SparkleIcon />
          </span>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Preventive Care
          </h2>

        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {preventiveCare.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}

        </div>

      </section>


      {/* ORTHODONTICS */}
      <section className="mx-auto max-w-6xl px-5 pb-16">

        <div className="flex items-center gap-2.5">

          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-50 text-rose-500 dark:bg-rose-900/30 dark:text-rose-400">
            <ClockIcon />
          </span>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Orthodontics
          </h2>

        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {orthodonticsCare.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="bg-slate-50 dark:bg-slate-800">

        <div className="mx-auto max-w-4xl px-5 py-16 text-center">

          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            How It Works
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            Your path to a healthier smile
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-300">
            We guide you through every step with care, making your dental
            experience easy and worry-free.
          </p>


          {/* STEPS */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {howItWorks.map((item) => (

              <div
                key={item.step}
                className="
                  rounded-xl
                  border border-slate-100
                  bg-white
                  p-6
                  text-left
                  shadow-sm

                  dark:border-slate-700
                  dark:bg-slate-900
                "
              >

                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600 text-sm font-semibold text-white">
                  {item.step}
                </span>

                <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="bg-emerald-700 dark:bg-emerald-800">

        <div className="mx-auto max-w-3xl px-5 py-16 text-center text-white">

          <h2 className="text-3xl font-bold">
            Book Your Appointment
          </h2>

          <p className="mt-3 text-emerald-50">
            Schedule your visit today and experience gentle, expert dental
            care tailored to your comfort and needs.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">

            <Link
              to="/contact"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50"
            >
              Book Your Appointment
            </Link>

            <Link
              to="/contact"
              className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

