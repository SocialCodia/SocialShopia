import { useSelector } from "react-redux";


const Product = () => {

    const {product,isProductLoading} = useSelector(state=>state.productSlice);

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-6 col-xl-5">
                        <img className="img-fluid" src="https://unanipharma.com/public/uploads/all/wGZA8PJT3hpv7zms28cOrBl6oBu4D1bxsN19OOEk.jpg" alt="" />

                    </div>
                    <div className="col-lg-6 col-xl-7">
                        <h4>{product.name}</h4>
                        <div className="dropdown-divider"></div>
                        <div className="row">
                            <div className="col-sm-2">
                                Price
                            </div>
                            <div className="col-sm-10">
                                <h2>{product.price}</h2>
                            </div>
                            <div className="col-sm-2">
                                Discount Price
                            </div>
                            <div className="col-sm-10">
                                <h2>180</h2>
                            </div>
                        </div>

                        <div className="dropdown-divider"></div>
                        <div className="row">
                            <div className="col-sm-2">
                                Size
                            </div>
                            <div className="col-sm-10">
                                <h2>200</h2>
                            </div>
                            <div className="col-sm-2">
                                Quantity
                            </div>
                            <div className="col-sm-10">
                                <h2>180</h2>
                            </div>
                        </div>
                        <div className="dropdown-divider"></div>
                        <div className="row">
                            <div className="col-sm-2">
                                Total Price
                            </div>
                            <div className="col-sm-10">
                                <h2>200</h2>
                            </div>
                        </div>
                        <div className="d-flex">
                            <button className="btn btn-danger m-1">Add To Cart</button>
                            <button className="btn btn-danger m-1">Buy Now</button>
                        </div>
                        <div className="row">
                            <div className="col-sm-2">
                                Share
                            </div>
                            <div className="col-sm-10">
                                <p>facebook</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Product;