import React, { useState } from "react";
import {
    AiOutlineCaretDown,
    AiOutlineCaretUp,
    AiOutlineMenu,
    AiOutlineClose,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import list from "../list.json";
import Login from "../Pages/Login";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginModalOpen] = useState(false);

    const handleLoginClick = () => {
        setIsLoginModalOpen(true);
    };

    const handleClose = () => {
        setIsLoginModalOpen(false);
    };

    return (
        <nav className="bg-yellow-500 p-4 shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white text-xl font-bold">
                    <Link to="/" className="hover:text-gray-300 transition duration-300">
                        Hostel Services
                    </Link>
                </div>
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="text-white focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <AiOutlineClose size={24} />
                        ) : (
                            <AiOutlineMenu size={24} />
                        )}
                    </button>
                </div>
                <div className={`${isMenuOpen ? "block" : "hidden"} lg:flex lg:items-center lg:space-x-6`}>
                    <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 space-y-2 lg:space-y-0">
                        <li>
                            <Link
                                to="/"
                                className="text-white hover:text-gray-300 transition duration-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="relative">
                            <button
                                onClick={() => setIsOpen((prev) => !prev)}
                                className="text-white hover:text-gray-300 transition duration-300 flex items-center"
                            >
                                Hostels
                                {!isOpen ? (
                                    <AiOutlineCaretDown className="ml-1" />
                                ) : (
                                    <AiOutlineCaretUp className="ml-1" />
                                )}
                            </button>
                            {isOpen && (
                                <div className="absolute bg-white shadow-lg rounded-md py-2 mt-2 w-full lg:w-48 z-50">
                                    {list.map((item, i) => (
                                        <Link
                                            to={item.path}
                                            key={i}
                                            className="block px-4 py-2 hover:bg-gray-100"
                                            onClick={()=>setIsOpen(false)}
                                        >
                                            <h3 className="text-gray-800">{item.hostel}</h3>
                                            <h4 className="text-gray-600">{item.identity}</h4>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                        <li>
                            <Link
                                to="/complaint"
                                className="text-white hover:text-gray-300 transition duration-300"
                            >
                                Complaint
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/service"
                                className="text-white hover:text-gray-300 transition duration-300"
                            >
                                Service Update
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicer"
                                className="text-white hover:text-gray-300 transition duration-300"
                            >
                                Servicer
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleLoginClick}
                                className="text-white hover:text-gray-300 transition duration-300"
                            >
                                Login
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {isLoginOpen && <Login isOpen={isLoginOpen} onClose={handleClose} />}
        </nav>
    );
};

export default Nav;




