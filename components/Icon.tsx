import {
  Atom,
  Factory,
  Zap,
  Wrench,
  Activity,
  Rocket,
  Sun,
  type LucideIcon,
  CircleHelp,
} from "lucide-react";

const registry: Record<string, LucideIcon> = {
  Atom,
  Factory,
  Zap,
  Wrench,
  Activity,
  Rocket,
  Sun,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = registry[name] ?? CircleHelp;
  return <Cmp className={className} aria-hidden />;
}
