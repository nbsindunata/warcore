type Props = {
  title: string;
  value: string;
  color?: string;
};

export default function StatCard({
  title,
  value,
  color = "text-violet-400",
}: Props) {
  return (
    <div className="rounded-2xl border border-[#2B2640] bg-[#181626] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-900/30">

      <p className="text-sm text-violet-300/70">
        {title}
      </p>

      <h2 className={`mt-4 text-5xl font-black ${color}`}>
        {value}
      </h2>

    </div>
  );
}