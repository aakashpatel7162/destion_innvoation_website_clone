import React from "react";
import data from "../constant/constant";
export default function DashBoard() {
  const { dashBoardUsPage } = data;
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">{dashBoardUsPage.welcomeMess}</p>

      <h2 className="text-2xl font-semibold mt-6">Key Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold">Total Users</h3>
          <p className="text-2xl">1,500</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold">Active Sessions</h3>
          <p className="text-2xl">300</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold">Total Revenue</h3>
          <p className="text-2xl">$50,000</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold">Pending Requests</h3>
          <p className="text-2xl">25</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6">Recent Activity</h2>
      <ul className="mt-4">
        <li className="border-b py-2">User John Doe signed up.</li>
        <li className="border-b py-2">User Jane Smith made a purchase.</li>
        <li className="border-b py-2">
          User Mark Wilson updated their profile.
        </li>
      </ul>
    </div>
  );
}
