"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Factory,
  TrendingUp,
  Swords,
  Globe,
  Users,
  Shield,
  Settings,
} from "lucide-react";

const menu = [
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Companies", icon: Factory, href: "/companies" },
  { title: "Market", icon: TrendingUp, href: "/market" },
  { title: "Battles", icon: Swords, href: "/battles" },
  { title: "Countries", icon: Globe, href: "/countries" },
  { title: "Players", icon: Users, href: "/players" },
  { title: "Alliance", icon: Shield, href: "/alliance" },
  { title: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 flex-col border-r border-[#2B2640] bg-[#11101B]">

      <div className="border-b border-[#2B2640] p-6">
        <h1 className="text-3xl font-black tracking-wide text-violet-400">
          WARCORE
        </h1>
        <p className="mt-2 text-sm text-violet-300/60">
          WarEra Companion
        </p>
      </div>

      <nav className="flex-1 p-4">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-700/30"
                  : "text-violet-200/70 hover:bg-[#1A1728] hover:text-violet-300"
              }`}
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-[#2B2640] p-4 text-xs text-violet-300/40">
        WarCore v0.1 Alpha
      </div>

    </aside>
  );
}