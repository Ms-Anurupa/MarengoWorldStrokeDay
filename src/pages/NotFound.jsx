import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-5 text-center">
      <div>
        <p className="text-7xl font-black text-brand-400">404</p>

        <h1 className="mt-4 text-3xl font-black text-white">
          Page not found
        </h1>

        <p className="mt-3 text-white/50">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-bold text-slate-900"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}