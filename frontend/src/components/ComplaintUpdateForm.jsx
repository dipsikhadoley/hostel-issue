import React, { useState } from 'react';

const ComplaintUpdateForm = ({ index, onUpdate }) => {
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
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                    name="status"
                    value={updateData.status}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Update
            </button>
        </form>
    );
};

export default ComplaintUpdateForm;
