import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import logo from "../../Images/Animation - 1699277117268.json";
import { useContext } from "react";
import { AuthContext } from "../../firebase/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import CommonLogin from "../CommonLogin/CommonLogin";

const Register = () => {


    const { user, createUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;


        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long');
        } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
            toast.error('Password must contain at least one letter and one number');
        } else if (!/[@#$%^&+=]/.test(password)) {
            toast.error('Password must contain at least one special character (@#$%^&+=)');
        } else if (email === '' || password === '' || name === '') {
            toast.error('Please fill in all the fields');
        } else {
            createUser(email, password)
                .then((res) => {
                    console.log(res.user);
                    updateProfile(res.user, {
                        displayName: name,
                        photoURL: photoUrl,
                    })
                        .then(() => {
                            console.log('Profile Update');
                            toast.success('Registration Success');
                            setTimeout(() => {
                                toast.success('Welcome,', user?.displayName);
                            }, 2000);
                            navigate(location?.state ? location.state : '/');
                        })
                        .catch((err) => {
                            toast.error('Registration failed');
                            console.log(err);
                        });
                })
                .catch((err) => {
                    toast.error('Registration failed');
                    console.log(err);
                });
        }
    }

    return (
        <div>
            <div className="bg-gradient-to-r from-slate-900 via-purple-300  flex flex-col items-center justify-center h-screen py-[450px]">
                <div className="max-w-7xl bg-black-dark grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-20 p-5 rounded-2xl">
                    <div className="text-center">
                        <div className="max-w-[300px] mx-auto">
                            <Lottie className="w-full" animationData={logo} loop={true} />
                        </div>
                    </div>

                    <div className="max-w-80 grid gap-5">
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-800">Register</h1>
                        <p className="text-slate-800 font-bold">Register and never look back!</p>
                        <form onSubmit={handleRegister} className="space-y-6 text-white">
                            <div className="relative">
                                <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                                    <i className="fa-solid fa-envelope-open"></i>
                                </div>
                                <input type="text" name="name" placeholder="Enter name" className="w-full md:w-80 text-slate-800 py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg" />
                            </div>

                            <div className="relative">
                                <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                                    <i className="fa-solid fa-envelope-open"></i>
                                </div>
                                <input type="url" name="photoUrl" placeholder="Photo URL" className="w-full md:w-80 text-slate-800 py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg" />
                            </div>

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
                            <button type="submit" className="bg-gradient-to-r from-blue-400 to-cyan-200 w-full md:w-80 font-semibold rounded-full py-2">Register</button>
                        </form>
                        <div className="text-dull-white border-t border-white-light pt-4 space-y-4 text-sm">
                            <p>Already have an account? <Link to={'/login'} className="text-blue-700 font-bold cursor-pointer">Sign In</Link> Or, register with <CommonLogin></CommonLogin></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;