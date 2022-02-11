import Product from "./components/prdoucts";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Details from "./components/details";
import RelatedProduct from "./components/related-product";
import TopSellingProduct from "./components/top-product";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductBySlug } from '../../http/';
import { useDispatch } from "react-redux";
import { setProduct } from '../../store/product-slice';

const ProductDetails = () => {

    const dispatch = useDispatch();
    const { slug } = useParams();

    useEffect(() => {
        (async () => {
            console.log({slug});
            const res = await getProductBySlug(slug);
            dispatch(setProduct(res.data));
        })()
    })

    return (
        <>
            <Header />
            <div className="ccontainer mt-3 mb-3">
                <Product />
                <div className="row mt-3">
                    <div className="col-lg-3 col-xl-3 col-md 4">
                        <TopSellingProduct />
                    </div>
                    <div className="col-lg-9 col-xl-9 col-md 8">
                        <Details />
                        <RelatedProduct />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetails;