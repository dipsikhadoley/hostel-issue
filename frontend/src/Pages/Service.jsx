import React, { useState } from 'react';
import Hostels from './Hostels';

const Service = ({ index, onUpdate }) => {
    const [updateData, setUpdateData] = useState({
        status: '',
        resolution: ''
    });

    const handleChange = (e) => {
        setUpdateData({
            ...updateData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(index, updateData);
        setUpdateData({ status: '', resolution: '' });
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4 flex items-center justify-center">
            <div className="bg-white shadow-md rounded p-6 w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Service Update</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            name="name"
                            value={updateData.Name}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            required
                        ></input>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Hostels</label>
                        <input
                            name="name"
                            value={updateData.Hostels}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            required
                        ></input>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Room no</label>
                        <input
                            name="number"
                            value={updateData.Roomno}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            required
                        ></input>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                            name="status"
                            value={updateData.status}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            required
                        >
                            <option value="">Select Status</option>
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Resolved">Resolved</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Resolution</label>
                        <textarea
                            name="resolution"
                            value={updateData.resolution}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Service;


