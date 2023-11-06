import Lottie from "lottie-react";
import logo from "../../../Images/Animation - 1699246513104.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {


    return (
        <div className="h-screen flex justify-center">
            <div className="">
                <div className="h-[500px] w-[500px]">
                    <Lottie className="h-full" animationData={logo} loop={true} />;
                </div>

                <div className="text-center">
                    <Link to={'/'}><button className="btn btn-error">Go Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;