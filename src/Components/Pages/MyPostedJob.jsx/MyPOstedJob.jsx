import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../firebase/AuthProvider";
import PostedJobsCard from "./PostedJobsCard";

const MyPOstedJob = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:3000/jobs?email=${user?.email}`

    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
            .catch(err => console.log(err))
    }, [url])

    console.log(jobs)

    return (
        <div className="bg-slate-800 text-white py-8">
            <div className="text-center text-4xl font-bold ">
                <h1>My Posted Jobs</h1>
            </div>

            <div className="">
                {
                    jobs.map(job => <PostedJobsCard job={job} key={job._id}></PostedJobsCard>)
                }
            </div>
        </div>
    );
};

export default MyPOstedJob;