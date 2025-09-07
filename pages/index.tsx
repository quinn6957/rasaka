import { DISSUNLogoLong, DISSUNLogoSmall } from '../components/vaiiya-logo';
import Head from 'next/head';

export default function Home() {
  function handleTermsClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    window.location.href = '/terms';
  }
  function handlePrivacyClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    window.location.href = '/privacy';
  }

  

  return (
      <><head>
      <title>DISSUN</title>
      <meta name="description" content="DISSUN - Energy for your reality." />
      <link rel="icon" href="/favicon.ico" />
    </head><div className="min-h-screen text-black relative overflow-hidden" style={{ backgroundColor: '#0b090b' }}>
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-screen px-8">
          {/* Main Logo */}
          <div className="mb-8">
            <DISSUNLogoLong className="w-[700px] h-[184.8px]" />
          </div>

          {/* Tagline */}
          <h1 className="text-7xl font-semibold md:text-5xl font-bold mb-6 text-center" style={{ color: '#D21F3C' }}>
            Energy for your reality.
          </h1>
        </div>

        {/* Bottom Left - Privacy Policy Link */}
        <div className="absolute bottom-8 left-8">
          <button
            onClick={handlePrivacyClick}
            className="text-white hover:text-gray-600 transition-colors duration-300 underline"
          >
            Privacy Policy
          </button>
          <br />
          <button
            onClick={handleTermsClick}
            className="text-white hover:text-gray-600 transition-colors duration-300 underline text-left"
          >
            Terms of Use
          </button>
        </div>

        {/* Bottom Right - Small Logo */}
        <div className="absolute bottom-8 right-8">
          <DISSUNLogoSmall className="w-[120px] h-[32px] opacity-60" />
        </div>
      </div></>
  );
}

/*
import Head from 'next/head';
import { VaiiyaLogo, VaiiyaLogoSmall } from '../components/vaiiya-logo';
import { redirect } from 'next/dist/server/api-utils';

export default function Home() {
  function handleTermsClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    window.location.href = '/terms';
  }
  function handlePrivacyClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    window.location.href = '/privacy';
  }

  

  return (
    <div className="min-h-screen text-black relative overflow-hidden" style={{ backgroundColor: '#edf1fc' }}>
      {/* Hero Section 
      <div className="flex flex-col items-center justify-center min-h-screen px-8">
        {/* Main Logo 
        <div className="mb-8">
          <VaiiyaLogo className="w-[700px] h-[184.8px]" />
        </div>

        {/* Tagline 
        <h1 className="text-7xl font-semibold md:text-5xl font-bold mb-6 text-center" style={{ color: '#ED0F35' }}>
          We. As One.
        </h1>
      </div>

      {/* Bottom Left - Privacy Policy Link
            <div className="absolute bottom-8 left-8">
                <button
                    onClick={handlePrivacyClick}
                    className="text-black hover:text-gray-600 transition-colors duration-300 underline"
                >
                    Privacy Policy
                </button>
                <br />
                <button
                    onClick={handleTermsClick}
                    className="text-black hover:text-gray-600 transition-colors duration-300 underline text-left"
                >
                    Terms of Use
                </button>
            </div>

            {/* Bottom Right - Small Logo
            <div className="absolute bottom-8 right-8">
                <VaiiyaLogoSmall className="w-[120px] h-[32px] opacity-60" />
            </div>
    </div>
  );
}
*/