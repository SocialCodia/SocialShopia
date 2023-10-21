import Slider from 'react-slick';
import BigCard from '../../../components/cards/big-card';
import ItemProduct from '../../../components/items/item-product';

const RelatedProduct = () => {

    const settings = {
        speed: 500,
        arrows: false,
        swipeToSlide: true,
        infinite: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }, {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },],

    };

    return (
        <BigCard title="Related Products">
            <Slider {...settings}>
                {/* {
                    isFeaturedProductsLoading
                        ? <p>Loading...</p>
                        :
                        featuredProducts.map((x) => <ItemProduct product={x} />)
                } */}
                <ItemProduct product="afas" />
                <ItemProduct product="afas" />
                <ItemProduct product="afas" />
                <ItemProduct product="afas" />
                <ItemProduct product="afas" />
                <ItemProduct product="afas" />
                <ItemProduct product="afas" />
                <ItemProduct product="afas" />
                <ItemProduct product="afas" />
            </Slider>
        </BigCard>
    )

}

export default RelatedProduct;