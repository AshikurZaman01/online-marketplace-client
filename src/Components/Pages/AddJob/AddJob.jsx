import { useContext } from "react";
import { AuthContext } from "../../../firebase/AuthProvider";

const AddJob = () => {

    const { user } = useContext(AuthContext)
    console.log(user?.email)


    const categpries = [
        'Web Development',
        'Digital Marketing',
        'Graphics Design',
    ]

    const handleAddJob = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const jobTitle = form.jobtitle.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const maxprice = form.maxprice.value;
        const minprice = form.minprice.value;
        const category = form.category.value;

        const jobsData = {
            name,
            email,
            jobTitle,
            deadline,
            description,
            maxprice,
            minprice,
            category,
        }

        console.log(jobsData)

        fetch('http://localhost:3000/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobsData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Job Added Successfully')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="bg-slate-800 py-10 text-white">

            <div className="text-center text-4xl">
                <h1>Add Jobs</h1>
            </div>

            <form onSubmit={handleAddJob} className="w-[80%] mx-auto my-10">

                <div className="grid grid-cols-2 gap-5">
                    <input
                        type="text"
                        className="rounded border text-slate-800 border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                        placeholder="Name"
                        name="name"
                        defaultValue={user?.displayName}
                    />
                    <input
                        type="email"
                        className="rounded border text-slate-800 border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                        placeholder="Enter Your Email"
                        name="email"
                        defaultValue={user?.email}
                    />
                    <input
                        type="text"
                        className="rounded border text-slate-800 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-1"
                        placeholder="Job title"
                        name="jobtitle"
                    />
                    <input
                        type="date"
                        className="border text-slate-800 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-1"
                        placeholder="Deadline"
                        name="deadline"
                    />
                    <textarea
                        cols="10"
                        rows="2"
                        className="rounded border text-slate-800 border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                        placeholder="Describe your Job"
                        name="description"
                    ></textarea>

                    <div className="grid grid-cols-6 gap-5 bg">
                        <input
                            type="number"
                            className="border text-slate-800 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-3 "
                            placeholder="Maximum price"
                            name="maxprice"
                        />
                        <input
                            type="number"
                            className="border text-slate-800 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-3 "
                            placeholder="Minimum price"
                            name="minprice"
                        />
                    </div>

                    <div className="grid grid-cols-6 gap-5 bg">
                        <div className="form-control ">
                            <div className="input-group ">

                                <select name="category" className="select select-bordered text-slate-800">
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
                    value="Add Job"
                    className="rounded cursor-pointer focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full"
                />
            </form>

        </div>
    );
};

export default AddJob;