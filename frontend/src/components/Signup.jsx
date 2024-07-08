import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Pages/Login';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast"

const Signup = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };

        try {
            const res = await axios.post("http://localhost:3001/user/signup", userInfo);
            console.log(res.data);
            if (res.data) {
                toast.success('Signup successful');
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

    const openLogin = () => {
        setIsLoginOpen(true);
    };

    const closeLogin = () => {
        setIsLoginOpen(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                <h3 className="text-2xl font-semibold mb-6 text-center">Signup</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Link to="/" className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>X</Link>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
                            Name
                        </label>
                        <input
                            id="fullname"
                            type="text"
                            placeholder="Enter your fullname"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...register("fullname", { required: true })}
                        />
                        {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
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
                            Signup
                        </button>
                        <button
                            type="button"
                            className="text-blue-600 hover:underline"
                            onClick={openLogin}
                        >
                            Have Account? Login
                        </button>
                    </div>
                </form>
            </div>
            {isLoginOpen && <Login onClose={closeLogin} />}
        </div>
    );
};

export default Signup;







