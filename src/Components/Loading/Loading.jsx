import Lottie from "lottie-react";
import logo from "../../../src/Images/loading.json";

const Loading = () => {
    return (
        <div className="h-screen flex justify-center">
            <div className="">
                <div className="h-[500px] w-[500px]">
                    <Lottie className="h-full" animationData={logo} loop={true} />;
                </div>


            </div>
        </div>
    );
};

export default Loading;