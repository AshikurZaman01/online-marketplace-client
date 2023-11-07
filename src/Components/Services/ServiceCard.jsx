import { Link } from "react-router-dom";
import ShowCategories from "./ShowCategories";

const ServiceCard = ({ categori }) => {

    const { category } = categori || {}

    return (
        <div>
            <div>
                <Link to={`/showCategories/${category}`}>
                    <div className="tabs py-10 pb-20">
                        <a className="tab tab-lifted text-white text-2xl font-semibold">{category}</a>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;