import { Globe, Home, Wallet, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dock = ({ activeTab = 'home', onTabChange }) => {
  const tabs = [
    { id: 'explore', icon: Globe, label: 'Explore' },
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'wallet', icon: Wallet, label: 'Wallet' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md">
      <nav className="flex items-center justify-around bg-white rounded-full px-2 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <Link to="/manage-wallets"
              key={tab.id}
              onClick={() => onTabChange?.(tab.id)}
              aria-label={tab.label}
              className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-[#1A1A1A] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.2 : 1.8} />
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Dock;