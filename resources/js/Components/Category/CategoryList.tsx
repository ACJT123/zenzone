import CategoryItem from "./CategoryItem";
import "../../../style/Components/Category/categoryList.scss";

type ICategoryList = {
    categoryList: any[];
};

const CategoryList = ({categoryList}: ICategoryList) => {
    return (
        <div className="category-list-container">
            {categoryList.map((category) => (
                <CategoryItem
                    icon={category.icon}
                    label={category.label}
                    route={category.route}
                />
            ))}
        </div>
    );
};

export default CategoryList;