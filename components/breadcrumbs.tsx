import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 overflow-x-auto whitespace-nowrap py-2 scrollbar-hide">
      <ol className="flex items-center space-x-1 text-sm">
        <li className="flex-shrink-0">
          <Link href="/" className="text-primary hover:text-primary-foreground transition-colors">
            Inicio
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center flex-shrink-0">
            <ChevronRight className="w-3 h-3 text-muted-foreground mx-1" />
            {index === items.length - 1 ? (
              <span className="text-muted-foreground truncate max-w-[150px] sm:max-w-none" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="text-primary hover:text-primary-foreground transition-colors truncate">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

