import React from 'react';
import { InformationCircleIcon, CogIcon, BriefcaseIcon } from '@heroicons/react/solid';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-auto">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <InformationCircleIcon className="h-6 w-6" />
                    <span>About Us</span>
                </div>
                <div className="flex items-center space-x-4">
                    <CogIcon className="h-6 w-6" />
                    <span>Settings</span>
                </div>
                <div className="flex items-center space-x-4">
                    <BriefcaseIcon className="h-6 w-6" />
                    <span>Careers</span>
                </div>
                <div>
                    <p>&copy; {new Date().getFullYear()} Destion Innovations</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
