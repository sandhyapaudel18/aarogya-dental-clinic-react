
import { Link } from "react-router-dom";
import {
  homeServices,
  homeStats,
  teamHighlights,
  testimonials,
  clinicInfo,
} from "../data/siteData";
import {
  iconMap,
  PhoneIcon,
  ArrowRightIcon,
  StarIcon,
} from "../components/Icons";
import StarsBackground from "../components/StarsBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-[#07111F]">

      {/* Green floating dots */}
      <StarsBackground count={25} />

      {/* All website content stays above the background */}
      <div className="relative z-10">

        {/* HERO SECTION */}
        <section>
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:py-24">

            <div>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">
                Your smile deserves expert dental care.
              </h1>

              <p className="mt-5 max-w-md text-slate-600 dark:text-slate-300">
                Advanced dental and orthodontic solutions with a gentle touch.
                From braces and invisible aligners to lingual braces, we make
                every treatment comfortable, precise, and confidence-boosting.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-5">
                <Link
                  to="/contact"
                  className="rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  Schedule Your Visit
                </Link>

                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  <PhoneIcon />
                  {clinicInfo.phone}
                </a>
              </div>

              <div className="mt-8 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}

                <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">
                  4.9/5 from 5,240+ reviews
                </span>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-lg dark:bg-slate-800">
                <img
                  src="/images/hero.jpg"
                  alt="Dentist treating a patient at Aarogya Dental Clinic"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Happy Patients */}
              <div className="absolute -top-4 right-4 rounded-xl bg-white px-4 py-2.5 shadow-md dark:bg-[#0B1B33]">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  51K+
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Happy Patients
                </p>
              </div>

              {/* Experience */}
              <div className="absolute -bottom-4 left-4 rounded-xl bg-white px-4 py-2.5 shadow-md dark:bg-[#0B1B33]">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  14+ Years
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  of Excellence
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-b border-slate-100 bg-slate-100 dark:border-slate-800 dark:bg-[#0B1B33]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 text-center sm:grid-cols-4">
            {homeStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 sm:text-3xl">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto max-w-xl text-center">

            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              What We Offer
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
              Complete dental & orthodontic care
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              From routine checkups to smile transformations, we deliver
              personalized treatment plans tailored to your unique needs.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service) => {
              const Icon = iconMap[service.icon];

              return (
                <div
                  key={service.title}
                  className="rounded-xl border border-slate-100 bg-white/90 p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-[#0B1B33]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <Icon />
                  </span>

                  <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              View All Services
              <ArrowRightIcon />
            </Link>
          </div>
        </section>

        {/* OUR EXPERT */}
        <section className="bg-slate-50/80 dark:bg-[#0B1B33]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">

            <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-lg">
              <img
                src="/images/dr-anand-acharya.jpg"
                alt="Dr. Anand Acharya, Lead Dentist & Founder"
                className="aspect-[4/5] w-full object-cover opacity-90"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
                <p className="text-sm font-semibold">
                  Dr. Anand Acharya
                </p>

                <p className="text-xs text-white/70">
                  Lead Dentist & Founder
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                Our Expert
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                Meet the team behind your confident smile
              </h2>

              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Our dedicated dental team is passionate about patient care and
                committed to creating healthy, confident smiles using modern
                technology and advanced techniques.
              </p>

              <ul className="mt-6 space-y-4">
                {teamHighlights.map((item) => (
                  <li key={item.title} className="flex gap-3">

                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400" />

                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {item.title}
                      </p>

                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                to="/gallery"
                className="mt-7 inline-block rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                See All Reviews
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 md:grid-cols-2">

            <div>
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                Patient Stories
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                What our patients say
              </h2>

              <p className="mt-3 max-w-sm text-slate-600 dark:text-slate-300">
                Real experiences from patients who trusted us with their
                smiles.
              </p>

              <Link
                to="/gallery"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400"
              >
                Learn More
                <ArrowRightIcon />
              </Link>
            </div>

            <div className="space-y-5">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="flex gap-4 rounded-xl border border-slate-100 bg-white/90 p-5 shadow-sm dark:border-slate-700 dark:bg-[#0B1B33]"
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-14 w-14 shrink-0 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                      {t.name}
                    </p>

                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-emerald-700 dark:bg-emerald-800">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center text-white">

            <h2 className="text-3xl font-bold">
              Ready to smile with confidence again?
            </h2>

            <p className="mt-3 text-emerald-50">
              Take the first step toward a confident smile with expert
              orthodontic care focused on your comfort and long-lasting
              results.
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
    </div>
  );
}

