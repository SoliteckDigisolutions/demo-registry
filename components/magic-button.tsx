import { Sparkles } from "lucide-react";

export function MagicButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
      <Sparkles className="h-4 w-4" />
      {children}
    </button>
  );
}