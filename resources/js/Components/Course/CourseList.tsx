
import "../../../style/Components/Category/categoryList.scss";
import CourseListItem from "./CourseListItem";

type ICourseList = {
    courseList: any[];
};

const CategoryList = ({courseList}: ICourseList) => {
    return (
        <div className="course-list-container">
            {courseList.map((course) => (
                <CourseListItem
                    icon={category.icon}
                    label={category.label}
                    route={category.route}
                />
            ))}
        </div>
    );
};

export default CategoryList;