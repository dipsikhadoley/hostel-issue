import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Complaint = () => {
    const [complaints, setComplaints] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        roomNumber: '',
        contact: '',
        issueType: '',
        issue: '',
        status: 'Pending',
        resolution: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const issueInfo = {
            name: formData.name,
            roomNumber: formData.roomNumber,
            contact: formData.contact,
            issueType: formData.issueType,
            issue: formData.issue
        };

        try {
            const res = await axios.post("http://localhost:3001/issue", issueInfo);
            console.log(res.data);
            if (res.data) {
                toast.success('Issue reported successfully');
                setComplaints([...complaints, issueInfo]);
                setFormData({
                    name: '',
                    roomNumber: '',
                    contact: '',
                    issueType: '',
                    issue: '',
                    status: 'Pending',
                    resolution: ''
                });
                navigate('/');
            }
        } catch (err) {
            if (err.response) {
                console.log('Error response:', err.response);
                alert(`Error: ${err.response.data.message || 'Something went wrong'}`);
            } else {
                console.log(err);
                toast.error('"Error: " + err.response.data.message');
            }
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4 flex flex-col items-center justify-center">
            <div className="bg-white shadow-md rounded p-6 w-full max-w-xl">
                <h1 className="text-3xl font-bold mb-6 text-blue-600 text-center">Report a Hostel Issue</h1>
                <form onSubmit={handleSubmit} className="mb-8">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Contact</label>
                        <input
                            type="text"
                            name="contact"
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
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>

                <ul className="divide-y divide-gray-200">
                    {complaints.map((complaint, index) => (
                        <li key={index} className="py-4">
                            <p className="text-sm font-medium text-gray-900">Name: {complaint.name}</p>
                            <p className="text-sm text-gray-500">Room Number: {complaint.roomNumber}</p>
                            <p className="text-sm text-gray-700">Issue Type: {complaint.issueType}</p>
                            <p className="text-sm text-gray-700">Issue: {complaint.issue}</p>
                            <p className="text-sm text-gray-700">Status: {complaint.status}</p>
                            <p className="text-sm text-gray-700">Resolution: {complaint.resolution}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Complaint;



