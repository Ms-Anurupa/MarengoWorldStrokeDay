import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { eventData } from "../data/event";

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative min-h-[720px] bg-gradient-to-br from-slate-950 via-[#083f55] to-brand-700">
        <Navbar />

        {/* Decorative shapes */}
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-brand-300" />
              World Stroke Day 2026
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Gurgaon’s
              <span className="block text-brand-300">Got Talent.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              Gurgaon, it's your stage. Sing. Dance. Make us laugh. Showcase
              your talent and be part of an unforgettable city-wide
              celebration.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/register"
                className="rounded-full bg-white px-7 py-4 text-center text-sm font-extrabold text-slate-950 shadow-2xl transition hover:-translate-y-1"
              >
                Register Now →
              </Link>

              <a
                href="#event"
                className="rounded-full border border-white/25 bg-white/10 px-7 py-4 text-center text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                Explore Event
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50">
                  Event Date
                </p>
                <p className="mt-1 font-bold text-white">
                  {eventData.eventDate}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-white/50">
                  Location
                </p>
                <p className="mt-1 font-bold text-white">Gurugram</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-white/50">
                  Entry
                </p>
                <p className="mt-1 font-bold text-brand-300">
                  FREE · Invitation Only
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section id="event" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
                The Event
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Your talent deserves a stage.
              </h2>

              <div className="mt-6 h-1 w-16 rounded-full bg-brand-500" />
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-600">
                Marengo Asia Hospitals, Gurugram brings you
                <strong className="text-slate-900">
                  {" "}
                  Gurgaon’s Got Talent
                </strong>
                — a city-focused talent competition celebrating performers
                from across Gurgaon.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Whether you sing, dance or make people laugh, this is your
                opportunity to step forward, showcase your talent and compete
                for the spotlight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
              Choose Your Stage
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900">
              Three talents. One spotlight.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {eventData.categories.map((category, index) => (
              <div
                key={category.name}
                className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
              >
                <span className="absolute right-5 top-5 text-sm font-bold text-slate-200">
                  0{index + 1}
                </span>

                <div className="text-5xl">{category.icon}</div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {category.name}
                </h3>

                <p className="mt-2 text-slate-500">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deadline */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white sm:p-12">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-500/20 blur-3xl" />

            <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-300">
                  Important Date
                </p>

                <h2 className="mt-3 text-4xl font-black">
                  Registrations close
                </h2>

                <p className="mt-3 text-white/60">
                  Auditions and registrations must be completed before the
                  deadline.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-7 backdrop-blur">
                <p className="text-4xl font-black text-brand-300">
                  {eventData.registrationDeadline}
                </p>

                <p className="mt-2 text-sm text-white/60">
                  Registration & Audition Deadline
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-brand-50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
              What Happens Next
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900">
              From registration to the stage
            </h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-5">
            {eventData.journey.map((step, index) => (
              <div key={step} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 font-black text-white shadow-lg shadow-brand-600/20">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 text-sm font-bold text-slate-900">
                  {step}
                </h3>

                {index < eventData.journey.length - 1 && (
                  <div className="absolute left-[calc(50%+30px)] right-[calc(-50%+30px)] top-7 hidden h-px bg-brand-200 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
            Ready?
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-6xl">
            Gurgaon, the stage is yours.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-500">
            Register to participate or let us know you want to attend.
          </p>

          <Link
            to="/register"
            className="mt-8 inline-flex rounded-full bg-brand-600 px-8 py-4 font-bold text-white shadow-xl shadow-brand-600/20 transition hover:-translate-y-1 hover:bg-brand-700"
          >
            Continue to Registration →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}