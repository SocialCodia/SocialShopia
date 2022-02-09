import BigCard from "../../../../../components/cards/big-card";
import ItemProduct from "../../../../../components/items/item-product";

const FeaturedProducts = () => {
    return (
        <div className="mt-3">
            <BigCard title="Featured Products">
                <div className="row">
                    <ItemProduct />
                    <ItemProduct />
                    <ItemProduct />
                    <ItemProduct />
                    <ItemProduct />
                    <ItemProduct />
                </div>
            </BigCard>
            <BigCard title="Featured Products">
                <div className="row">
                    <ItemProduct />
                    <ItemProduct />
                    <ItemProduct />
                    <ItemProduct />
                    <ItemProduct />
                    <ItemProduct />
                </div>
            </BigCard>
            <BigCard title="Featured Products">
                <div className="row">
                    <ItemProduct />
                    <ItemProduct />
                    <ItemProduct />
                    <ItemProduct />
                    <ItemProduct />
                    <ItemProduct />
                </div>
            </BigCard>
        </div>
    )
}

export default FeaturedProducts;