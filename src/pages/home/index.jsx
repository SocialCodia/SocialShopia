import Header from "../../components/header";
import Footer from "./components/footer";
import FeaturedProducts from "./components/products/featured/featured-products";
import TopComponent from "./components/slider";
import { useEffect } from "react";
import { getCategories, getFeaturedCategories } from "../../http";
import { useDispatch } from 'react-redux';
import { setCategories } from "../../store/category-slice";

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => (async () => {
        const categoriesResponse = await getCategories();
        dispatch(setCategories(categoriesResponse.data))
    })());

    return (
        <>

            <Header />
            <div className="ccontainer mt-3 mb-3">
                <TopComponent />
                <FeaturedProducts />
                <FeaturedProducts />
            </div>
            <Footer />
        </>
    )
}

export default HomePage;