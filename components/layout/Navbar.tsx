"use client";

import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-[#2B2640] bg-[#09070F] px-8">

      <div className="relative w-96">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-300"
        />

        <input
          type="text"
          placeholder="Search companies, countries, players..."
          className="w-full rounded-xl border border-[#2B2640] bg-[#181626] py-2 pl-11 pr-4 text-sm text-white placeholder:text-violet-300/50 outline-none transition-all focus:border-violet-500"
        />

      </div>

      <div className="flex items-center gap-6">

        <button className="text-violet-300 transition hover:text-violet-100">
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-bold shadow-lg shadow-violet-700/40">
            N
          </div>

          <div>
            <p className="font-semibold text-white">
              Nyoman
            </p>

            <p className="text-xs text-violet-300/60">
              Administrator
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}