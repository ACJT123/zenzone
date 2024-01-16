import React from "react";
import { Link } from "react-router-dom";
import "../../../style/Components/Course/courseListItem.scss";

import BookmarkActive from "../../../images/Common/bookmark-active.png";
import BookmarkInactive from "../../../images/Common/bookmark-inactive.png";
import DurationIcon from "../../../images/Common/duration.png";
import RatingIcon from "../../../images/Common/rating.png";

type ICourseListItem = {
    thumbnail: string;
    courseTitle: string;
    tutorName: string;
    tutorProfilePicture: string;
    isBookmarked: boolean;
    duration: string;
    rating: number;
    route: string;
};

const CourseListItem = ({
    thumbnail,
    courseTitle,
    tutorName,
    tutorProfilePicture,
    isBookmarked,
    duration,
    rating,
    route,
}: ICourseListItem) => {
    return (
        // <Link to={route} className="Course-item">
        <div className="course-item-container">
            <div
                className={`bookmark-container ${
                    isBookmarked ? "active" : "inactive"
                }`}
            >
                <img
                    src={isBookmarked ? BookmarkActive : BookmarkInactive}
                    alt="bookmark"
                    className="bookmark"
                />
            </div>
            <img src={thumbnail} alt="thumbnail" className="thumbnail" />
            <div className="content">
                <div className="top-sec">
                    <div className="tutor-sec">
                        <img
                            src={tutorProfilePicture}
                            className="tutor-profile-picture"
                        />
                        <h1 className="tutor-name">{tutorName}</h1>
                    </div>
                    <h1 className="course-title">{courseTitle}</h1>
                </div>

                <div className="bottom-sec">
                    <div className="duration-container">
                        <img src={DurationIcon} alt="" className="icon" />
                        <h2 className="duration">{duration}</h2>
                    </div>
                    <div className="rating-container">
                        <img src={RatingIcon} alt="" className="icon" />
                        <h2 className="rating">{rating}/5</h2>
                    </div>
                    <button className="join-btn">Join</button>
                </div>
            </div>
        </div>
        // </Link>
    );
};

export default CourseListItem;
