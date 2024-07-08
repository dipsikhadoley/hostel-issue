import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6 mt-8">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
                <div className="lg:flex-1">
                    <h1 className="text-lg font-bold mb-2">Hostels</h1>
                    <p>&copy; 2024 MNNIT</p>
                </div>
                <div className="flex flex-wrap justify-between w-full lg:w-auto space-x-4 gap-4">
                    <div>
                        <h1 className="text-lg font-bold mb-2">About</h1>
                        <ul className="space-y-1">
                            <li>Our Mission</li>
                            <li>Our Team</li>
                            <li>History</li>
                            <li>News</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold mb-2">Services</h1>
                        <ul className="space-y-1">
                            <li>Issue Reporting</li>
                            <li>Track Complaints</li>
                            <li>Maintenance</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold mb-2">Contact</h1>
                        <ul className="space-y-1">
                            <li>Email Us</li>
                            <li>Call Us</li>
                            <li>Visit Us</li>
                            <li>Feedback</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold mb-2">More Info</h1>
                        <ul className="space-y-1">
                            <li>FAQs</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Site Map</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;










