import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const mobileNavItems = [
  { label: "Home", path: "/" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "Projects", path: "/projects" },
  { label: "Tenders", path: "/tenders" },
  { label: "Budget", path: "/budget" },
  { label: "Laws", path: "/laws" },
  { label: "Report Corruption", path: "/report" },
  { label: "Local Tracker", path: "/local-tracker" },
  { label: "News", path: "/news" },
  { label: "Account", path: "/account" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-[#1E3A8A] to-[#DC2626] bg-clip-text text-transparent">
          Sachet
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Dashboard
          </Link>
          <Link to="/projects" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Projects
          </Link>
          <Link to="/budget" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Budget
          </Link>
          <Link to="/report" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Report
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {mobileNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

