import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

import React, { useState } from 'react';

const NavBar: React.FC = () => {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const links = ["abt me", "expertise", "works", "contact"];

    return (
        <>
            <nav className='flex justify-between items-center font-mono px-4 sm:px-4 fixed top-0 left-0 right-0 py-3 z-10 bg-custom-background-gray'>
                <div>
                    <RouterLink to="/" className='font-neopixel text-xl hover:text-custom-blue duration-300 transition-colors ease-in-out'>
                        Kyle.z
                    </RouterLink>
                </div>

                <div className="text-sm font-space hidden md:flex">
                    {links.map((target, index) => (
                        <ScrollLink
                            key={index}
                            to={target}
                            smooth={true}
                            duration={500}
                            className='hover:cursor-pointer px-3 hover:text-custom-blue'
                            onMouseEnter={() => setHoveredLink(target)}
                            onMouseLeave={() => setHoveredLink(null)}
                            style={{
                                opacity: hoveredLink === target || hoveredLink === null ? 1 : 0.3,
                                transition: 'opacity 0.3s ease-in-out',
                            }}
                        >
                            / 0{index + 1} {target.charAt(0).toUpperCase() + target.slice(1)} {/* since the section ids are all lowercased */}
                        </ScrollLink>
                    ))}
                </div>

                <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="hover:cursor-pointer font-space rounded-full px-5 py-1 text-sm text-custom-background-gray bg-black  hover:bg-custom-blue duration-300 ease-in-out"
                >
                    Contact
                </ScrollLink>
            </nav>

            <p className='invisible lg:visible fixed font-space text-custom-gray bottom-1/4 -right-40 rotate-90'>
                Portfolio 2024  - <a className="hover:text-custom-blue" href="mailto:Kylezhao101@gmail.com">Kylezhao101@gmail.com</a>
            </p>
        </>
    );
};

export default NavBar;
