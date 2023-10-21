import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


const CategoryComponent = () => {

    const { categories, isCategoriesLoading } = useSelector(state => state.categorySlice);

    return (<div className="col-lg-2 col-md-4">
        <div className="card categoriesCard">
            <div className="card-header cardHeader text-white">
                Categorides
            </div>
            <div className="card-body cardBody">
                <ul className="categoriesList list-unstyled  ">
                    {
                        isCategoriesLoading
                            ? <li><h1>Loading...</h1></li>
                            : <li>

                                {
                                    categories.map((x, i) =>
                                        <li key={i}>
                                            <Link to={`/category/${x.slug}`}>
                                                <img className="rounded categoryImage" src={x.icon} alt="" />
                                                {x.name}
                                            </Link>
                                        </li>
                                    )
                                }


                            </li>
                    }

                </ul>
            </div>
        </div>
    </div>);

}


export default CategoryComponent;