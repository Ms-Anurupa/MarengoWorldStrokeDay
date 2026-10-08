import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";

export default function AttendeeRegistration() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/thank-you", {
      state: {
        type: "attendee",
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

      <main className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-100 text-3xl">
            🎟️
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
            Attendee Registration
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Join us for the celebration.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Register your interest in attending Gurgaon’s Got Talent on 27
            October 2026.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-bold text-amber-900">
              FREE ENTRY · INVITATION ONLY
            </p>

            <p className="mt-1 text-sm leading-6 text-amber-800">
              Entry is free but strictly by invitation only. Prior
              invitation/registration is required for entry.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <Field
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />

            <Field
              label="Mobile Number"
              name="mobile"
              type="tel"
              value={form.mobile}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
            />

            <Field
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />

            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-brand-600 px-6 py-4 font-bold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
            >
              Register to Attend →
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
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-slate-700">{label} *</span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
      />
    </label>
  );
}