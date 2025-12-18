import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import ModeToggle from "./mode-toggle";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navs = [
    { label: "Home", href: "/home" },
    { label: "Predictions", href: "/predictions" },
    { label: "VIP", href: "/vip" },
    { label: "Bots", href: "/bots" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-line">
        <nav className="main flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2">
            <img src="/vite.svg" alt="Scorely" className="w-8 h-8" />
            <span className="font-semibold text-lg text-main">
              Scorely
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navs.map((nav) => (
              <li key={nav.href}>
                <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                    `text-sm font-medium transition ${
                      isActive
                        ? "text-primary"
                        : "text-main/70 hover:text-main"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ModeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden h-10 w-10 rounded-full border border-line bg-secondary flex items-center justify-center"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.25 }}
              className="pt-[90px] main flex flex-col h-full"
            >
              {/* Links */}
              <ul className="flex flex-col divide-y divide-line">
                {navs.map((nav, index) => (
                  <motion.li
                    key={nav.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <NavLink
                      to={nav.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-5 text-lg font-medium text-main hover:text-primary"
                    >
                      {nav.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              {/* Auth */}
              <div className="mt-auto space-y-4 pb-8">
                <Link
                  to="/auth/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full h-12 rounded-full border border-line flex items-center justify-center text-main"
                >
                  Login
                </Link>

                <Link
                  to="/auth/register"
                  onClick={() => setIsOpen(false)}
                  className="w-full h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}