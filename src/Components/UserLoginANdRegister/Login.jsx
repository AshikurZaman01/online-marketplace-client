import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import logo from "../../Images/login.json";
import { useContext } from "react";
import { AuthContext } from "../../firebase/AuthProvider";
import toast from "react-hot-toast";
import CommonLogin from "../CommonLogin/CommonLogin";

const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const { user, signInUser } = useContext(AuthContext);



    const handleSignIn = (e) => {
        e.preventDefault()

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signInUser(email, password)
            .then(res => {
                console.log(res.user);
                toast.success('logged in success..')
                setTimeout(() => {
                    toast.success('Welcome,', user?.displayName);
                }, 2000);
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                toast.error('logg in failed..')

                console.log(err);
            })
    }

    return (
        <div className="bg-gradient-to-r from-slate-900 via-purple-300  flex flex-col items-center justify-center h-screen">
            <div className="max-w-7xl bg-black-dark grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-20 p-5 rounded-2xl">
                <div className="text-center">
                    <div className="max-w-[300px] mx-auto">
                        <Lottie className="w-full" animationData={logo} loop={true} />
                    </div>
                </div>

                <div className="max-w-80 grid gap-5">
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-800">Login</h1>
                    <p className="text-slate-800 font-bold">Get access to 3000+ jobs, projects, and clients</p>
                    <form onSubmit={handleSignIn} className="space-y-6 text-white">
                        <div className="relative">
                            <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                                <i className="fa-solid fa-envelope-open"></i>
                            </div>
                            <input type="email" name="email" placeholder="Email Address" className="w-full md:w-80 text-slate-800 py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg" />
                        </div>
                        <div className="relative">
                            <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                                <i className="fa-solid fa-lock"></i>
                            </div>
                            <input type="text" name="password" placeholder="Password" className="w-full md:w-80 text-slate-800 py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg" />
                        </div>
                        <button type="submit" className="bg-gradient-to-r from-blue-400 to-cyan-200 w-full md:w-80 font-semibold rounded-full py-2">Login</button>
                    </form>
                    <div className="text-dull-white border-t border-white-light pt-4 space-y-4 text-sm">
                        <p>Don't have an account? <Link to={'/register'} className="text-blue-700 font-bold cursor-pointer">Sign up</Link> Or, login With <CommonLogin></CommonLogin></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
