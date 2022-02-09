import Header from "../../components/header";
import Footer from "./components/footer";
import FeaturedProducts from "./components/products/featured/featured-products";
import TopComponent from "./components/slider";

const HomePage = () => {
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