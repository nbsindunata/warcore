import Card from "@/components/ui/Card";

export default function StatCard({
  title,
  value,
  color = "text-violet-400",
}: {
  title: string;
  value: string;
  color?: string;
}) {
  return (
    <Card>

      <p className="text-violet-300/60">
        {title}
      </p>

      <h2 className={`mt-4 text-5xl font-black ${color}`}>
        {value}
      </h2>

    </Card>
  );
}