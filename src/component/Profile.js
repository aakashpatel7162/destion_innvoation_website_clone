import React from "react";

export default function Profile() {
  const userInfo = {
    fullName: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    bio: "Software developer with a passion for technology.",
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Profile Information</h1>
      <div className="mb-4">
        <strong>Full Name:</strong> {userInfo.fullName}
      </div>
      <div className="mb-4">
        <strong>Username:</strong> {userInfo.username}
      </div>
      <div className="mb-4">
        <strong>Email:</strong> {userInfo.email}
      </div>
      <div className="mb-4">
        <strong>Phone Number:</strong> {userInfo.phone}
      </div>
      <div className="mb-4">
        <strong>Bio:</strong> {userInfo.bio}
      </div>
    </div>
  );
}
