import { supabase } from "@/lib/supabaseClient";

export default async function DashboardPage() {
  const [companies, countries, players, market] = await Promise.all([
    supabase.from("companies").select("*", { count: "exact", head: true }),
    supabase.from("countries").select("*", { count: "exact", head: true }),
    supabase.from("players").select("*", { count: "exact", head: true }),
    supabase.from("market").select("*", { count: "exact", head: true }),
  ]);

  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="text-violet-300/60 mt-2">
        Overview WarCore system (Live Data)
      </p>

      <div className="grid grid-cols-2 gap-6 mt-10">
        
        <div className="p-6 rounded-xl bg-[#181626] border border-[#2B2640]">
          <p className="text-violet-300/60">Companies</p>
          <h2 className="text-3xl font-bold text-white">
            {companies.count ?? 0}
          </h2>
        </div>

        <div className="p-6 rounded-xl bg-[#181626] border border-[#2B2640]">
          <p className="text-violet-300/60">Countries</p>
          <h2 className="text-3xl font-bold text-white">
            {countries.count ?? 0}
          </h2>
        </div>

        <div className="p-6 rounded-xl bg-[#181626] border border-[#2B2640]">
          <p className="text-violet-300/60">Players</p>
          <h2 className="text-3xl font-bold text-white">
            {players.count ?? 0}
          </h2>
        </div>

        <div className="p-6 rounded-xl bg-[#181626] border border-[#2B2640]">
          <p className="text-violet-300/60">Market Items</p>
          <h2 className="text-3xl font-bold text-white">
            {market.count ?? 0}
          </h2>
        </div>

      </div>
    </div>
  );
}