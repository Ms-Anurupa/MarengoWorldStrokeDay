import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";
import { eventData } from "../data/event";

export default function ParticipantRegistration() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    category: "",
    video: null,
    consent: false,
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value, type, checked, files } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
            ? files[0]
            : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (Number(form.age) < 18) {
      setError("Participants must be 18 years or above.");
      return;
    }

    if (!form.consent) {
      setError("Please accept the participation disclaimer.");
      return;
    }

    if (!form.video) {
      setError("Please upload your audition video.");
      return;
    }

    if (form.video.size > 10 * 1024 * 1024) {
      setError("Your video must be 10 MB or smaller.");
      return;
    }

    navigate("/thank-you", {
      state: {
        type: "participant",
      },
    });
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-slate-950">
        <div className="mx-auto max-w-4xl px-5 py-6 sm:px-8">
          <Link
            to="/register"
            className="text-sm font-semibold text-white/60 hover:text-white"
          >
            ← Change registration type
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
            Participant Registration
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Step into the spotlight.
          </h1>

          <p className="mt-4 max-w-2xl text-slate-500">
            Complete your registration and submit a short video showcasing
            your talent for audition and shortlisting.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="mb-10 rounded-2xl bg-brand-50 p-5">
            <div className="flex gap-4">
              <div className="text-2xl">ℹ️</div>

              <div>
                <p className="font-bold text-brand-900">
                  Eligibility: 18 years and above
                </p>

                <p className="mt-1 text-sm leading-6 text-brand-800">
                  Registrations and auditions close on{" "}
                  <strong>10 October 2026</strong>.
                </p>
              </div>
            </div>
          </div>

          {error && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Your details
              </h2>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />

                <Field
                  label="Age"
                  name="age"
                  type="number"
                  value={form.age}
                  onChange={handleChange}
                  placeholder="18+"
                  min="18"
                  required
                />

                <Field
                  label="Mobile Number"
                  name="mobile"
                  type="tel"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                />

                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="text-xl font-bold text-slate-900">
                Your performance
              </h2>

              <label className="mt-5 block">
                <span className="text-sm font-bold text-slate-700">
                  Category *
                </span>

                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
                >
                  <option value="">Select your category</option>
                  {eventData.categories.map((category) => (
                    <option key={category.name} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="mt-6 block">
                <span className="text-sm font-bold text-slate-700">
                  Performance Video *
                </span>

                <div className="mt-2 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-7 text-center transition hover:border-brand-400">
                  <div className="text-3xl">🎬</div>

                  <p className="mt-3 font-bold text-slate-900">
                    Upload your audition video
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Maximum file size: 10 MB
                  </p>

                  <input
                    type="file"
                    name="video"
                    accept="video/mp4,video/quicktime,video/webm"
                    onChange={handleChange}
                    className="mx-auto mt-5 block max-w-full text-sm"
                    required
                  />

                  {form.video && (
                    <p className="mt-3 text-sm font-semibold text-brand-700">
                      Selected: {form.video.name}
                    </p>
                  )}
                </div>
              </label>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="text-xl font-bold text-slate-900">
                Consent & disclaimer
              </h2>

              <label className="mt-5 flex cursor-pointer gap-3 rounded-2xl bg-slate-50 p-5">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 shrink-0 accent-brand-600"
                />

                <span className="text-sm leading-6 text-slate-600">
                  {eventData.participantDisclaimer}
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-brand-600 px-6 py-4 font-bold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
            >
              Submit Participant Registration →
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  min,
}) {
  return (
    <label>
      <span className="text-sm font-bold text-slate-700">
        {label} {required && "*"}
      </span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
      />
    </label>
  );
}