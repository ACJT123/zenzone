import React from "react";
import { Link } from "react-router-dom";
import "../../../style/Components/Course/courseListItem.scss";

type ICourseListItem = {
    icon: string;
    label: string;
    route: string;
};

const CourseListItem = ({ icon, label, route }: ICourseListItem) => {
    return (
        // <Link to={route} className="category-item">
        <div className="category-item-container">
            <img src={icon} alt="icon" className="icon" />
            <h1 className="label">{label}</h1>
        </div>
        // </Link>
    );
};

export default CourseListItem;
