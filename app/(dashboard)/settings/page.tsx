import MainLayout from "@/components/layout/MainLayout";

export default function SettingsPage() {
  return (
    <MainLayout>
      <h1 className="text-4xl font-bold text-white">Settings</h1>
      <p className="text-violet-300/60 mt-2">
        System configuration
      </p>
    </MainLayout>
  );
}