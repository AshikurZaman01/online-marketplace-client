import { useEffect, useState } from "react";
import TestCard from "./TestCard";

const Test = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error(err));
    }, []);


    return (
        <div>
            {
                categories.map(categori => <TestCard categori={categori} key={categori._id}></TestCard>)
            }
        </div>
    );
};

export default Test;