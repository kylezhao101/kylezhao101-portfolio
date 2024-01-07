import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <>
            <nav className='flex justify-between font-mono px-20 fixed top-0 left-0 right-0 py-4 z-10 bg-custom-background-gray'>
                <div>
                    <h5 className='font-neopixel text-xl text-custom-blue'>Kyle.z</h5>
                </div>
                <ul className="flex gap-10 font-space">
                    <li>
                    // 01 Abt me
                    </li>
                    <li>
                    // 02 Expertise
                    </li>
                    <li>
                    // 03 Works
                    </li>
                    <li>
                    // 04 Contact
                    </li>
                </ul>
                <Link
                    to="/resume-temp.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-space rounded-full px-4 border-2 border-black  hover:border-custom-blue hover:text-custom-blue"
                >
                    Resume
                </Link>
            </nav>
            <p className='fixed font-space text-custom-gray bottom-1/4 -right-32 rotate-90'>Portfolio 2024 - Kylezhao101@gmail.com</p>
        </>
    );
};

export default NavBar;
