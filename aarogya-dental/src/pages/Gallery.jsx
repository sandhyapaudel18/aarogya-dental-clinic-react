
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  galleryFilters,
  galleryPhotos,
  transformations,
} from "../data/siteData";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All Photos");

  const visiblePhotos =
    activeFilter === "All Photos"
      ? galleryPhotos
      : galleryPhotos.filter(
          (photo) => photo.category === activeFilter
        );

  return (
    <div className="min-h-screen bg-white dark:bg-[#07111F]">

      {/* PAGE HEADER */}
      <section className="bg-slate-50 dark:bg-[#0B1B33]">
        <div className="mx-auto max-w-6xl px-5 py-16">

          <p className="text-xs text-slate-400 dark:text-slate-500">
            Home &gt; Gallery
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
            Our clinic & results
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            Step inside our modern clinic and explore the real results we
            create. Every smile transformation tells a story of renewed
            confidence and comfort.
          </p>

          {/* FILTER BUTTONS */}
          <div className="mt-7 flex flex-wrap gap-2.5">
            {galleryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-[#142640] dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

        </div>
      </section>


      {/* GALLERY PHOTOS */}
      <section className="mx-auto max-w-6xl px-5 py-14">

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {visiblePhotos.map((photo, index) => (
            <div
              key={photo.id}
              className={`group overflow-hidden rounded-lg bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-[#0B1B33] ${
                index < 3 ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <img
                src={photo.image}
                alt={photo.label}
                className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
              />
            </div>
          ))}

        </div>

      </section>


      {/* TRANSFORMATIONS */}
      <section className="mx-auto max-w-6xl px-5 py-14">

        <div className="mx-auto max-w-xl text-center">

          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Transformations
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            Real patients, real results
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Explore the visible improvements our patients achieve through
            expert cosmetic and restorative care.
          </p>

        </div>


        {/* TRANSFORMATION CARDS */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {transformations.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-[#0B1B33]"
            >

              {/* BEFORE / AFTER IMAGES */}
              <div className="grid aspect-[4/3] grid-cols-2 gap-px overflow-hidden bg-slate-200 dark:bg-slate-700">

                {/* BEFORE */}
                <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-800">

                  <img
                    src={item.beforeImage}
                    alt={`${item.title} — before`}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />

                  <span className="absolute left-2 top-2 rounded bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white">
                    Before
                  </span>

                </div>


                {/* AFTER */}
                <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-800">

                  <img
                    src={item.afterImage}
                    alt={`${item.title} — after`}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />

                  <span className="absolute left-2 top-2 rounded bg-emerald-600/90 px-2 py-0.5 text-[10px] font-medium text-white">
                    After
                  </span>

                </div>

              </div>


              {/* TRANSFORMATION DETAILS */}
              <div className="p-5">

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>


                {/* TAGS */}
                <div className="mt-3 flex flex-wrap gap-2">

                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-center">

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Ready for your smile transformation?
        </h2>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Book a consultation and discover personalized dental and orthodontic
          care designed for your perfect smile.
        </p>

        <Link
          to="/contact"
          className="mt-7 inline-block rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Book Your Appointment
        </Link>

      </section>

    </div>
  );
}

