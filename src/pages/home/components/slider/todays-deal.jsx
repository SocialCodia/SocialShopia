import { Link } from "react-router-dom";
import ItemTodaysDealProduct from "../../../../components/items/item-todays-deal-product";
import { useSelector } from "react-redux";

const TodaysDeal = () => {

    const { todaysDealProducts, isTodaysDealProductsLoading } = useSelector(state => state.productSlice);

    return (<div className="col-lg-2 col-md-4">
        <div className="card categoriesCard">
            <div className="card-header cardHeader text-white">
                Todays Deal
            </div>
            <div className="card-body cardBody">
                <ul className="categoriesList list-unstyled  ">
                    {
                        isTodaysDealProductsLoading ? <h1>Loading...</h1>
                            : todaysDealProducts.map((x) => <ItemTodaysDealProduct product={x} />)
                    }
                </ul>
            </div>
        </div>
    </div>);
}

export default TodaysDeal;
