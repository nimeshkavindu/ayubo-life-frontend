import { BellIcon, CogIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const notifications = 5; 
  return (
    <header className="flex justify-between items-center p-5 bg-white shadow-sm">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 absolute right-3 top-2.5" />
      </div>
    <div className="flex items-center space-x-5">
      {/* Notification with Date */}
    <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full">
      <BellIcon className="h-5 w-5 text-gray-600" />
      <span className="text-gray-700 text-sm">{new Date().toDateString()}</span>
      {notifications > 0 && (
        <span className="bg-pink-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">
        {notifications}
        </span>
      )}
    </div>

        {/* Settings Icon */}
        <CogIcon className="h-6 w-6 text-gray-600" />
        <div className="h-10 w-10 rounded-full bg-gray-300"></div>
      </div>
      
    </header>
  );
};

export default Header;
