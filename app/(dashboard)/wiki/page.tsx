import MainLayout from "@/components/layout/MainLayout";

export default function WikiPage() {
  return (
    <MainLayout>
      <h1 className="text-4xl font-bold text-white">Wiki</h1>
      <p className="text-violet-300/60 mt-2">
        Knowledge base of WarCore
      </p>
    </MainLayout>
  );
}