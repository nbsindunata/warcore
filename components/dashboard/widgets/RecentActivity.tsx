import Card from "@/components/ui/Card";

export default function RecentActivity() {
  return (
    <Card>
      <h2 className="text-xl font-bold text-white">
        Recent Activity
      </h2>

      <div className="mt-6 space-y-4">

        <div className="rounded-xl bg-violet-950/40 p-4">
          Steel Factory upgraded
        </div>

        <div className="rounded-xl bg-violet-950/40 p-4">
          China declared new alliance
        </div>

        <div className="rounded-xl bg-violet-950/40 p-4">
          Market price changed
        </div>

      </div>
    </Card>
  );
}