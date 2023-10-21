import BigCard from "../../../components/cards/big-card";
import ItemProduct from "../../../components/items/item-product";

const Body = () => {

    return (
        <div className="row">
            <div className="col-lg-3 col-md-3">
                <BigCard title="Price Range">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ratione architecto quia deserunt repellat aliquam officia nihil hic nisi, cumque rerum natus, veritatis quam. Quidem, repellat fugit natus aperiam dolorem delectus, vero earum in non sed accusamus quasi quia enim adipisci. Suscipit maxime veniam, quidem rem voluptas odio ipsum architecto.</p>
                </BigCard>
            </div>
            <div className="col-lg-9 col-md-9 mt-3">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-2">
                        <ItemProduct product="asdf" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-2">
                        <ItemProduct product="asdf" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-2">
                        <ItemProduct product="asdf" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-2">
                        <ItemProduct product="asdf" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-2">
                        <ItemProduct product="asdf" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-2">
                        <ItemProduct product="asdf" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Body;