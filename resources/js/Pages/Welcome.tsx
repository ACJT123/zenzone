import GuidedMediationIcon from "../../images/CategoryItem/guided-mediation.png";
import CustomizationIcon from "../../images/CategoryItem/customization.png";
import SoothingMusic from "../../images/CategoryItem/soothing-music.png";
import NaturalSounds from "../../images/CategoryItem/natural-sounds.png";
import Breathing from "../../images/CategoryItem/breathing.png";
import Mindfulness from "../../images/CategoryItem/mindfulness.png";
import Virtualization from "../../images/CategoryItem/virtualization.png";
import CategoryItem from "@/Components/Category/CategoryItem";
import CategoryList from "@/Components/Category/CategoryList";

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

const Welcome = () => {
    return (
        <>
            <CategoryList categoryList={categoryList} />
        </>
    );
};

export default Welcome;
