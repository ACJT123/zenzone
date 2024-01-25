import UserAvatar from "../../images/Sample/9.png";
import SkillMasteredIcon from "../../images/Common/skills-mastered.png";
import CourseCompletedIcon from "../../images/Common/completed.png";
import HoursDedicatedIcon from "../../images/Common/hours-dedicated.png";

import "../../style/Pages/Profile.scss";

const personalAchievements = [
    {
        icon: CourseCompletedIcon,
        alt: "course-completed-icon",
        key: "course completed",
        label: "Completed",
    },
    {
        icon: HoursDedicatedIcon,
        alt: "hours-dedicated-icon",
        key: "hours dedicated",
        label: "Hours Dedicated to",
    },
    {
        icon: SkillMasteredIcon,
        alt: "skills-mastered-icon",
        key: "skills mastered",
        label: "Skills Mastered",
    },
];

const userAchievements = {
    "course completed": 3,
    "hours dedicated": 10,
    "skills mastered": 10,
};
const Profile = () => {
    return (
        <div id="profileScreen">
            <div className="user-main-profile-container">
                <img
                    src={UserAvatar}
                    alt="user-avatar"
                    className="user-avatar"
                />
                <div className="user-detail-container">
                    <div className="username">Alex Cheng</div>
                    <div className="favorite-zens-categories-tag">
                        Soothing music, guided meditation, and nature sounds
                    </div>
                    <div className="personal-achievements-board outer">
                        <div className="personal-achievements-board inner">
                            {personalAchievements.map((item) => (
                                <div className="achievements-container">
                                    <div className="achievement-icon-outer">
                                        <img
                                            src={item.icon}
                                            alt={item.alt}
                                            className="achievement-icon"
                                        />
                                    </div>
                                    <div className="achievement-label">
                                        {item.label}
                                    </div>
                                    <div className="achievement-value">
                                        {userAchievements[item.key]}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="milestone-achievements-container">
                
            </div>
        </div>
    );
};

export default Profile;
