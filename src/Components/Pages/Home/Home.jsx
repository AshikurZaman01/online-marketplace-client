import Services from "../../Services/Services";
import GetUpdated from "../GetUpdated/GetUpdated";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div>
                <Services></Services>
            </div>



            <div>
                <GetUpdated></GetUpdated>
            </div>





        </div>
    );
};

export default Home;