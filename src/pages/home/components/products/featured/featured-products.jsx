import BigCard from "../../../../../components/cards/big-card";
import ItemProduct from "../../../../../components/items/item-product";
import { useSelector } from 'react-redux';
import Slider from "react-slick";

const FeaturedProducts = () => {

    const { featuredProducts, isFeaturedProductsLoading } = useSelector(state => state.productSlice);

    const settings = {
        speed: 500,
        arrows: false,
        swipeToSlide: true,
        infinite: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }], responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }],
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }]
       
    };

    return (
        <div className="mt-3">
            <BigCard title="Featured Products">
                <div className="row">
                    <Slider {...settings}>
                        {
                            isFeaturedProductsLoading
                                ? <p>Loading...</p>
                                :
                                featuredProducts.map((x) => <ItemProduct product={x} />)
                        }
                    </Slider>
                </div>
            </BigCard>
        </div>
    )
}

export default FeaturedProducts;