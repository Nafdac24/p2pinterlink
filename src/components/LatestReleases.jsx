import { ArrowRight } from 'lucide-react';
import blogImage from '../assets/blog.jpg';
import { Link } from 'react-router-dom';

const LatestReleases = () => {
  // Blog post data - replace with your actual content
  const blogPost = {
    image: blogImage,
    title: 'Why InterLink is targeting the NYSE - Not just Crypto hype',
    date: 'Sep 3, 2025',
    href: '#',
  };

  return (
    <section className="w-full py-16 md:py-24 bg-[#FCFBFF]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#EEECFD] text-[#6B5AED] px-3 py-1.5 rounded-full mb-5">
          <div className="w-2 h-2 bg-[#6B5AED] rounded-sm" />
          <span className="text-xs md:text-sm font-semibold tracking-wide">
            Blog
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-10 md:mb-14 tracking-tight">
          Latest releases.
        </h2>

        {/* Blog Card */}
        <a
          href={blogPost.href}
          className="group w-full max-w-md bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
        >
          {/* Card Image */}
          <div className="w-full aspect-square overflow-hidden">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Card Content */}
          <div className="px-5 py-5 md:px-6 md:py-6 text-left">
            <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#6B5AED] transition">
              {blogPost.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-500">
              {blogPost.date}
            </p>
          </div>
        </a>

        {/* See More Button */}
        <Link to="/wallet" className="mt-10 md:mt-12 inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 md:px-7 md:py-3.5 rounded-full text-sm md:text-base font-medium hover:bg-black transition">
          See more
          <ArrowRight size={16} />
        </Link>

      </div>
    </section>
  );
};

export default LatestReleases;