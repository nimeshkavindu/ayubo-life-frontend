import { HomeIcon, UsersIcon, TrophyIcon, StarIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Sidebar = () => {
  const [showOrgSubmenu, setShowOrgSubmenu] = useState(false);
  const [showChallengesSubmenu, setShowChallengesSubmenu] = useState(false);

  return (
    <aside className="w-64 bg-white h-screen p-5 border-r">
      {/* Logo and Title */}
      <div className="flex flex-col items-center mb-10">
        <img src="/images/logo.png" alt="Logo" className="h-10 w-auto mb-2" />
        <span className="text-xl font-amelaryas text-gray-700">ayubo.life</span>
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul>
          <li className="mb-5 flex items-center space-x-2">
            <HomeIcon className="h-5 w-5 text-gray-500" />
            <a href="/dashboard" className="text-gray-700">Dashboard</a>
          </li>

          {/* Organizations with Sub-menu */}
          <li className="mb-5">
            <div 
              className="flex items-center justify-between space-x-2 cursor-pointer text-gray-700"
              onClick={() => setShowOrgSubmenu(!showOrgSubmenu)}
            >
              <div className="flex items-center space-x-2">
                <UsersIcon className="h-5 w-5 text-gray-500" />
                <span>Organizations</span>
              </div>
              <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform ${showOrgSubmenu ? 'rotate-180' : ''}`} />
            </div>

            {/* Submenu */}
            {showOrgSubmenu && (
              <ul className="mt-2 ml-6 space-y-2 text-gray-600 text-sm">
                <li className="hover:text-gray-800">• All Organizations</li>
                <li className="hover:text-gray-800">• New Organizations</li>
                <li className="hover:text-gray-800">• Active Organizations</li>
                <li className="hover:text-gray-800">• Inactive Organizations</li>
              </ul>
            )}
          </li>

            {/* Challenges with Sub-menu */}
            <li className="mb-5">
            <div 
              className="flex items-center justify-between space-x-2 cursor-pointer text-gray-700"
              onClick={() => setShowChallengesSubmenu(!showChallengesSubmenu)}
            >
              <div className="flex items-center space-x-2">
              <TrophyIcon className="h-5 w-5 text-gray-500" />
              <span>Challenges</span>
              </div>
              <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform ${showChallengesSubmenu ? 'rotate-180' : ''}`} />
            </div>

            {/* Submenu */}
            {showChallengesSubmenu && (
              <ul className="mt-2 ml-6 space-y-2 text-gray-600 text-sm">
              
              <li className="hover:text-gray-800">
                <a href="/challenges/active">• Active Challenges</a>
              </li>
              <li className="hover:text-gray-800">
                <a href="/challenges/active">• Disable Challenges</a>
              </li>
              </ul>
            )}
            </li>
          <li className="flex items-center space-x-2">
            <StarIcon className="h-5 w-5 text-gray-500" />
            <a href="#" className="text-gray-700">Reviews</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
