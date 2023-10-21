import { Link } from "react-router-dom";
import CategoryComponent from "./category";
import FeaturedCategory from "./featured-category";
import SliderComponent from "./slider";
import TodaysDeal from "./todays-deal";

const TopComponent = () => {
    return (
        <div className="row">

            <CategoryComponent />

            <div className="col-lg-8 col-md-4 ">
                <SliderComponent />
                <FeaturedCategory />
            </div>
            <TodaysDeal />

        </div>
    )
}

export default TopComponent;

