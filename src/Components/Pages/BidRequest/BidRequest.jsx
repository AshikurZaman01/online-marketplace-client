import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../firebase/AuthProvider";


const BidRequest = () => {

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

    console.log(bids)

    return (
        <div>
            bid Request
        </div>
    );
};

export default BidRequest;