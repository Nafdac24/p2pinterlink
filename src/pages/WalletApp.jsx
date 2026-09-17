import { useState } from 'react';
import { User } from 'lucide-react';

import appLogo from '../assets/logo-square.png';
import mastercardLogo from '../assets/googleinter.jpg';
import coins3d from '../assets/coin.jpg';
import goldCoin from '../assets/coininter.jpg';
import humanNetwork from '../assets/mine.jpg';
import verifiedCoins from '../assets/verified.jpg';
import Dock from '../components/Dock';
import { Link } from 'react-router-dom';

const WalletApp = () => {
  const [activeTab, setActiveTab] = useState('app'); // For the top App/Wallet toggle
  const [activeDock, setActiveDock] = useState('home'); // For the bottom dock

  return (
    <div className="min-h-screen w-full bg-[#FCFBFF] flex justify-center px-4">
      {/* Centered Phone Container */}
      <div className="w-full max-w-lg bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-100 px-5 py-6 pb-32">
        
        {/* --- Top Bar --- */}
        <div className="flex items-center justify-between mb-8">
          {/* Logo */}
            <img src={appLogo} alt="App logo" className="w-6 h-6 object-contain" />
          {/* App / Wallet Toggle */}
          <div className="flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActiveTab('app')}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === 'app'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500'
              }`}
            >
              App
            </button>
            <Link to="/manage-wallets"
              onClick={() => setActiveTab('wallet')}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === 'wallet'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500'
              }`}
            >
              Wallet
            </Link>
          </div>

          {/* Profile Icon */}
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 hover:bg-gray-200 transition">
            <User size={18} className="text-gray-500" />
          </button>
        </div>

        {/* --- Greeting --- */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Good Morning!
        </h1>

        {/* --- Mastercard / Interlink Labs Card --- */}
        <div className="bg-[#F5F5F7] rounded-2xl overflow-hidden mb-4">
          <img
            src={mastercardLogo}
            alt="Mastercard"
            className="object-contain"
          />
        </div>

        {/* --- Two Stat Cards --- */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Card 1: 20 ITLG */}
          <div className="bg-[#F5F5F7] rounded-2xl overflow-hidden">
           
            <img
              src={coins3d}
              alt="ITLG coins"
              className="object-contain"
            />
          </div>

          {/* Card 2: 0 Recoverable */}
          <div className="bg-[#EEF0FB] rounded-2xl overflow-hidden">
            <img
              src={goldCoin}
              alt="Gold coin"
              className="object-contain"
            />
          </div>
        </div>

        {/* --- Mine $ITLG Card --- */}
        <div className="bg-[#F5F5F7] rounded-2xl overflow-hidden mb-4">
          <img
            src={humanNetwork}
            alt="Human network"
            className="object-contain"
          />
        </div>

        {/* --- Verified $ITLG Card --- */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={verifiedCoins}
            alt="Verified ITLG"
            className="object-contain"
          />
        </div>

      </div>

      {/* --- Fixed Dock --- */}
      <Dock activeTab={activeDock} onTabChange={setActiveDock} />
    </div>
  );
};

export default WalletApp;