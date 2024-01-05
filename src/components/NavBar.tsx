import { Link } from 'react-router-dom';

//replace resume with button 

const NavBar: React.FC = () => {
    return (
        <nav className='flex justify-between font-mono px-20 fixed top-0 left-0 right-0 py-4 z-10'>
            <div>
                <h5 className='font-neopixel text-xl text-custom-blue'>Kyle.z</h5>
            </div>
            <ul className="flex gap-10 font-space">
                <li>
                    01 Abt me
                </li>
                <li>
                    02 Expertise
                </li>
                <li>
                    03 Projects
                </li>
                <li>
                    04 Contact
                </li>
            </ul>
            <div className="font-space">
                Resume
            </div>
        </nav>
    );
};

export default NavBar;
