import React from 'react';
import { Link } from 'react-router-dom';

const BidsCard = ({ bid }) => {

    console.log(bid)

    const { _id, bidder_email, auther_email, bidderPrice, auther_price, bidder_deadline, category, jobTitle } = bid || {}
    return (
        <div>
            <div >
                <div className='w-[70%] text-white  mx-auto border rounded p-4 my-10 bg-slate-800'>

                    <div className='flex md:flex-row flex-col gap-6 md:gap-0 items-center justify-between'>

                        <div className='w-[70%]'>
                            <h3>{category}</h3>
                            <h1>{auther_email}</h1>
                        </div>

                        <div className='-w-[30%] ml-[50px] text-center'>
                            <h1>{jobTitle}</h1>
                            <p>${bidderPrice}</p>



                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BidsCard;