"use client";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Image from "next/image";
import { useState } from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface Challenge {
    name: string;
    id: string;
    participants: number;
    distance: string;
    steps: string;
    startDate: string;
    startTime: string;
    endDate: string;
    status: "Active" | "Inactive";
    
}

const challenges: Challenge[] = [
    {
        name: "Colombo Fitness Challenge",
        id: "Ch-101",
        participants: 250,
        distance: "150 km",
        steps: "1,500,000",
        startDate: "2023-07-01",
        startTime: "06:00 am",
        endDate: "2023-09-01",
        status: "Inactive",
        
    },
    {
        name: "Wellness Week 2023",
        id: "Ch-102",
        participants: 120,
        distance: "80 km",
        steps: "1,000,000",
        startDate: "2023-09-10",
        startTime: "08:00 am",
        endDate: "2023-09-17",
        status: "Inactive",
        
    },
    {
        name: "Annual City Run",
        id: "Ch-103",
        participants: 400,
        distance: "50 km",
        steps: "1,800,000",
        startDate: "2023-10-05",
        startTime: "05:00 am",
        endDate: "2023-10-05",
        status: "Inactive",
       
    },
];

const ActiveChallengesPage = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 p-6 overflow-auto">
                <Header />

                {/* Search and Header */}
                <div className="flex justify-between items-center mt-6">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600">
                        Export CSV
                    </button>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search Challenges"
                            className="w-80 px-4 py-2 border rounded-full shadow focus:outline-none"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 absolute right-3 top-2.5" />
                    </div>
                </div>

                {/* Challenges Section */}
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold mb-4">Ongoing Challenges</h2>
                    <div className="flex space-x-4 mb-4 text-gray-600">
                        <span>Challenges:</span>
                        <a href="#" className="text-blue-500">All</a>
                        <span className="mx-4 text-gray-400">|</span>
                        <a href="#" className="text-blue-500">Ongoing</a>
                        <span className="mx-4 text-gray-400">|</span>
                        <a href="#" className="text-gray-500">Disabled</a>
                        <span className="mx-4 text-gray-400">|</span>
                        <a href="#" className="text-gray-500">Trash</a>
                    </div>

                    {/* Table */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <table className="min-w-full text-sm text-gray-700">
                            <thead className="bg-gray-100 text-gray-700">
                                <tr>
                                    <th className="px-4 py-2 text-left">Challenge Name</th>
                                    <th className="px-4 py-2">ChgID</th>
                                    <th className="px-4 py-2">Participants</th>
                                    <th className="px-4 py-2">Distance</th>
                                    <th className="px-4 py-2">Steps Target</th>
                                    <th className="px-4 py-2">Start Date</th>
                                    <th className="px-4 py-2">Start Time</th>
                                    <th className="px-4 py-2">End Date</th>
                                    <th className="px-4 py-2">Status</th>   
                                </tr>
                            </thead>
                            <tbody>
                                {challenges.map((challenge, index) => (
                                    <tr
                                        key={index}
                                        className={`border-t ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                                    >
                                        <td className="px-4 py-2">
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src="/images/challenge-icon.png"
                                                    alt="Challenge Icon"
                                                    width={30}
                                                    height={30}
                                                    className="rounded-md"
                                                />
                                                {challenge.name}
                                            </div>
                                        </td>
                                        <td className="px-4 py-2">{challenge.id}</td>
                                        <td className="px-4 py-2">{challenge.participants}</td>
                                        <td className="px-4 py-2">{challenge.distance}</td>
                                        <td className="px-4 py-2">{challenge.steps}</td>
                                        <td className="px-4 py-2">{challenge.startDate}</td>
                                        <td className="px-4 py-2">{challenge.startTime}</td>
                                        <td className="px-4 py-2">{challenge.endDate}</td>
                                        <td className="px-4 py-2 text-red-500">{challenge.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActiveChallengesPage;
