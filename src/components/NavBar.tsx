import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const NavBar: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();

  const links = ["abt-me", "expertise", "works", "contact"];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between bg-custom-background-gray px-4 py-3 font-mono sm:px-4">
      <div>
        <RouterLink
          to="/"
          className="font-neopixel text-xl transition-colors duration-300 ease-in-out hover:text-custom-blue"
          onClick={scrollToTop}
        >
          Kyle.z
        </RouterLink>
      </div>

      <div className="hidden font-space text-sm md:flex">
        {links.map((target, index) => {
          if (target === "contact") {
            return (
              <ScrollLink
                key={index}
                to={target}
                smooth={true}
                duration={500}
                className="px-3 hover:cursor-pointer "
                onMouseEnter={() => setHoveredLink(target)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  opacity:
                    hoveredLink === target || hoveredLink === null ? 1 : 0.3,
                  transition: "opacity 0.3s ease-in-out",
                }}
              >
                /  0{index + 1}{" "}
                {target.charAt(0).toUpperCase() + target.slice(1)}
              </ScrollLink>
            );
          } else {
            return (
              <RouterLink
                key={index}
                to={`/#${target}`}
                className="px-3 hover:cursor-pointer "
                onMouseEnter={() => setHoveredLink(target)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  opacity:
                    hoveredLink === target || hoveredLink === null ? 1 : 0.3,
                  transition: "opacity 0.3s ease-in-out",
                }}
              >
                /  0{index + 1}{" "}
                {target.charAt(0).toUpperCase() + target.slice(1)}
              </RouterLink>
            );
          }
        })}
      </div>
      <a
        href="/Kyle-Zhao-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-black px-5 py-1 font-space text-sm text-custom-background-gray duration-300  ease-in-out hover:cursor-pointer hover:bg-custom-blue"
      >
        Resume
      </a>
    </nav>
  );
};

export default NavBar;
