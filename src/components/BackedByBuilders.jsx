import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import slideImage1 from '../assets/slide-1.jpg';
import slideImage2 from '../assets/slide-2.jpg';
import slideImage3 from '../assets/slide-3.jpg';

const BackedByBuilders = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define your slides here. Each slide has an image, title, description, and link.
  const slides = [
    {
      image: slideImage1,
      title: 'Backed by builders who ship.',
      description: 'This spot is reserved for your real partners, investors, or press mentions once you have them.',
      linkText: 'See more',
      linkHref: '#',
    },
    {
      image: slideImage2,
      title: 'Backed by builders who ship.',
      description: 'This spot is reserved for your real partners, investors, or press mentions once you have them.',
      linkText: 'See more',
      linkHref: '#',
    },
    {
      image: slideImage3,
      title: 'Backed by builders who ship.',
      description: 'This spot is reserved for your real partners, investors, or press mentions once you have them.',
      linkText: 'See more',
      linkHref: '#',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <section className="w-full py-16 md:py-24 bg-[#FCFBFF]">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Slide Image */}
        <div className="mb-8 md:mb-10 transition-all duration-500 ease-in-out">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-48 md:w-64 lg:w-72 h-auto object-contain mx-auto"
          />
        </div>

        {/* Slide Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          {slide.title}
        </h2>

        {/* Slide Description */}
        <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed mb-3">
          {slide.description}
        </p>

        {/* "See more" Link */}
        <a
          href={slide.linkHref}
          className="inline-flex items-center gap-2 text-gray-900 font-semibold text-sm md:text-base underline underline-offset-4 hover:text-[#6B5AED] transition mb-10"
        >
          {slide.linkText}
          <ArrowRight size={18} />
        </a>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 md:gap-6">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition shadow-sm"
          >
            <ArrowLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? 'w-6 h-2 bg-[#6B5AED]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition shadow-sm"
          >
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default BackedByBuilders;