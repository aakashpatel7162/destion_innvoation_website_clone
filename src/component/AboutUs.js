import React from "react";
import data from "../constant/constant";
export default function AboutUs() {
  const { aboutUsPage } = data;
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        At <strong>{data.destion_invotion}</strong>
      </p>
      <p className="mb-4">{aboutUsPage.heading}</p>
      <p className="mb-4">{aboutUsPage.heading2}</p>
      <div>
        {aboutUsPage.headings.map((heading, index) => (
          <h2 key={index} className="text-2xl font-semibold mt-6">
            {heading}
          </h2>
        ))}
      </div>
      <p>{aboutUsPage.findUs}</p>
    </div>
  );
}
