import { Link } from "react-router-dom";

const ItemProduct = ({ product }) => {
    return (
        <div className="d-flex">
            <div className="card productCard bg-white">
                <Link to={`/product/${product.slug}`}>
                    <img src="https://unanipharma.com/public/uploads/all/lTcYw19GnMzyZ4rIcJ5K5HkxvqfqloinTWyakh4h.jpg"  alt="" className="card-image-top w-100 " />
                    <div className="card-body flex-fill">
                        <p className="productTitle truncateAfterTwoLine">The name of product is only-> {product.name}</p>
                        <div className="d-flex justify-content-between">
                            <p>Rs {product.hasDiscount ? product.discountPrice : product.price}</p>
                            {product.hasDiscount && <p>Rs {product.price}</p>}
                        </div>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default ItemProduct;