import LinkLogo from "../comonUse/LinkLogo";
import { FaBars, FaInfoCircle } from "react-icons/fa";
import ListItemWithIcon from "../comonUse/ListItemWithIcon";
import { MdOutlinePets } from "react-icons/md";
import { RiMapPinUserFill } from "react-icons/ri";
import { useState } from "react";

const listItems = [
  {
    icon: <FaInfoCircle className="text-[#4a276b]" />,
    title: "About Us",
    dist: "/about",
  },
  {
    icon: <MdOutlinePets className="text-[#4a276b] text-lg" />,
    title: "Pets",
    dist: "/pets",
  },
  {
    icon: <RiMapPinUserFill className="text-[#4a276b] text-lg" />,
    title: "Me",
    dist: "/me",
  },
];

const NavBarComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="flex flex-col md:gap-1 px-5 pt-0.5 pb-2.5  bg-white shadow-md">
      <div className="flex md:flex-col justify-between md:justify-center items-center">
        <LinkLogo />
        <div className="hidden md:flex items-center space-x-4">
          {listItems.map(({ icon, title, dist }, index) => (
            <ListItemWithIcon
              icon={icon}
              title={title}
              key={index}
              dist={dist}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={toggleNavbar}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation">
          <FaBars className="h-6 w-6 text-[#4a276b]" />
        </button>
      </div>
      <div
        className={`${isExpanded ? "block" : "hidden"} md:hidden flex justify-center gap-10`}
        id="navbarSupportedContent">
        {listItems.map(({ icon, title, dist }, index) => (
          <ListItemWithIcon icon={icon} title={title} key={index} dist={dist} />
        ))}
      </div>
    </nav>
  );
};

export default NavBarComponent;
