"use client";

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Table from '../components/Table';
import Image from 'next/image';

// Define types for data
interface Organization {
  name: string;
  members: number;
  challenges: number;
  steps: number;
  startDate: string;
  status: 'Active' | 'Inactive';
}

interface Challenge {
    name: string;
    distance: string;
    startTime: string;
    mapUrl: string;
    location: string;
    activityType: string;
    date: string;
    description: string;
  }
  

interface Notification {
  id: number;
  message: string;
}

// Sample Data
const organizations: Organization[] = [
  { name: 'FitPro Club', members: 150, challenges: 5, steps: 1500000, startDate: '15/03/2025', status: 'Active' },
  { name: 'Wellness Warriors', members: 80, challenges: 3, steps: 900000, startDate: '09/03/2025', status: 'Active' },
  { name: 'Healthy Hustlers', members: 45, challenges: 7, steps: 450000, startDate: '26/02/2025', status: 'Inactive' },
  { name: 'Step Titans', members: 120, challenges: 2, steps: 1200000, startDate: '20/02/2025', status: 'Active' },
  { name: 'Corporate Climbers', members: 110, challenges: 4, steps: 600000, startDate: '14/02/2025', status: 'Active' },
  { name: 'Energetic Striders', members: 70, challenges: 9, steps: 1400000, startDate: '10/02/2025', status: 'Inactive' },
];

const challenges: Challenge[] = [
    {
      name: 'Weekend Running',
      distance: '100 km',
      startTime: '08:00 am',
      mapUrl: '/images/map.png',
      location: 'Taj Samudra Colombo',
      activityType: 'Running',
      date: 'Sat 20, 2024',
      description:
        "Join our exciting Weekend Running Challenge. This challenge is a great opportunity to push your limits and enjoy a weekend of active fun. Don't miss out — register now and make every step count!",
    },
  ];
  

const notifications: Notification[] = [
  { id: 1, message: 'John Doe has requested an upgrade from Basic Plan to Premium Plan.' },
  { id: 2, message: 'A new demo request has been received from Sarah Johnson.' },
  { id: 3, message: 'Emily Brown has suggested a new FAQ entry.' },
  { id: 4, message: 'A new subscription has been made to the Pro Plan pricing plan.' },
];

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">
      <Header />
      <div className="mt-6">
        <h1 className="text-3xl font-bold text-gray-800">ayubo.life</h1>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

       {/* Organizations & Notifications Section */}
      <div className="mt-6 flex flex-col md:flex-row gap-6">
      {/* Organizations Table (Left) */}
      <div className="flex-1 bg-white p-5 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">Latest Organizations</h2>
        <Table
        columns={['Organization Name', 'Members', 'Challenges', 'Steps', 'Start Date', 'Status']}
        rows={organizations}
        />
      </div>

        {/* Right Side: Start Challenge Button & Notifications */}
        <div className="w-full md:w-80 flex flex-col gap-4 self-start">
            {/* Start a New Challenge Button */}
            <button className="bg-blue-200 text-blue-700 px-4 py-2 rounded-full shadow-md hover:bg-blue-300 flex items-center justify-center gap-2">
              Start a New Challenge
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>

            {/* Notifications */}
            <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-md font-semibold mb-3">This week</h2>
            <h3 className="text-lg font-bold text-gray-800">Notification</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
                {notifications.map((notification) => (
                <li key={notification.id} className="flex flex-col gap-1 border-b pb-2 last:border-none">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                    <p className="whitespace-normal">{notification.message}</p>
                </li>
                ))}
            </ul>
            </div>
        </div>
        </div>
        <div className="mt-6 flex flex-col md:flex-row gap-6">
            {/* Challenges Section */}
            <div className="flex-[7] bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">Challenges</h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Left Side - Text Details */}
                <div className="flex-1">
                <p className="text-gray-600">🏨 {challenges[0].location}</p>
                <p className="text-gray-600">🏃 {challenges[0].activityType} • {challenges[0].date}</p>
                <span className="text-gray-500">|</span>
                <h3 className="text-md font-semibold text-gray-800">{challenges[0].name}</h3>
                <p className="text-gray-600 mt-2">{challenges[0].description}</p>
                <div className="flex items-center gap-4 mt-3">
                    <div>
                    <p className="font-bold text-gray-800">{challenges[0].distance}</p>
                    <p className="text-gray-600">Distance</p>
                    </div>
                    <span className="text-gray-500">|</span>
                    <div>
                    <p className="font-bold text-gray-800">{challenges[0].startTime}</p>
                    <p className="text-gray-600">Starting Time</p>
                    </div>
                </div>
                </div>

                {/* Right Side - Map Image */}
                <div className="relative w-48 h-32">
                <Image
                    src={challenges[0].mapUrl}
                    alt="Challenge Map"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
                </div>
            </div>
            </div>

            {/* Downloads Overview Section */}
            <div className="flex-[3] bg-white p-6 rounded-lg shadow relative">
            <h2 className="text-sm font-semibold text-gray-600 mb-1">This week</h2>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Downloads Overview</h3>

            <div className="flex flex-col md:flex-row gap-4 items-center relative">
                {/* Left Section - Total Downloads */}
                <div className="bg-blue-50 p-3 rounded-lg flex flex-col z-10 h-full">
                <span className="text-blue-500 text-sm font-semibold">5.5%</span>
                <p className="text-gray-700 font-semibold mt-1">Total Downloads</p>
                <p className="text-xl font-bold text-gray-800">80%</p>
                </div>

                {/* Center - Phone Image */}
                <div className="absolute inset-0 flex justify-center items-center z-20 pl-4" style={{ top: '40%', right: '20%' }}>
                <div className="relative w-32 h-64">
                    <Image
                    src="/images/phone-mockup.png" 
                    alt="Phone Mockup"
                    layout="fill"
                    objectFit="contain"
                    />
                </div>
                </div>

                {/* Right Section - App Store Stats */}
                <div className="flex flex-col gap-2 z-10 text-right">
                {/* Google Play */}
                <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-gray-600">Google Play</p>
                    <p className="text-xl font-bold text-gray-800">50%</p>
                    <p className="text-xs text-gray-500">5% from last week</p>
                </div>

                {/* Apple Store */}
                <div className="bg-gray-800 p-3 rounded-lg text-white">
                    <p>Apple Store</p>
                    <p className="text-xl font-bold">30%</p>
                    <p className="text-xs">0.5% from last week</p>
                </div>
                </div>
            </div>
            </div>
        </div>


        </div>
      </div>
    </div>

    
  );
};

export default Dashboard;
