type IMileStoneAchievementListItem = {
    icon: string;
    alt: string;
    label: string;
    requirement: number;
};

const MilestoneAchievementListItem = ({
    icon,
    alt,
    label,
    requirement,
}: IMileStoneAchievementListItem) => {
    return (
        <div className="milestone-achievement-item-container`">
            <img src={icon} alt={alt} className="icon" />
            <div>
                <div className="label">
                    {label}
                    <div className="progress">2/3</div>
                </div>
            </div>
        </div>
    );
};

export default MilestoneAchievementListItem;
