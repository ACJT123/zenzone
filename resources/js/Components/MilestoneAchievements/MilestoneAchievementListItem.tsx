import { Progress } from "antd";
import "../../../style/Components/MilestoneAchievements/milestoneAchievementsListItem.scss";

type IMileStoneAchievementListItem = {
    icon: string;
    alt: string;
    label: string;
    requirement: string;
};

const MilestoneAchievementListItem = ({
    icon,
    alt,
    label,
    requirement,
}: IMileStoneAchievementListItem) => {
    return (
        <div id="milestone-achievement-item-container">
            <div className="icon-outer">
                <img src={icon} alt={alt} className="icon" />
            </div>

            <div className="w-[100%]">
                <div className="flex justify-between">
                    <div className="label">
                        {label}
                    </div>
                    <div className="progress">2/3</div>
                </div>
                <Progress showInfo={false} />
                <div className="requirement-container">{requirement}</div>
            </div>
        </div>
    );
};

export default MilestoneAchievementListItem;
