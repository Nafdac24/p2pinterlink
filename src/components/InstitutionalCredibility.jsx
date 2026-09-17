import logoNewToTheStreet from '../assets/logo.png';
import logoAws from '../assets/logo.png';
import logoGoogle from '../assets/logo.png';
import logoNist from '../assets/logo.png';
import logoNyse from '../assets/logo.png';
// import logoNewToTheStreet from '../assets/logo-new-to-the-street.png';
// import logoAws from '../assets/logo-aws.png';
// import logoGoogle from '../assets/logo-google.png';
// import logoNist from '../assets/logo-nist.png';
// import logoNyse from '../assets/logo-nyse.png';

const InstitutionalCredibility = () => {
  // Define the logos in an array for easy mapping
  const logos = [
    { src: logoNewToTheStreet, alt: 'New to the Street' },
    { src: logoAws, alt: 'AWS Startups' },
    { src: logoGoogle, alt: 'Google for Startups' },
    { src: logoNist, alt: 'NIST' },
    { src: logoNyse, alt: 'NYSE' },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Main Headings */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#6B5AED] mb-4 tracking-tight">
          Institutional Credibility
        </h2>
        
        <p className="text-lg md:text-xl font-medium text-gray-900 mb-3">
          Trusted by the world's best.
        </p>
        
        <p className="text-sm md:text-base text-gray-500 max-w-md mx-auto leading-relaxed mb-12">
          Independently verified by the institutions that define global standards.
        </p>

        {/* Trusted By Label */}
        <p className="text-xs md:text-sm font-semibold text-gray-500 tracking-[0.2em] uppercase mb-8">
          Trusted By
        </p>

        {/* Logo Grid */}
        {/* 
          Layout strategy: 
          - Mobile: 2 columns
          - Tablet/Desktop: 4 columns in the first row, 1 centered in the second row.
          To achieve this with flex-wrap, we set a max-width and center everything.
        */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 w-full max-w-4xl">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 md:px-8 md:py-5 w-[calc(50%-0.5rem)] sm:w-auto min-w-[150px] h-20 md:h-24 transition hover:shadow-sm"
            >
              {/* flex items-center justify-center bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 md:px-8 md:py-5 w-[calc(50%-0.5rem)] sm:w-auto min-w-[150px] h-20 md:h-24 transition hover:shadow-sm */}
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="max-h-full max-w-full object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InstitutionalCredibility;