import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiHeart,
  FiMenu,
} from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-10">
        <nav
          className="
            flex items-center justify-between
            rounded-2xl
            border border-white/15
            bg-white/10
            px-4 py-3
            backdrop-blur-xl
            shadow-[0_8px_40px_rgba(0,0,0,0.12)]
            sm:px-5
          "
        >
          {/* Brand */}
          <Link
            to="/"
            className="group flex items-center gap-3.5"
            aria-label="Marengo Asia Hospitals - Home"
          >
            {/* Logo */}
            <div
              className="
                relative flex h-11 w-11 shrink-0
                items-center justify-center
                overflow-hidden rounded-xl
                bg-white
                shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                transition-transform duration-300
                group-hover:scale-105
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-white" />

              <FiHeart
                className="
                  relative z-10
                  h-5 w-5
                  text-brand-600
                  transition-transform duration-300
                  group-hover:scale-110
                "
                strokeWidth={2.4}
              />

              {/* Small pulse accent */}
              <span className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-brand-500" />
            </div>

            {/* Hospital name */}
            <div className="leading-none">
              <p className="text-[11px] font-extrabold tracking-[0.08em] text-white sm:text-xs">
                MARENGO ASIA
              </p>

              <p className="mt-1 text-[10px] font-medium tracking-[0.16em] text-white/65">
                HOSPITALS · GURUGRAM
              </p>
            </div>
          </Link>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 sm:flex">
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-medium text-white/75 lg:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              <span>Gurugram's Talent Stage</span>
            </div>

            <Link
              to="/register"
              className="
                group flex items-center gap-2
                rounded-full
                bg-white
                px-5 py-2.5
                text-sm font-bold
                text-brand-700
                shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-brand-50
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]
              "
            >
              Register Now

              <FiArrowRight
                className="
                  h-4 w-4
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>

          {/* Mobile CTA / Menu */}
          <div className="flex items-center gap-2 sm:hidden">
            <Link
              to="/register"
              className="
                flex items-center gap-1.5
                rounded-full
                bg-white
                px-4 py-2.5
                text-xs font-bold
                text-brand-700
                shadow-lg
                transition
                active:scale-95
              "
            >
              Register
              <FiArrowRight className="h-3.5 w-3.5" />
            </Link>

            <button
              type="button"
              aria-label="Open menu"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-white/15
                bg-white/10
                text-white
                backdrop-blur-md
              "
            >
              <FiMenu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}