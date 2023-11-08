import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../firebase/AuthProvider";

const ViewJobs = () => {

    const { user } = useContext(AuthContext)
    console.log(user?.email.toUpperCase())
    console.log(user?.photoURL)

    const jobsData = useLoaderData()

    const { _id, name, image, email, jobTitle, deadline, description, maxprice, minprice, category } = jobsData || {};


    return (
        <div>
            <div className="main-wrapper bg-slate-800 text-white">
                <div className="container mx-auto bg-slate-800">
                    <div className="product-div flex items-center gap-10 py-10">

                        <div className="product-div-right w-[70%] space-y-5">
                            <span className="product-name text-2xl block capitalize">{jobTitle}</span>
                            <span className="product-price">${maxprice} - ${minprice}</span>



                            <p className="product-description text-justify">{description}</p>
                            <div className="btn-groups space-y-4">
                                <p>Category : {category}</p>

                                <div className="product-deadline text-red-400">
                                    <span >DeadLine : {deadline}</span>
                                </div>

                            </div>
                        </div>

                        <div className="product-div-left shadow-sm shadow-slate-600-500 rounded-md space-y-3 border border-gray-600 w-[30%] text-center my-5">
                            <div>
                                <h1 className="text-xl p-3 font-bold">Auther Details</h1>
                            </div>
                            <div className="img-container w-[100px] h-[100px] mx-auto">
                                <img className="w-full h-full rounded-full" src={image} alt="watch" />
                            </div>
                            <div>
                                Name : {name}
                            </div>
                            <div>
                                Email : {email}
                            </div>

                        </div>

                    </div>
                </div>
                <div className="py-10">
                    {
                        user?.displayName.toLowerCase() === name.toLowerCase() ? <button className="mx-auto block btn-md bg-white text-black px-10 rounded font-bold btn-disabled">Bid Now</button>
                            :

                            <Link to={`/bidNow/${_id}`}><button className="mx-auto block btn-md bg-pink-600 rounded px-10 btn font-bold">Bid Now</button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default ViewJobs;