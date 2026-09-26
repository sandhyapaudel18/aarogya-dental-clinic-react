
import { useState } from "react";
import { clinicInfo, serviceOptions } from "../data/siteData";
import { PinIcon, PhoneIcon, MailIcon } from "../components/Icons";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  service: "",
  notes: "",
  agree: false,
};

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
        {label} {required && <span className="text-rose-500">*</span>}
      </span>

      <div className="mt-1.5">{children}</div>
    </label>
  );
}

const inputClasses =
  "w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:bg-[#0B1B33] dark:text-white dark:placeholder:text-slate-500";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => {
    const value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value;

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Appointment request:", form);

    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#07111F]">

      {/* PAGE HEADER */}
      <section className="bg-slate-50 dark:bg-[#0B1B33]">
        <div className="mx-auto max-w-6xl px-5 py-16">

          <p className="text-xs text-slate-400 dark:text-slate-500">
            Home &gt; Contact & Booking
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
            Get in{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              touch
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">
            From booking appointments to answering your questions, our team is
            here to support you with care and convenience.
          </p>

        </div>
      </section>


      {/* CONTACT CONTENT */}
      <section className="mx-auto max-w-6xl px-5 py-14">

        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">

          {/* FORM */}
          <div>

            <span className="inline-block rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">
              Book Appointment
            </span>


            {/* SUCCESS MESSAGE */}
            {submitted && (
              <div className="mt-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                Thanks! Your appointment request has been received
                &mdash; we&rsquo;ll confirm by phone or email shortly.
              </div>
            )}


            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >

              {/* FIRST + LAST NAME */}
              <div className="grid gap-5 sm:grid-cols-2">

                <Field label="First Name" required>
                  <input
                    type="text"
                    required
                    placeholder="Enter your first name"
                    value={form.firstName}
                    onChange={update("firstName")}
                    className={inputClasses}
                  />
                </Field>

                <Field label="Last Name" required>
                  <input
                    type="text"
                    required
                    placeholder="Enter your last name"
                    value={form.lastName}
                    onChange={update("lastName")}
                    className={inputClasses}
                  />
                </Field>

              </div>


              {/* EMAIL + PHONE */}
              <div className="grid gap-5 sm:grid-cols-2">

                <Field label="Email Address" required>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={form.email}
                    onChange={update("email")}
                    className={inputClasses}
                  />
                </Field>

                <Field label="Phone Number" required>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={update("phone")}
                    className={inputClasses}
                  />
                </Field>

              </div>


              {/* DATE + TIME */}
              <div className="grid gap-5 sm:grid-cols-2">

                <Field label="Preferred Date" required>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={update("date")}
                    className={inputClasses}
                  />
                </Field>

                <Field label="Preferred Time" required>
                  <input
                    type="time"
                    required
                    value={form.time}
                    onChange={update("time")}
                    className={inputClasses}
                  />
                </Field>

              </div>


              {/* SERVICE */}
              <Field label="Service Needed">
                <select
                  value={form.service}
                  onChange={update("service")}
                  className={inputClasses}
                >
                  <option value="">Select a service</option>

                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}

                </select>
              </Field>


              {/* NOTES */}
              <Field label="Additional Notes">

                <textarea
                  rows={4}
                  placeholder="Tell us about your concerns, symptoms, or any questions you have..."
                  value={form.notes}
                  onChange={update("notes")}
                  className={inputClasses}
                />

              </Field>


              {/* PRIVACY CHECKBOX */}
              <label className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">

                <input
                  type="checkbox"
                  required
                  checked={form.agree}
                  onChange={update("agree")}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 dark:border-slate-600"
                />

                <span>
                  I agree to the{" "}

                  <a
                    href="#"
                    className="text-emerald-600 underline dark:text-emerald-400"
                  >
                    privacy policy
                  </a>{" "}

                  and consent to being contacted about my appointment.
                </span>

              </label>


              {/* SUBMIT */}
              <button
                type="submit"
                className="rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Request Appointment &rarr;
              </button>

            </form>

          </div>


          {/* SIDEBAR */}
          <div className="space-y-6">

            {/* CONTACT INFORMATION */}
            <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#0B1B33]">

              <h3 className="font-semibold text-slate-900 dark:text-white">
                Contact Information
              </h3>

              <ul className="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-300">

                {/* LOCATION */}
                <li className="flex gap-3">

                  <PinIcon className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />

                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">
                      Our Location
                    </p>

                    <p>{clinicInfo.address}</p>
                  </div>

                </li>


                {/* PHONE */}
                <li className="flex gap-3">

                  <PhoneIcon className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />

                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">
                      Phone
                    </p>

                    <p>{clinicInfo.phone}</p>
                  </div>

                </li>


                {/* EMAIL */}
                <li className="flex gap-3">

                  <MailIcon className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />

                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">
                      Email
                    </p>

                    <p>{clinicInfo.email}</p>
                  </div>

                </li>

              </ul>

            </div>


            {/* OFFICE HOURS */}
            <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#0B1B33]">

              <h3 className="font-semibold text-slate-900 dark:text-white">
                Office Hours
              </h3>

              <ul className="mt-4 space-y-2.5 text-sm">

                {clinicInfo.hours.map((slot) => (
                  <li
                    key={slot.days}
                    className="flex justify-between text-slate-600 dark:text-slate-300"
                  >
                    <span>{slot.days}</span>

                    <span className="font-medium text-slate-900 dark:text-white">
                      {slot.time}
                    </span>
                  </li>
                ))}

              </ul>

              <p className="mt-4 flex items-start gap-2 text-xs text-rose-500 dark:text-rose-400">

                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />

                Emergency? Call us any time for urgent dental needs.

              </p>

            </div>


            {/* MAP */}
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-100 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">

              <img
                src="/images/maps.jpg"
                alt="Map showing Aarogya Dental Clinic location on Rangeli Road, Biratnagar"
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

