import { ChevronLeft, ChevronRight, MessageSquareLock, Cloud, KeyRound } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChooseImportMethod = () => {
  // Reusable list item component
  const ImportOption = ({ icon: Icon, title, onClick }) => (
    <Link to="/import/recovery-phrase"
      onClick={onClick}
      className="w-full flex items-center gap-4 bg-[#F5F5F7] hover:bg-[#EEEEF2] rounded-2xl px-4 py-4 md:px-5 md:py-5 transition-all group"
    >
      {/* Icon Circle */}
      <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
        <Icon size={20} className="text-white" strokeWidth={2} />
      </div>

      {/* Title */}
      <span className="flex-1 text-left text-base md:text-lg font-bold text-gray-900">
        {title}
      </span>

      {/* Chevron */}
      <ChevronRight
        size={20}
        className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all flex-shrink-0"
      />
    </Link>
  );

  return (
    <div className="min-h-screen w-full bg-white flex justify-center py-6 md:py-10 px-4">
      {/* Centered Container */}
      <div className="w-full max-w-md">

        {/* --- Top Bar: Back button + Title --- */}
        <div className="flex items-center gap-4 mb-10">
          <button
            aria-label="Go back"
            className="w-11 h-11 rounded-full bg-[#F5F5F7] hover:bg-gray-200 flex items-center justify-center flex-shrink-0 transition"
          >
            <ChevronLeft size={22} className="text-gray-900" />
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            Choose import method
          </h1>
        </div>

        {/* --- Restore Section --- */}
        <div className="mb-8">
          <p className="text-sm md:text-base text-gray-500 mb-3">Restore</p>
          <div className="flex flex-col gap-3">
            <ImportOption icon={MessageSquareLock} title="Recovery phrase" />
            <ImportOption icon={Cloud} title="Google Drive" />
          </div>
        </div>

        {/* --- Import Section --- */}
        <div>
          <p className="text-sm md:text-base text-gray-500 mb-3">Import</p>
          <div className="flex flex-col gap-3">
            <ImportOption icon={KeyRound} title="Private key" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChooseImportMethod;