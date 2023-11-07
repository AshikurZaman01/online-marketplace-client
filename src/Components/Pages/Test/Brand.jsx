import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Brand = () => {

    const jobsData = useLoaderData();
    const cate = useParams()





    const jobsFilter = jobsData.filter((jobs) => jobs.Category === cate.category)

    console.log(jobsFilter)



    return (
        <div>
            brand
        </div>
    );
};

export default Brand;