import ThemeToggleButton from "./ui/ThemeToggleButton";

export default function CompanionHeader() {
  return (
    <div className="p-4 border-b bg-red-50 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#292B39]" />
        <div>
          <h1 className="text-xl text-[#292B39] font-medium">Manovriti</h1>
          <p className="text-[#54586A] text-sm">Your friendly companion</p>
        </div>
      </div>

      <ThemeToggleButton />
    </div>
  );
}
