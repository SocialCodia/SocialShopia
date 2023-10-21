import Header from "../../components/header";
import Footer from "../../components/footer";
import FeaturedProducts from "./components/products/featured/featured-products";
import TopComponent from "./components/slider";
import { useEffect } from "react";
import { getCategories, getFeaturedCategories, getProducts, getFeaturedProducts, getTodaysDealProducts, getBanners } from "../../http";
import { useDispatch } from 'react-redux';
import { setCategories, setFeaturedCategories } from "../../store/category-slice";
import { setFeaturedProducts, setProducts, setTodaysDealProducts } from "../../store/product-slice";
import { setBanners } from "../../store/banner-slice";

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => (async () => {

        const bannersResponse = await getBanners();

        const categoriesResponse = await getCategories();
        const featureCategoriesRespponse = await getFeaturedCategories();
        const featuredProductsResponse = await getFeaturedProducts();

        const productsResponse = await getProducts();
        const todaysDealProductsResponse = await getTodaysDealProducts();

        dispatch(setBanners(bannersResponse.data));

        dispatch(setCategories(categoriesResponse.data))
        dispatch(setFeaturedCategories(featureCategoriesRespponse.data));

        dispatch(setFeaturedProducts(featuredProductsResponse.data));
        dispatch(setProducts(productsResponse.data));
        dispatch(setTodaysDealProducts(todaysDealProductsResponse.data));


    })());

    return (
        <>

            <Header />
            <div className="ccontainer mt-3 mb-3">
                <TopComponent />
                <FeaturedProducts />
            </div>
            <Footer />
        </>
    )
}

export default HomePage;