import { useNavigate } from 'react-router-dom';
import {
  Target,
  Sparkles,
  ShieldCheck,
  Users,
  ArrowRight,
} from 'lucide-react';

// Placeholder image — swap later
import missionImage from '../assets/about-mission.jpg';

const AboutPage = () => {
  const navigate = useNavigate();

  // --- Values data ---
  const values = [
    {
      icon: ShieldCheck,
      title: 'Security First',
      description:
        'Every wallet, transaction, and smart contract is built with defense-in-depth principles. Your keys, your assets, your control.',
    },
    {
      icon: Users,
      title: 'Built for Everyone',
      description:
        'Digital asset ownership should not require a computer science degree. We design for the 99%, not the 1%.',
    },
    {
      icon: Sparkles,
      title: 'Transparent by Default',
      description:
        'No hidden fees, no sold tokens, no surprises. What you see on-chain is exactly what you get.',
    },
    {
      icon: Target,
      title: 'Long-Term Thinking',
      description:
        'We are not here for the hype cycle. We are building infrastructure that will outlast the noise.',
    },
  ];

  return (
    <div className="font-sans antialiased text-gray-900">

      {/* ============================================
          SECTION 1 — HERO
      ============================================ */}
      <section className="w-full pt-16 md:pt-24 pb-12 md:pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#EEECFD] text-[#6B5AED] px-3 py-1.5 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#6B5AED] rounded-sm" />
            <span className="text-xs md:text-sm font-semibold tracking-wide">
              About InterLink
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6">
            Building the bridge between{' '}
            <span className="text-[#6B5AED]">people</span> and{' '}
            <span className="text-[#6B5AED]">digital ownership</span>.
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            InterLink is on a mission to make digital asset ownership as natural
            as sending a message. No jargon. No barriers. Just a secure,
            open network for everyone.
          </p>

        </div>
      </section>

      {/* ============================================
          SECTION 2 — MISSION
      ============================================ */}
      <section className="w-full py-16 md:py-24 bg-[#FCFBFF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: Text */}
            <div className="flex flex-col items-start text-left">
              <p className="text-xs md:text-sm font-semibold text-[#6B5AED] tracking-[0.15em] uppercase mb-4">
                Our Mission
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Ownership should not be complicated.
              </h2>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-5 max-w-lg">
                For too long, digital assets have been locked behind confusing
                interfaces, steep learning curves, and gatekeeping platforms.
                We believe that is a design problem — not a technology problem.
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                InterLink exists to close that gap. We build tools that let
                anyone mine, hold, and trade digital assets with confidence —
                on hardware they already own.
              </p>

              <button
                onClick={() => navigate('/wallet')}
                className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-7 py-3.5 rounded-full text-sm md:text-base font-medium hover:bg-black transition"
              >
                Explore the app
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={missionImage}
                alt="InterLink mission visual"
                className="w-full max-w-md lg:max-w-lg h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3 — VALUES
      ============================================ */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

          {/* Section Header */}
          <div className="text-center mb-14 md:mb-16">
            <p className="text-xs md:text-sm font-semibold text-[#6B5AED] tracking-[0.15em] uppercase mb-4">
              What We Stand For
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Our principles.
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-[#FCFBFF] border border-gray-100 rounded-2xl p-6 md:p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#EEECFD] flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#6B5AED]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================
          SECTION 4 — OUR STORY / MILESTONES
      ============================================ */}
      <section className="w-full py-16 md:py-24 bg-[#FCFBFF]">
        <div className="max-w-4xl mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-14 md:mb-16">
            <p className="text-xs md:text-sm font-semibold text-[#6B5AED] tracking-[0.15em] uppercase mb-4">
              Our Journey
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              How we got here.
            </h2>
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-8 md:gap-10">
            {[
              {
                year: '2023',
                title: 'The idea takes shape',
                description:
                  'A small team of builders and researchers began prototyping a wallet that anyone could use without a manual.',
              },
              {
                year: '2024',
                title: 'InterLink App launches',
                description:
                  'Our first public release brought mobile mining to everyday users. Thousands joined in the first weeks.',
              },
              {
                year: '2025',
                title: 'The Human Network grows',
                description:
                  'InterLink Labs expanded the ecosystem with the ITLX Wallet, InterlinkChain, and decentralized escrow services.',
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-4 md:gap-8 items-start"
              >
                {/* Year */}
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center bg-[#EEECFD] text-[#6B5AED] font-bold text-sm md:text-base px-4 py-2 rounded-full">
                    {milestone.year}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 border-l-2 border-[#EEECFD] pl-5 md:pl-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================
          SECTION 5 — CTA (reused style from GetStarted)
      ============================================ */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#EEECFD] text-[#6B5AED] px-3 py-1.5 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#6B5AED] rounded-sm" />
              <span className="text-xs md:text-sm font-semibold tracking-wide">
                Get started
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.15] tracking-tight">
              Join the network today.
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 max-w-lg">
              Mining is free and secure with InterLink. Start building your
              digital asset portfolio — no hardware, no fees.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <button
                onClick={() => navigate('/wallet')}
                className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-7 py-3.5 rounded-full text-sm md:text-base font-medium hover:bg-black transition"
              >
                Get the app
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => navigate('/import')}
                className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-900 px-7 py-3.5 rounded-full text-sm md:text-base font-medium hover:border-gray-300 hover:shadow-sm transition"
              >
                Import a wallet
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;