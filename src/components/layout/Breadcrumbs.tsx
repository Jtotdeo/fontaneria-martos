import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-2">
          {i > 0 && <ChevronRight className="w-4 h-4 opacity-50" />}
          {item.href ? (
            <Link
              href={item.href}
              className="opacity-70 hover:opacity-100 transition-opacity flex items-center gap-1"
            >
              {i === 0 && item.label === "Inicio" && (
                <Home className="w-4 h-4" />
              )}
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
