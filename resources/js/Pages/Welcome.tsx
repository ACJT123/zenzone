import GuidedMediationIcon from "../../images/CategoryItem/guided-mediation.png";
import CustomizationIcon from "../../images/CategoryItem/customization.png";
import SoothingMusic from "../../images/CategoryItem/soothing-music.png";
import NaturalSounds from "../../images/CategoryItem/natural-sounds.png";
import Breathing from "../../images/CategoryItem/breathing.png";
import Mindfulness from "../../images/CategoryItem/mindfulness.png";
import Virtualization from "../../images/CategoryItem/virtualization.png";
import CategoryItem from "@/Components/Category/CategoryItem";
import CategoryList from "@/Components/Category/CategoryList";
import LearningList from "@/Components/Learning/LearningList";

import SampleImage1 from "../../images/Sample/1.png";
import SampleImage2 from "../../images/Sample/2.png";
import SampleImage3 from "../../images/Sample/3.png";
import SampleImage4 from "../../images/Sample/4.png";
import SampleImage5 from "../../images/Sample/5.png";
import SampleImage6 from "../../images/Sample/6.png";
import SampleImage7 from "../../images/Sample/7.png";
import SampleImage8 from "../../images/Sample/8.png";
import CourseList from "@/Components/Course/CourseList";

const categoryList = [
    {
        label: "Guided Mediation",
        icon: GuidedMediationIcon,
        route: "/guided-mediation",
    },
    {
        label: "Customization",
        icon: CustomizationIcon,
        route: "/customization",
    },
    {
        label: "Soothing Music",
        icon: SoothingMusic,
        route: "/soothing-music",
    },
    {
        label: "Natural Sounds",
        icon: NaturalSounds,
        route: "/natural-sounds",
    },
    {
        label: "Breathing",
        icon: Breathing,
        route: "/breathing",
    },
    {
        label: "Mindfulness",
        icon: Mindfulness,
        route: "/mindfulness",
    },
    {
        label: "Virtualization",
        icon: Virtualization,
        route: "/virtualization",
    },
];

const courseList = [
    {
        tutorName: "John Doe",
        courseName: "Course 1",
        duration: "1h 30m",
        rating: 4.5,
        thumbnail: SampleImage3,
        tutorProfilePicture: SampleImage7,
        isBookmarked: false,
    },
    {
        tutorName: "John Doe",
        courseName: "Course 1",
        duration: "1h 30m",
        rating: 4.5,
        thumbnail: SampleImage4,
        tutorProfilePicture: SampleImage8,
        isBookmarked: true,
    },
    {
        tutorName: "John Doe",
        courseName: "Course 1",
        duration: "1h 30m",
        rating: 4.5,
        thumbnail: SampleImage5,
        tutorProfilePicture: SampleImage7,
        isBookmarked: false,
    },
    {
        tutorName: "John Doe",
        courseName: "Course 1",
        duration: "1h 30m",
        rating: 4.5,
        thumbnail: SampleImage6,
        tutorProfilePicture: SampleImage8,
        isBookmarked: true,
    },
];

const learningList = [
    {
        courseTitle: "Course 1",
        tutorName: "John Doe",
        completion: 50,
        isBookmarked: true,
        thumbnail: SampleImage1,
    },
    {
        courseTitle: "Course 2",
        tutorName: "John Doe",
        completion: 30,
        isBookmarked: false,
        thumbnail: SampleImage2,
    },
    {
        courseTitle: "Course 3",
        tutorName: "John Doe",
        completion: 0,
        isBookmarked: true,
        thumbnail: SampleImage2,
    },
    {
        courseTitle: "Course 4",
        tutorName: "John Doe",
        completion: 10,
        isBookmarked: false,
        thumbnail: SampleImage1,
    },
];

const Welcome = () => {
    return (
        <>
            <CourseList courseList={courseList} />
        </>
    );
};

export default Welcome;
