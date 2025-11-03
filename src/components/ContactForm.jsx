import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        alert("Thank you for your message!");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="grid md:grid-cols-2 gap-8">

            {/* Contact Information */}
            <div className="text-xl grid justify-center items-center gap-4">
                <div className="text-white">
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-200 mb-8 underline underline-offset-4">
                        contact@example.com
                    </div>
                    <div className="font-semibold">Phone</div>
                    <Link
                        to="0739 123 123"
                        className="text-gray-200 underline underline-offset-4"
                    >
                        +46 739 123 123
                    </Link>
                </div>
            </div>

            

            <div
                className="w-md space-y-8 rounded-2xl p-8 bg-slate "
               
            >
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        Contact Us
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-200">
                        We'd love to hear from you
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="name" className="sr-only">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  sm:text-sm"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="4"
                                className="relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
