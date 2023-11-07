import { Link } from "react-router-dom";

const TestCard = ({ categori }) => {

    const { category } = categori || {}


    return (
        <div>
            <Link to={`/brand/${category}`}>
                <button>{category}</button>
            </Link>
        </div>
    );
};

export default TestCard;