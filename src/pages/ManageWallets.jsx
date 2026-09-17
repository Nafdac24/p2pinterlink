import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Plus,
  X,
  Wallet,
  LogIn,
} from 'lucide-react';
import accountAvatar from '../assets/logo.png';

const ManageWallets = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(true); // starts closed
  const navigate = useNavigate();

  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);

  // Reusable bottom sheet option component
  const SheetOption = ({ title, onClick }) => (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 bg-[#F5F5F7] hover:bg-[#EEEEF2] rounded-2xl px-4 py-4 transition-all group"
    >
      {/* Icon Circle */}
      <div className="w-11 h-11 rounded-full bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
        <Wallet size={18} className="text-white" strokeWidth={2} />
      </div>

      {/* Title */}
      <span className="flex-1 text-left text-base font-bold text-gray-900">
        {title}
      </span>

      {/* Trailing Icon */}
      <LogIn
        size={20}
        className="text-gray-400 group-hover:text-gray-600 transition flex-shrink-0"
      />
    </button>
  );

  return (
    <div className="relative min-h-screen w-full bg-white flex justify-center py-6 md:py-10 px-4 overflow-hidden">
      {/* Centered Container */}
      <div className="w-full max-w-md">

        {/* --- Top Bar: Back button + Title --- */}
        <div className="grid grid-cols-3 items-center mb-10">
          <button
            aria-label="Go back"
            onClick={() => navigate(-1)}
            className="w-11 h-11 rounded-full bg-[#F5F5F7] hover:bg-gray-200 flex items-center justify-center transition justify-self-start"
          >
            <ChevronLeft size={22} className="text-gray-900" />
          </button>
          <h1 className="text-lg md:text-xl font-bold text-gray-900 text-center">
            Manage Wallets
          </h1>
          <div /> {/* Spacer for centering */}
        </div>

        {/* --- Wallet Section --- */}
        <div className="mb-2">
          {/* Wallet Header — opens sheet */}
          <button
            onClick={openSheet}
            className="w-full flex items-center justify-between py-3"
          >
            <span className="text-lg md:text-xl font-bold text-gray-900">
              Wallet 1
            </span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          {/* Account Row */}
          <div className="flex items-center gap-4 py-4">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={accountAvatar}
                alt="Account avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Account Info */}
            <div className="flex-1 min-w-0">
              <div className="text-base font-bold text-gray-900">
                Account #1
              </div>
              <div className="text-sm text-gray-500">
                $***.**
              </div>
            </div>

            {/* More Options */}
            <button
              aria-label="More options"
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition flex-shrink-0"
            >
              <MoreVertical size={18} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* --- Add Account Button — opens sheet --- */}
        <button
          onClick={openSheet}
          className="w-full flex items-center gap-4 py-4 hover:bg-gray-50 rounded-2xl transition"
        >
          <div className="w-12 h-12 rounded-full bg-[#F5F5F7] flex items-center justify-center flex-shrink-0">
            <Plus size={22} className="text-gray-700" />
          </div>
          <span className="text-base font-semibold text-gray-700">
            Add Account
          </span>
        </button>

      </div>

      {/* --- Bottom Sheet --- */}
      {isSheetOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            onClick={closeSheet}
            className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          />

          {/* Sheet */}
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-md bg-white rounded-t-3xl px-5 pt-4 pb-8 animate-slide-up">
            {/* Drag Handle */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
            </div>

            {/* Sheet Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Add or Import Wallet
              </h2>
              <button
                onClick={closeSheet}
                aria-label="Close"
                className="w-9 h-9 rounded-full bg-[#F5F5F7] hover:bg-gray-200 flex items-center justify-center transition flex-shrink-0"
              >
                <X size={18} className="text-gray-700" />
              </button>
            </div>

            {/* Sheet Options */}
            <div className="flex flex-col gap-3">
              <SheetOption
                title="Create new wallet"
                onClick={() => {
                  closeSheet();
                  navigate('/import');
                }}
              />
              <SheetOption
                title="Import existing wallet"
                onClick={() => {
                  closeSheet();
                  navigate('/import');
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageWallets;