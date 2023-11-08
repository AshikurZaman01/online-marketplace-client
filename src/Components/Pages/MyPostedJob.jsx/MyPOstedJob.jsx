import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../firebase/AuthProvider";
import PostedJobsCard from "./PostedJobsCard";
import toast from "react-hot-toast";

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

    const handleDelete = (id) => {
        const proceed = confirm("Are you sure you want to delete this job?");

        if (proceed) {
            fetch(`http://localhost:3000/jobs/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then(data => {
                    console.log(data);
                    toast.success("Job Deleted Successfully!")
                    const remaining = jobs.filter(job => job._id !== id);
                    setJobs(remaining);
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("Error Deleting Job!");

                })
        }
    }



    return (
        <div className="bg-slate-800 text-white py-8">
            <div className="text-center text-4xl font-bold ">
                <h1>My Posted Jobs</h1>
            </div>

            <div className="">
                {
                    jobs.map(job => <PostedJobsCard job={job} key={job._id} handleDelete={handleDelete}></PostedJobsCard>)
                }
            </div>
        </div>
    );
};

export default MyPOstedJob;