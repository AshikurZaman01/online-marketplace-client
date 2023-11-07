import { useLoaderData, useParams } from "react-router-dom";
import Alljobs from "./AllJobs/Alljobs";

const ShowCategories = () => {

    const jobsData = useLoaderData();
    const cate = useParams()

    const jobsFilter = jobsData.filter((jobs) => jobs.category === cate.category)

    console.log(jobsFilter.length)

    return (
        <div>
            <div>
                <h1 className="text-center bg-slate-800 text-3xl font-semibold text-white p-10">Jobs For :  <span className="text-pink-400">{cate.category}</span></h1>
            </div>

            <div className="py-10 bg-slate-800 flex flex-col gap-6 ">
                {
                    jobsFilter.length > 0 ?
                        jobsFilter.map((jobs) => <Alljobs jobs={jobs} key={jobs._id}></Alljobs>)
                        :
                        <h1 className="text-center text-4xl font-bold text-white">No Jobs Found</h1>
                }
            </div>
        </div>
    );
};

export default ShowCategories;