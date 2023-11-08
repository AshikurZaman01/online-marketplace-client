import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../firebase/AuthProvider";
import toast from "react-hot-toast";

const UpdatedPostedJob = () => {

    const jobData = useLoaderData();
    const { user } = useContext(AuthContext)


    const categpries = [
        'Web Development',
        'Digital Marketing',
        'Graphics Design',
    ]


    const { _id, name, image, email, jobTitle, deadline, description, maxprice, minprice, category } = jobData || {};

    const handleUpdatedJob = (e) => {
        e.preventDefault();

        const form = e.target;
        const jobTitle = form.jobtitle.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const maxprice = form.maxprice.value;
        const minprice = form.minprice.value;
        const category = form.category.value;
        const image = user?.photoURL;

        const updatedData = {
            name,
            email,
            jobTitle,
            deadline,
            description,
            maxprice,
            minprice,
            category,
            image,
        }
        console.log(updatedData);

        fetch(`http://localhost:3000/jobs/${_id}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Job Updated Successfully')
                form.reset();

            })
            .catch(err => {
                console.log(err);
                toast.error('Error Updating Job')
            })



    }

    return (
        <div className="bg-slate-800 py-10 text-white">

            <div className="text-center text-4xl">
                <h1>Update Jobs</h1>
            </div>

            <form onSubmit={handleUpdatedJob} className="w-[80%] mx-auto my-10">

                <div className="grid grid-cols-2 gap-5 disabled">

                    <input
                        type="text"
                        className="rounded border text-slate-800 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-1"
                        placeholder="Job title"
                        name="jobtitle"
                        defaultValue={jobTitle}
                    />
                    <input
                        type="date"
                        className="border text-slate-800 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-1"
                        placeholder="Deadline"
                        name="deadline"
                        defaultValue={deadline}
                    />
                    <textarea
                        cols="10"
                        rows="2"
                        className="rounded border text-slate-800 border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                        placeholder="Describe your Job"
                        name="description"
                        defaultValue={description}
                    ></textarea>

                    <div className="grid grid-cols-6 gap-5 bg">
                        <input
                            type="number"
                            className="border text-slate-800 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-3 "
                            placeholder="Maximum price"
                            name="maxprice"
                            defaultValue={maxprice}
                        />
                        <input
                            type="number"
                            className="border text-slate-800 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-3 "
                            placeholder="Minimum price"
                            name="minprice"
                            defaultValue={minprice}
                        />
                    </div>

                    <div className="grid grid-cols-6 gap-5 bg">
                        <div className="form-control ">
                            <div className="input-group ">

                                <select name="category" value={category} className="select select-bordered text-slate-800">
                                    <option disabled selected>Pick category</option>
                                    {
                                        categpries.map(cate => {
                                            return (
                                                <option>{cate}</option>
                                            )
                                        })
                                    }
                                </select>

                            </div>
                        </div>
                    </div>

                </div>
                <input
                    type="submit"
                    value="Update Job"
                    className="rounded cursor-pointer focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full"
                />
            </form>

        </div>
    );
};

export default UpdatedPostedJob;