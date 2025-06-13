import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-4 flex justify-center gap-1.5 items-center text-[#4a276b]">
      © 2025 Copyright:
      <Link to={"https://askary-portfolio.vercel.app/"}>
        Ahmed Khaled Al-Askary
      </Link>
    </div>
  );
};

export default Footer;
