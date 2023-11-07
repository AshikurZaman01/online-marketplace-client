import React from 'react';

const Alljobs = ({ jobs }) => {

    const { _id, Job_Title, Price_Range, Category, Deadline, Short_Description } = jobs || {};


    return (
        <div className='w-[70%] text-white  mx-auto border rounded p-4'>

            <div className='flex items-center justify-between'>

                <div className='w-[70%]'>
                    <h3>{Job_Title}</h3>
                    <h4 className='text-slate-400 py-2'>{Short_Description}</h4>
                    <h4>{Deadline}</h4>
                </div>

                <div className='-w-[30%] ml-[50px] text-center'>
                    <p>{Price_Range}</p>
                    <button className='btn btn-sm my-3 hover:bg-slate-600 hover:text-white'>View Details</button>
                </div>
            </div>

        </div>
    );
};

export default Alljobs;