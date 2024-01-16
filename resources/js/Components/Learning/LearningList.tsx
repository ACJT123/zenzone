import LearningItem from "./LearningListItem";
import "../../../style/Components/Learning/learningList.scss";

type ILearningList = {
    learningList: any[];
};

const LearningList = ({learningList}: ILearningList) => {
    return (
        <div className="learning-list-container">
            {learningList.map((learning) => (
                <LearningItem
                    thumbnail={learning.thumbnail}
                    courseTitle={learning.courseTitle}
                    tutorName={learning.tutorName}
                    completion={learning.completion}
                    route={learning.route}
                    isBookmarked={learning.isBookmarked}
                />
            ))}
        </div>
    );
};

export default LearningList;