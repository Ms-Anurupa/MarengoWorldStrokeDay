import { Link, useLocation } from "react-router-dom";

export default function ThankYou() {
  const location = useLocation();

  const isParticipant = location.state?.type === "participant";

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-5">
      <div className="w-full max-w-2xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-500 text-3xl shadow-xl shadow-brand-500/20">
          ✓
        </div>

        <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-brand-300">
          Registration Received
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
          You're on the list.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/60">
          {isParticipant
            ? "Thank you for registering to participate in Gurgaon’s Got Talent. Our team will review your audition submission as part of the screening process."
            : "Thank you for registering your interest in attending Gurgaon’s Got Talent. Entry remains subject to prior invitation."}
        </p>

        {isParticipant && (
          <div className="mx-auto mt-8 max-w-lg rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
            <p className="text-sm font-bold text-white">Next steps</p>

            <p className="mt-2 text-sm leading-6 text-white/50">
              Digital Registration → Audition/Screening → Shortlisting → Final
              Performance → Awards
            </p>
          </div>
        )}

        <Link
          to="/"
          className="mt-9 inline-flex rounded-full bg-white px-7 py-3.5 font-bold text-slate-950 transition hover:-translate-y-0.5"
        >
          Back to Event
        </Link>
      </div>
    </div>
  );
}