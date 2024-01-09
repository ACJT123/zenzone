import React from "react";
import { Link } from "react-router-dom";

type ICategoryItem = {
  icon: string;
  label: string;
  route: string;
};

const CategoryItem = ({ icon, label, route }: ICategoryItem) => {
  return (
    <Link to={route} className="category-item">
      <img src={icon} alt="icon" className="icon" />
      <h1 className="label">{label}</h1>
    </Link>
  );
};

export default CategoryItem;
