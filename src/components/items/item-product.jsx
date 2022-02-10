
const ItemProduct = ({ product }) => {
    return (
        <div className="d-flex">
            <div className="card productCard bg-white">
                <img src="https://unanipharma.com/public/uploads/all/lTcYw19GnMzyZ4rIcJ5K5HkxvqfqloinTWyakh4h.jpg" alt="" className="card-image-top" />
                <div className="card-body flex-fill">
                    <p className="productTitle truncateAfterTwoLine">The name of product is only-> {product.name}</p>
                    <div className="d-flex justify-content-between">
                        <p>Rs {product.hasDiscount ? product.discountPrice : product.price}</p>
                        {product.hasDiscount && <p>Rs {product.price}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemProduct;