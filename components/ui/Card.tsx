export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-violet-900 bg-[#171126] p-6">
      {children}
    </div>
  );
}