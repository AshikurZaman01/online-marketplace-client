import React from 'react';

const Alljobs = ({ jobs }) => {

    const { _id, name, email, jobTitle, deadline, description, maxprice, minprice, category } = jobs || {};


    return (
        <div className='w-[70%] text-white  mx-auto border rounded p-4'>

            <div className='flex md:flex-row flex-col gap-6 md:gap-0 items-center justify-between'>

                <div className='w-[70%]'>
                    <h3>{jobTitle}</h3>
                    <h4 className='text-slate-400 py-2'>{description.length > 50 ? description.slice(0, 100) : ""}</h4>
                    <h4>{deadline}</h4>
                </div>

                <div className='-w-[30%] ml-[50px] text-center'>
                    <p>{maxprice}-{minprice}</p>
                    <button className='btn btn-sm my-3 hover:bg-slate-600 hover:text-white'>View Details</button>
                </div>
            </div>

        </div>
    );
};

export default Alljobs;