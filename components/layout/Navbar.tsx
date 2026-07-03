"use client";

import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 border-b border-violet-900 bg-[#120B22] px-8 flex items-center justify-between">

      <div className="relative">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-300/50"
        />

        <input
          type="text"
          placeholder="Search companies, countries, players..."
          className="w-[420px] rounded-xl border border-violet-800 bg-[#1A1230] py-3 pl-12 pr-4 text-white outline-none focus:border-violet-500"
        />

      </div>

      <div className="flex items-center gap-6">

        <Bell
          className="text-violet-300 cursor-pointer hover:text-violet-400"
          size={22}
        />

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 font-bold">
            N
          </div>

          <div>

            <div className="font-semibold">
              Nyoman
            </div>

            <div className="text-sm text-violet-300/60">
              Administrator
            </div>

          </div>

        </div>

      </div>

    </header>
  );
}