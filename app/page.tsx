import MainLayout from "@/components/layout/MainLayout";
import StatCard from "@/components/dashboard/StatCard";

export default function Home() {
  return (
    <MainLayout>

      <h1 className="text-5xl font-black text-white">
        Dashboard
      </h1>

      <p className="mt-3 text-violet-300/70">
        Welcome back to WarCore.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Companies"
          value="158"
        />

        <StatCard
          title="Countries"
          value="42"
          color="text-emerald-400"
        />

        <StatCard
          title="Players"
          value="8,214"
          color="text-yellow-400"
        />

        <StatCard
          title="Battles"
          value="13"
          color="text-rose-400"
        />

      </div>

    </MainLayout>
  );
}