import React, { useEffect, useState } from 'react';
import axios from "axios";

const Servicer = () => {
    const [servicer, setServicer] = useState([]);

    useEffect(() => {
        const getServicer = async () => {
            try {
                const res = await axios.get("http://localhost:3001/servicer");
                console.log(res.data);
                setServicer(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getServicer();
    }, []);

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-md rounded p-6 w-full max-w-4xl">
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Our Servicers</h1>
                <p className="text-gray-600 mb-8 text-center">Here are our servicers</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {servicer.map((item) => (
                        <div key={item.id} className="border border-gray-200 p-4 rounded-lg flex flex-col items-center">
                            <img
                                src={item.image}
                                alt={item.service}
                                className="w-32 h-32 object-cover mb-4 rounded-full"
                            />
                            <div className="text-center">
                                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                                <p className="text-gray-500 mb-2">{item.service}</p>
                                <p className="text-gray-700">{item.contact}</p>
                                <p className="text-gray-700">{item.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Servicer;

