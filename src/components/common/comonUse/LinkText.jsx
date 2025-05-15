import React from "react";
import { Link } from "react-router-dom";

const LinkText = ({ dist, text }) => {
  return <Link to={dist} className="text-sm underline text-blue-700">{text}</Link>;
};

export default LinkText;
