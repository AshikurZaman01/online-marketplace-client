import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error(err));
    }, []);


    return (
        <div className="bg-slate-900">
            <div>
                <h1 className="text-4xl font-bold text-center p-10 text-white">Browser Jobs By Category</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-[80%] mx-auto  h-auto">
                {
                    categories.map(categori => <ServiceCard categori={categori} key={categori._id}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;