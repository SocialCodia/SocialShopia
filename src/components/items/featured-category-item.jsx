
const FeaturedCatgoryItem = ({ name, icon, slug }) => {

    return (
        <div className="col-lg-2 col-md-3 p-2 mt-2 text-center itemFeaturedCategory">
            <div className="card">
                <img width={100} src={icon} alt="" />
                <p>{name}</p>
            </div>
        </div>
    )

}

export default FeaturedCatgoryItem;