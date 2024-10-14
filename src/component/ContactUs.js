import React from 'react';

export default function ContactUs() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your message"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
