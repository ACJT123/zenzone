
import "../../../style/Components/Course/courseList.scss";
import CourseListItem from "./CourseListItem";


type ICourseList = {
    courseList: any[];
};

const CourseList = ({courseList}: ICourseList) => {
    return (
        <div className="course-list-container">
            {courseList.map((course) => (
                <CourseListItem
                    thumbnail={course.thumbnail}
                    courseTitle={course.courseName}
                    tutorName={course.tutorName}
                    tutorProfilePicture={course.tutorProfilePicture}
                    isBookmarked={course.isBookmarked}
                    duration={course.duration}
                    rating={course.rating}
                    route={course.route}
                />
            ))}
        </div>
    );
};

export default CourseList;