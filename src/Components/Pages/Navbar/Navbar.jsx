import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AuthContext } from '../../../firebase/AuthProvider';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    const listItems = (
        <div className='lg:hidden z-50 block absolute top-16 left-0 right-0 bg-slate-800'>
            <ul className='text-center text-xl p-20'>
                <NavLink to='/'>
                    <li className='my-4 border-b border-slate-700 hover:bg-slate-600 hover:rounded'>Home</li>
                </NavLink>
                <NavLink to='/addJob'>
                    <li className='my-4 border-b border-slate-700 hover:bg-slate-600 hover:rounded'>Add Job</li>
                </NavLink>

                <NavLink to='/myPostedJob'>
                    <li className='my-4 border-b border-slate-700 hover:bg-slate-600 hover:rounded'>My Posted Job</li>
                </NavLink>

                <NavLink to='/myBids'>
                    <li className='my-4 border-b border-slate-700 hover:bg-slate-600 hover:rounded'>My Bids</li>
                </NavLink>

                <NavLink to='/bidRequest'>
                    <li className='my-4 border-b border-slate-700 hover:bg-slate-600 hover:rounded'> Bid Request</li>
                </NavLink>

            </ul>
        </div>
    );

    const userProfile = (
        <div>
            <div className="dropdown dropdown-end rounded-full ">
                <label tabIndex={0}><div className="avatar">
                    <div className="w-10 h-10  cursor-pointer  rounded-full">
                        <img className='w-full h-full' src={user?.photoURL} />
                    </div>
                </div></label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-slate-600 rounded-box w-52">
                    <div className='text-center'>
                        <h1 className=''>{user?.displayName}</h1>
                        <h1 className=''>{user?.email}</h1>
                    </div>
                    <div>
                        <button onClick={() => (logout())} className='text-center block w-full bg-slate-500 text-white hover:bg-slate-400 mt-4 btn-sm btn'>Logout</button>
                    </div>
                </ul>
            </div>
        </div>
    );



    return (
        <div>
            <nav>
                <div className='flex h-[10vh] items-center justify-between z-50 lg:py-5 px-10 py-4 flex-1 bg-slate-900 text-white'>
                    <div className='flex items-center flex-1'>
                        <Link to={'/'}>
                            <span className='text-3xl font-bold'>Iber</span>
                        </Link>
                    </div>

                    <div className='lg:flex md:flex lg:flex-1 md:flex-1 items-center justify-end'>

                        <div className='flex-1'>
                            <ul className='hidden md:flex gap-8 mr-16 text-[18px] text-slate-400'>
                                <li className=" md:my-0">
                                    <NavLink to={'/'} className={({ isActive, isPending }) =>
                                        isActive
                                            ? "text-sm text-white underline duration-500"
                                            : isPending
                                                ? "pending"
                                                : ""

                                    }>
                                        HOME
                                    </NavLink>
                                </li>

                                <li className=" md:my-0">
                                    <NavLink to={'/addJob'} className={({ isActive, isPending }) =>
                                        isActive
                                            ? "text-sm text-white underline duration-500"
                                            : isPending
                                                ? "pending"
                                                : ""

                                    }>
                                        Add Job
                                    </NavLink>
                                </li>

                                <li className=" md:my-0">
                                    <NavLink to={'/myPostedJob'} className={({ isActive, isPending }) =>
                                        isActive
                                            ? "text-sm text-white underline duration-500"
                                            : isPending
                                                ? "pending"
                                                : ""

                                    }>
                                        My Posted Job
                                    </NavLink>
                                </li>

                                <li className=" md:my-0">
                                    <NavLink to={'/myBids'} className={({ isActive, isPending }) =>
                                        isActive
                                            ? "text-sm text-white underline duration-500"
                                            : isPending
                                                ? "pending"
                                                : ""

                                    }>
                                        My Bids
                                    </NavLink>
                                </li>

                                <li className=" md:my-0">
                                    <NavLink to={'/bidRequest'} className={({ isActive, isPending }) =>
                                        isActive
                                            ? "text-sm text-white underline duration-500"
                                            : isPending
                                                ? "pending"
                                                : ""

                                    }>
                                        Bid Request
                                    </NavLink>
                                </li>

                            </ul>
                        </div>

                        <div>{click && listItems}</div>
                    </div>
                    <div>
                        {
                            user?.email ? <span>{userProfile}</span> : <NavLink to={'/login'}> Login</NavLink>
                        }
                    </div>
                    <div>
                        <button className='text-5xl ml-10 block sm:hidden transition' onClick={handleClick}>
                            {click ? <span><AiFillCloseCircle></AiFillCloseCircle></span> : <span><FiMenu></FiMenu></span>}
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;