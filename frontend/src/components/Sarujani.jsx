import React, { useState } from 'react'

const Sarujani = () => {
    const [complaints, setComplaints] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        roomNumber: '',
        issue: '',
        status: 'Pending',
        resolution: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setComplaints([...complaints, formData]);
        setFormData({ name: '', roomNumber: '', issue: '', status: 'Pending', resolution: '' });
    };

    const handleUpdate = (index, updatedData) => {
        const updatedComplaints = complaints.map((complaint, i) =>
            i === index ? { ...complaint, ...updatedData } : complaint
        );
        setComplaints(updatedComplaints);
    };
    return (
        <div>
            <div className="max-w-xl mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Sarujani Naidu Hostel Issue</h1>
                <form onSubmit={handleSubmit} className="mb-8">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Room Number</label>
                        <input
                            type="text"
                            name="roomNumber"
                            value={formData.roomNumber}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Contact</label>
                        <input
                            type="number"
                            name="contactnumber"
                            value={formData.contact}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Issue Type</label>
                        <select
                            name="issueType"
                            value={formData.issueType}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        >
                            <option value="">Select Issue Type</option>
                            <option value="Electricity">Electricity</option>
                            <option value="Plumbing">Plumbing</option>
                            <option value="Cleaning">Cleaning</option>
                            <option value="Maintenance">Maintenance</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Issue</label>
                        <textarea
                            name="issue"
                            value={formData.issue}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </form>


                <ul className="divide-y divide-gray-200">
                    {complaints.map((complaint, index) => (
                        <li key={index} className="py-4">
                            <p className="text-sm font-medium text-gray-900">Name: {complaint.name}</p>
                            <p className="text-sm text-gray-500">Room Number: {complaint.roomNumber}</p>
                            <p className="text-sm text-gray-700">Issue: {complaint.issue}</p>
                            <p className="text-sm text-gray-700">Status: {complaint.status}</p>
                            <p className="text-sm text-gray-700">Resolution: {complaint.resolution}</p>
                            <ComplaintUpdateForm index={index} onUpdate={handleUpdate} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sarujani
