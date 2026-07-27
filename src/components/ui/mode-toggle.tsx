import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Sun
        className={`h-4 w-4 transition-transform duration-500 hover:rotate-180 ${
          !isDark ? "text-yellow-400" : "text-white/60"
        }`}
      />

      <Switch
        checked={isDark}
        onCheckedChange={(checked) =>
          setTheme(checked ? "dark" : "light")
        }
      />

      <Moon
        className={`h-4 w-4 transition-transform duration-500 hover:rotate-180 ${
          isDark ? "text-blue-400" : "text-white/60"
        }`}
      />
    </div>
  );
}