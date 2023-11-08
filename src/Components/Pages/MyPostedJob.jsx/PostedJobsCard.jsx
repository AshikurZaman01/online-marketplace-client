import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const PostedJobsCard = ({ job, handleDelete }) => {


    const { _id, name, image, email, jobTitle, deadline, description, maxprice, minprice, category } = job || {};



    return (
        <div>
            <div className='w-[70%] text-white  mx-auto border rounded p-4 my-10'>

                <div className='flex md:flex-row flex-col gap-6 md:gap-0 items-center justify-between'>

                    <div className='w-[70%]'>
                        <h3>{jobTitle}</h3>
                        <h4 className='text-slate-400 py-2'>{description.length > 50 ? description.slice(0, 100) : ""}</h4>
                        <h4>{deadline}</h4>
                    </div>

                    <div className='-w-[30%] ml-[50px] text-center'>
                        <p>{maxprice}-{minprice}</p>

                        <Link to={`/viewJobs/${_id}`}><button className='btn btn-sm my-3 hover:bg-slate-600 hover:text-white'>View Details</button></Link>

                        <div className="flex gap-6">
                            <button className="btn btn-xs my-3 bg-green-600 text-white hover:bg-slate-600 hover:text-white">Update</button>

                            <button onClick={() => handleDelete(_id)} className="btn btn-xs my-3 bg-red-500 hover:bg-slate-600 hover:text-white">Delete</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PostedJobsCard;