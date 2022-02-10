import { Link } from "react-router-dom";

const ItemTodaysDealProduct = ({product}) => {
    return (
        <li className="itemTodaysDealProduct">
            <Link to="/">
                <div className="card ">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                            <img className="rounded" src="https://socialshopia-api.herokuapp.com/storage/images/image-1643264817393-995333517.jpg" alt="" />
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                            <p className="truncateAfterTwoLine">{product.name}</p>
                            <div className="d-flex justify-content-evenly">
                                <p>200</p>
                                <p>300</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default ItemTodaysDealProduct;