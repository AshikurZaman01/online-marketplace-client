import { Link } from "react-router-dom";

const ServiceCard = ({ categori }) => {

    const { category } = categori || {}

    return (
        <div>
            <div>
                <Link to={`/showCategories/${category}`}>
                    <div className="tabs py-10 pb-20">
                        <button className="tab tab-lifted text-white text-2xl font-semibold">{category}</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;