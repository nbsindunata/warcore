"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-[#120B22] border-r border-violet-900 min-h-screen">
      <div className="p-8">
        <h1 className="text-5xl font-black text-violet-400">
          WARCORE
        </h1>

        <p className="text-violet-300/60 mt-2">
          WarEra Companion
        </p>
      </div>

      <nav className="px-4 space-y-2">

        {navigation.map((item) => {

          const Icon = item.icon;

          const active = pathname === item.href;

          return (

            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-5 py-4 transition-all ${
                active
                  ? "bg-violet-600 text-white"
                  : "text-violet-200 hover:bg-violet-900/40"
              }`}
            >
              <Icon size={20} />

              {item.title}

            </Link>

          );
        })}

      </nav>
    </aside>
  );
}