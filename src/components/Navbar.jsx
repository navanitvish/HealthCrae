import { NavLink } from "react-router-dom";
import { navLinks } from "../utility/data";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-md w-full flex justify-between gap-4 items-center py-6 px-4 md:px-8">
        <NavLink to="/home" className="text-xl font-bold text-gray-800">
          HealthExploral
        </NavLink>

        {/* Desktop navigation links */}
        <ul className="hidden md:flex  space-x-4 list-none">
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <NavLink
                to={navLink.id}
                className="text-gray-800 text-xl font-semibold hover:text-green-500"
              >
                {navLink.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
