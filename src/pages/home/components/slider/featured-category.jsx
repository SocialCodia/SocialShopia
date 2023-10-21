import FeaturedCatgoryItem from '../../../../components/items/featured-category-item';
import { useSelector } from 'react-redux';

const FeaturedCategory = () => {

    const { featuredCategories, isFeaturedCategories } = useSelector(state => state.categorySlice);
    console.log(featuredCategories);

    return (
        <div className="d-flex">
            {isFeaturedCategories ? <h1>Loading...</h1>
                :
                featuredCategories.map((x, i) => {
                    if (i < 6)
                        return <FeaturedCatgoryItem name={x.name} icon={x.icon} slug={x.slug} />;
                })
            }
        </div>
    );

}

export default FeaturedCategory;