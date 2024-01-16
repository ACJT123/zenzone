import React from "react";
import { Progress } from "antd";
import { Link } from "react-router-dom";
import "../../../style/Components/Learning/learningListItem.scss";

import BookmarkActive from "../../../images/Common/bookmark-active.png";
import BookmarkInactive from "../../../images/Common/bookmark-inactive.png";

type ILearningListItem = {
    thumbnail: string;
    courseTitle: string;
    tutorName: string;
    completion: number;
    isBookmarked: boolean;
    route: string;
};

const LearningListItem = ({
    thumbnail,
    courseTitle,
    tutorName,
    completion,
    isBookmarked,
    route,
}: ILearningListItem) => {
    return (
        // <Link to={route} className="category-item">
        <div className="learning-item-container">
            <img src={thumbnail} alt="thumbnail" className="thumbnail" />
            <div className="content-container">
                <div className="sec-1">
                    <h1 className="course-title">{courseTitle}</h1>
                    <div
                        className={`bookmark-container ${
                            isBookmarked ? "active" : "inactive"
                        }`}
                    >
                        <img
                            src={
                                isBookmarked ? BookmarkActive : BookmarkInactive
                            }
                            alt="bookmark"
                            className="bookmark"
                        />
                    </div>
                </div>

                <h2 className="tutor-name">{tutorName}</h2>
                <Progress
                    percent={completion}
                    showInfo={false}
                    strokeColor="#DEDEDE"
                    className="progress-bar"
                />
                <h2 className="completion">
                    {completion > 0 ? `${completion}% complete` : "Explore Now"}
                </h2>
            </div>
        </div>
        // </Link>
    );
};

export default LearningListItem;
