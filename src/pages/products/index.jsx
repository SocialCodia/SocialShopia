import Header from "../../components/header";
import Footer from "../home/components/footer";
import HeaderTitle from "./components/header-title";
import Body from "./components/body";

const ProductsPage = () => {

    

    return (
        <>
            <Header />
            <div className="ccontainer mt-3 mb-3">
                <HeaderTitle />
                <Body/>
            </div>
            <Footer />
        </>
    );

}

export default ProductsPage;