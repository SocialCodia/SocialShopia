import { Link } from "react-router-dom";
import FeaturedCatgoryItem from "../../../../components/items/featured-category-item";
import CategoryComponent from "./category";
import SliderComponent from "./slider";
import TodaysDeal from "./todays-deal";

const TopComponent = () => {
    return (
        <div className="row">

            <CategoryComponent />


            <div className="col-lg-8 col-md-4 ">
                <SliderComponent />
                <div className="d-flex">

                    <FeaturedCatgoryItem />
                    <FeaturedCatgoryItem />
                    <FeaturedCatgoryItem />
                    <FeaturedCatgoryItem />
                    <FeaturedCatgoryItem />
                    <FeaturedCatgoryItem />
                </div>
            </div>


            <TodaysDeal />


        </div>
    )
}

export default TopComponent;

