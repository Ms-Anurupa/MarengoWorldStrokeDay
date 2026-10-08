export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg font-bold">Marengo Asia Hospitals</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
              Celebrating talent, community and awareness on World Stroke Day
              2026.
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-sm font-semibold text-white">
              Gurgaon’s Got Talent
            </p>

            <p className="mt-2 text-sm text-slate-400">
              27 October 2026 · Gurugram
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500">
          © 2026 Marengo Asia Hospitals. All rights reserved.
        </div>
      </div>
    </footer>
  );
}