import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="bg-slate-900 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
                <div className="p-5 ">
                    <ul>
                        <p className="text-white font-bold text-3xl pb-6">Iber</p>
                        <div className="flex gap-6 pb-5">
                            <FaInstagram className="text-2xl cursor-pointer text-white hover:text-yellow-600" />
                            <FaTwitter className="text-2xl cursor-pointer text-white hover:text-blue-600" />
                            <FaLinkedin className="text-2xl cursor-pointer text-white hover:text-blue-600" />
                            <FaYoutube className="text-2xl cursor-pointer text-white hover:text-red-600" />
                        </div>

                        <div className="flex gap-6 pb-5">
                            <h4 className="text-2xl text-white">Address</h4>
                        </div>

                        <div className="flex gap-6 pb-5 text-teal-400">
                            <p>Khulna, Bangladesh</p>
                        </div>

                        <div className="flex gap-6 pb-5 text-teal-400">
                            <p>+8801721234567</p>
                        </div>

                        <div className="flex gap-6 pb-5 text-teal-400">
                            <p>iber@gmail.com</p>

                        </div>

                    </ul>
                </div>

                <div className="p-5">
                    <ul>
                        <p className="text-white font-bold text-2xl pb-4">Product</p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"><Link to={'/addJob'}>Add Job</Link></li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <Link to={'/myPostedJob'}>Add Posted Job</Link></li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <Link to={'/myBids'}>My Bids</Link></li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <Link to={'/bidRequest'}>Bid Request</Link>
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-white font-bold text-2xl pb-4">Company</p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            About
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Products
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Pricing
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Careers
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Press & Media
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-white font-bold text-2xl pb-4">Support</p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Contact
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Support Portals
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            List Of Charges
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Downloads & Resources
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Videos
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
                <h1 className=" text-gray-800 font-semibold">
                    © 2023-2024 All rights reserved | Build with ❤ by{" "}
                    <span className="hover:text-blue-600 font-semibold cursor-pointer">
                        Iber{" "}
                    </span>
                </h1>
            </div>
        </>
    );
}

export default Footer;