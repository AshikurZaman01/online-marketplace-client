import { AuthContext } from "../../../firebase/AuthProvider";
import { useContext, useEffect, useState } from "react";
import BidsCard from "./BidsCard";

const Mybids = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:3000/bids?auther_email=${user?.email}`

    const [bids, setBids] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBids(data);
            })
            .catch(err => console.log(err))
    }, [url])


    return (
        <div className="bg-slate-700 py-10">
            <div>
                <h1 className="text-center text-white text-3xl">My Bids</h1>
            </div>
            <div >
                {
                    bids.map(bid => <BidsCard bid={bid} key={bid._id}></BidsCard>)
                }
            </div>
        </div>
    );
};

export default Mybids;