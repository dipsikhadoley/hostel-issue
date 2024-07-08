import React from 'react';
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import toast from "react-hot-toast"

const Login = ({ isOpen, onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    if (!isOpen) return null;

    const onSubmit = async (data) => {
        const userInfo = {

            email: data.email,
            password: data.password,
        };

        try {
            const res = await axios.post("http://localhost:3001/user/login", userInfo);
            console.log(res.data);
            if (res.data) {

                toast.success('Login successful');
                navigate('/');
            }
            localStorage.setItem("User", JSON.stringify(res.data.user));
        } catch (err) {
            if (err.response) {
                console.log('Error response:', err.response);
                alert(`Error: ${err.response.data.message || 'Something went wrong'}`);
            } else {
                if (err.response) {
                    console.log(err)
                }

                toast.error('"Error: " + err.response.data.message');
            }
        }
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-white rounded-lg shadow-lg w-96 p-6 z-10">
                <button
                    className="absolute top-2 right-2 text-black-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <IoClose />
                </button>
                <h3 className="text-2xl font-semibold mb-6 text-center">Login</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Login
                        </button  >

                        <button
                            type="submit"
                            onClick="handleLogin"

                        >
                            Not registered?
                            <Link to="/signup" className='text-blue-600'>Signup</Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
