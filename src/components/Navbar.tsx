import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { NAV_LINKS } from "@/data/content"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the mobile sheet on route change.
  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={cn(
          "glass-nav border-b border-transparent transition-all duration-500",
          scrolled ? "border-border/60 shadow-[0_16px_40px_-24px_rgba(11,19,33,0.25)]" : "",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          {/* Logo — image alone, never duplicated as text */}
          <Link to="/" className="flex shrink-0 items-center" aria-label="Emerging Leaders Asia — home">
            <img src="/ELA-Logo.png" alt="Emerging Leaders Asia" className="h-10 w-auto sm:h-11" />
          </Link>

          {/* Desktop text links — concept: flat labels, flame active + underline */}
          <ul className="hidden items-center gap-7 lg:flex xl:gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "relative inline-flex min-h-11 items-center text-[15px] font-medium transition-colors duration-300",
                      isActive
                        ? "text-flame after:absolute after:-bottom-0.5 after:left-0 after:h-[2.5px] after:w-full after:rounded-full after:bg-flame"
                        : "text-navy/75 hover:text-navy",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              to="/join"
              className="hidden min-h-11 items-center gap-1.5 rounded-full bg-flame px-6 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(240,77,26,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 sm:inline-flex"
            >
              Join the Network
              <ArrowUpRight className="size-4" />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex size-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-navy/5 lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="glass-nav mx-3 mt-2 rounded-3xl border border-white/60 p-3 shadow-lg lg:hidden"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "flex min-h-12 items-center rounded-2xl px-4 text-base font-medium",
                        isActive ? "bg-flame/10 text-flame" : "text-navy/80 hover:bg-navy/5",
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  to="/join"
                  className="flex min-h-12 items-center justify-center gap-1.5 rounded-2xl bg-flame px-4 text-base font-semibold text-white"
                >
                  Join the Network
                  <ArrowUpRight className="size-4" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
