import Card from "@/components/ui/Card";

export default function MarketOverview() {
  return (
    <Card>

      <h2 className="text-xl font-bold text-white">
        Market Overview
      </h2>

      <div className="mt-6 space-y-4">

        <div className="flex justify-between">
          <span>Steel</span>
          <span className="text-emerald-400">
            +2.8%
          </span>
        </div>

        <div className="flex justify-between">
          <span>Oil</span>
          <span className="text-rose-400">
            -1.2%
          </span>
        </div>

        <div className="flex justify-between">
          <span>Food</span>
          <span className="text-violet-400">
            +0.8%
          </span>
        </div>

      </div>

    </Card>
  );
}