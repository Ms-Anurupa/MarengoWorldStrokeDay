import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import RegistrationCard from "../components/registration/RegistrationCard";

export default function Register() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-slate-950">
        <Navbar />

        <div className="mx-auto max-w-5xl px-5 pb-20 pt-36 text-center sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-300">
            Gurgaon’s Got Talent
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
            How would you like to join us?
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/60">
            Choose the option that best describes you. Participants and
            attendees have separate registration journeys.
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <RegistrationCard
            icon="🎤"
            title="I want to participate"
            description="Showcase your talent in Singing, Dancing or Stand-up Comedy and compete for the final stage."
            buttonText="Register as Participant"
            to="/register/participant"
          />

          <RegistrationCard
            icon="🎟️"
            title="I want to attend"
            description="Attend Gurgaon’s Got Talent as an invited guest. Entry is free but prior registration is required."
            buttonText="Register to Attend"
            to="/register/attendee"
          />
        </div>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
          <p className="text-sm font-bold text-amber-900">
            FREE ENTRY · INVITATION ONLY
          </p>

          <p className="mt-1 text-sm text-amber-800">
            Prior invitation/registration is required for entry.
          </p>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="text-sm font-semibold text-brand-700 hover:underline"
          >
            ← Back to event
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}