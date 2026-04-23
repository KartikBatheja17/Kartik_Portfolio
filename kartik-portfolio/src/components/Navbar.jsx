import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", color: "bg-yellow-400" },
    { name: "About", href: "#about", color: "bg-blue-400" },
    { name: "Skills", href: "#skills", color: "bg-orange-400" },
    { name: "Experience", href: "#experience", color: "bg-green-400" },
    { name: "Projects", href: "#projects", color: "bg-purple-400" },
    { name: "Contact", href: "#contact", color: "bg-red-400" },
  ];

  return (
    <>
      <nav className="fixed w-full top-0 z-50 p-6 md:p-8 flex justify-end pointer-events-none">
        <button
          onClick={() => setIsOpen(true)}
          className="text-white hover:text-[#1AFF75] focus:outline-none pointer-events-auto transition-colors z-50"
        >
          <HiMenuAlt4 size={40} />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 bg-black z-50 flex flex-col justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-[#1AFF75] focus:outline-none transition-colors"
            >
              <HiX size={48} />
            </button>

            <div className="flex flex-col px-12 md:px-32 gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="font-display text-5xl md:text-8xl text-white hover:text-[#1AFF75] transition-colors flex items-center gap-6 group"
                >
                  <span className={`w-4 h-4 md:w-6 md:h-6 rounded-full ${link.color} opacity-0 group-hover:opacity-100 transition-opacity`}></span>
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;