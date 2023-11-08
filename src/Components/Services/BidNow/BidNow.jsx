import { useContext } from "react";
import { AuthContext } from "../../../firebase/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { data } from "autoprefixer";
import toast from "react-hot-toast";

const BidNow = () => {

    const { user } = useContext(AuthContext)

    const jobsData = useLoaderData()
    const { _id, name, image, email, jobTitle, deadline, description, maxprice, minprice, category } = jobsData || {};

    console.log(name)


    const handleBidNow = (e) => {
        e.preventDefault()

        const form = e.target;

        const bidPrice = form.bidprice.value;
        const deadline = form.deadline.value;

        const bidData = {
            bidderPrice: bidPrice,
            bidder_deadline: deadline,
            bidder_email: user?.email,
            auther_email: email,
            auther_price: { maxprice, minprice }
        }

        console.log(bidData)

        fetch('http://localhost:3000/bids', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bidData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success("Bid Successfully")
                }
            })
            .catch(err => {
                console.log(err);
                toast.error("Bid Failed")
            })

    }

    return (
        <div className="bg-slate-800 py-10 text-white">

            <div className="text-center text-4xl">
                <h1>Bid Now</h1>
            </div>

            <form onSubmit={handleBidNow} className="w-[80%] mx-auto my-10">

                <div className="grid grid-cols-2 gap-5">
                    <input
                        type="number"
                        className="border text-slate-800 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-1 "
                        placeholder={`$${minprice} - $${maxprice} `}
                        name="bidprice"
                    />
                    <input
                        type="date"
                        className="border text-slate-800 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-1"
                        placeholder="Deadline"
                        name="deadline"
                    />

                </div>
                <input
                    type="submit"
                    value="Bid Now"
                    className="rounded cursor-pointer focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full"
                />
            </form>

        </div>
    );
};

export default BidNow;