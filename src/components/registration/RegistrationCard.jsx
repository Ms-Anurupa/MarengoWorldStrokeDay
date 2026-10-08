import { Link } from "react-router-dom";

export default function RegistrationCard({
  icon,
  title,
  description,
  buttonText,
  to,
}) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-2xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-3xl">
        {icon}
      </div>

      <h3 className="mt-7 text-2xl font-bold tracking-tight text-slate-900">
        {title}
      </h3>

      <p className="mt-3 min-h-14 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <Link
        to={to}
        className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-brand-700"
      >
        {buttonText}
        <span className="ml-2 transition group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
}