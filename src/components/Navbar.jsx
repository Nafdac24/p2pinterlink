import { useState } from 'react';
import { X, Menu, ChevronDown, ChevronUp } from 'lucide-react';
import logo from '../assets/logo.png'; // Make sure you have your logo here
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleAccordion = (item) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  const navLinks = [
    { name: 'About', href: '#' },
    { name: 'Ecosystem', href: '#', hasDropdown: true },
    { name: 'Blog', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Resource', href: '#' },
  ];

  return (
    <>
      {/* --- Desktop Navbar --- */}
      <nav className="hidden md:flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <img src={logo} alt="Interlink" className="h-8 w-auto object-contain" />
        </div>

        <div className="flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to="/about" className="hover:text-purple-600 transition">About</Link>
          <Link to="/" className="hover:text-purple-600 transition">Ecosystem</Link>
          <Link to="/" className="hover:text-purple-600 transition">Blog</Link>
          <Link to="/" className="hover:text-purple-600 transition">Community</Link>
        </div>

        <button className="bg-[#6B5AED] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#5a4bd1] transition">
          Get the app
        </button>
      </nav>

      {/* --- Mobile Navbar (Top Bar) --- */}
      <nav className="md:hidden flex items-center justify-between px-4 py-3 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-1">
          <img src={logo} alt="Interlink" className="h-7 w-auto object-contain" />
        </div>
        <button className="bg-[#6B5AED] text-white px-4 py-1.5 rounded-full text-xs font-semibold">
          Get the app
        </button>
        <button onClick={() => setIsOpen(true)} className="text-gray-800 p-1">
          <Menu size={24} />
        </button>
      </nav>

      {/* --- Mobile Slide-out Menu --- */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col md:hidden overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <div className="flex items-center gap-1">
              <img src={logo} alt="Interlink" className="h-7 w-auto object-contain" />
            </div>
            <button className="bg-[#6B5AED] text-white px-4 py-1.5 rounded-full text-xs font-semibold">
              Get the app
            </button>
            <button onClick={() => setIsOpen(false)} className="text-gray-800 p-1">
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col px-6 py-4 text-lg font-semibold text-gray-900">
            <a href="#" className="py-4 border-b border-gray-100 text-purple-600">About Us</a>
            
            {/* Ecosystem Accordion */}
            <div className="border-b border-gray-100">
              <button 
                onClick={() => toggleAccordion('ecosystem')} 
                className="w-full flex items-center justify-between py-4 text-left"
              >
                Ecosystem
                {expandedItem === 'ecosystem' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {expandedItem === 'ecosystem' && (
                <div className="flex flex-col pb-4 text-base font-normal text-gray-600 gap-3 pl-2">
                  <a href="#" className="hover:text-purple-600">Interlink App</a>
                  <a href="#" className="hover:text-purple-600">ITLX Wallet</a>
                  <a href="#" className="hover:text-purple-600">InterlinkChain</a>
                </div>
              )}
            </div>

            <a href="#" className="py-4 border-b border-gray-100">Blog</a>

            {/* Community Accordion */}
            <div className="border-b border-gray-100">
              <button 
                onClick={() => toggleAccordion('community')} 
                className="w-full flex items-center justify-between py-4 text-left"
              >
                Community
                {expandedItem === 'community' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {expandedItem === 'community' && (
                <div className="flex flex-col pb-4 text-base font-normal text-gray-600 gap-3 pl-2">
                  <a href="#" className="hover:text-purple-600">Discord</a>
                  <a href="#" className="hover:text-purple-600">Twitter</a>
                </div>
              )}
            </div>

            {/* Resource Accordion */}
            <div className="border-b border-gray-100">
              <button 
                onClick={() => toggleAccordion('resource')} 
                className="w-full flex items-center justify-between py-4 text-left"
              >
                Resource
                {expandedItem === 'resource' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {expandedItem === 'resource' && (
                <div className="flex flex-col pb-4 text-base font-normal text-gray-600 gap-3 pl-2">
                  <a href="#" className="hover:text-purple-600">Documentation</a>
                  <a href="#" className="hover:text-purple-600">FAQs</a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;