import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { RxDotFilled } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';


const images = [
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Tagore_Hostel_MNNIT.jpg"
    },
    {
        img: "https://qph.cf2.quoracdn.net/main-qimg-1048c578ca3c61fa0be7e769fec9126f-lq"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyT2GUnjwM2zNbdAsRxOSTL30mZEAatSegw&s"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJSqiYcbdfQ4zmWo6eQszareL_SaXXnAhGIPfewASPb3kR00ZwOBxjQRyTZ5GfbPsGClY&usqp=CAU"
    }
];

const Home = () => {
    const navigate = useNavigate()
    const [currImag, setCurrImag] = useState(0);


    const prevImage = () => {
        const isFirstImag = currImag === 0;
        const newImag = isFirstImag ? images.length - 1 : currImag - 1;
        setCurrImag(newImag);
    };

    const nextImage = () => {
        const isLastImag = currImag === images.length - 1;
        const newImag = isLastImag ? 0 : currImag + 1;
        setCurrImag(newImag);
    };

    return (
        <div className="relative min-h-screen pb-24 bg-gray-100">
            <div className="relative w-full h-80 sm:h-96 mb-8">
                <div
                    style={{ backgroundImage: `url(${images[currImag].img})` }}
                    className="w-full h-full bg-cover bg-center rounded-lg shadow-lg"
                ></div>
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                    <button onClick={prevImage} className="p-2 bg-blue-600 text-white rounded-full shadow-lg">
                        <FaArrowLeft size={30} />
                    </button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                    <button onClick={nextImage} className="p-2 bg-blue-600 text-white rounded-full shadow-lg">
                        <FaArrowRight size={30} />
                    </button>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrImag(index)}
                            className={`p-1 rounded-full ${index === currImag ? 'text-blue-600' : 'text-gray-400'}`}
                        >
                            <RxDotFilled size={20} />
                        </button>
                    ))}
                </div>
            </div>
            <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-5xl font-bold text-blue-600 mb-4">Welcome to MNNIT Hostels Service</h1>
                <p className="text-lg sm:text-xl text-gray-700">
                    Here you can lodge complaints about your hostel issues easily and efficiently.
                </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">Why Choose Us?</h2>
                <p className="text-gray-700 mb-4">
                    We provide a seamless platform for students to report and track issues in their hostels. Our aim is to ensure a comfortable and hassle-free stay for all students.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Quick and easy issue reporting</li>
                    <li>Track the status of your complaints</li>
                    <li>Get timely updates and resolutions</li>
                    <li>Support for a wide range of issues</li>
                </ul>
            </div>
            <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">Register a complaint</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg cursor-pointer" onClick={()=>navigate('/complaint')}>
                        <h3 className="text-lg font-bold text-blue-600 mb-2">Electrical Issues</h3>
                        <p className="text-gray-700">Report issues related to fans, lights, and other electrical appliances.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg cursor-pointer" onClick={()=>navigate('/complaint')}>
                        <h3 className="text-lg font-bold text-blue-600 mb-2">Plumbing Issues</h3>
                        <p className="text-gray-700">Report issues related to water supply, drainage, and other plumbing problems.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg cursor-pointer " onClick={()=>navigate('/complaint')}>
                        <h3 className="text-lg font-bold text-blue-600 mb-2">Cleaning Issues</h3>
                        <p className="text-gray-700">Report issues related to cleanliness and sanitation of your hostel area.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg cursor-pointer" onClick={()=>navigate('/complaint')}>
                        <h3 className="text-lg font-bold text-blue-600 mb-2">Furniture Issues</h3>
                        <p className="text-gray-700">Report issues related to damaged or missing furniture in your hostel room.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;





