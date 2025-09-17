'use client'
import Image from 'next/image';
import logoImg from '../media/images/bookadzone-logo.png'
import { useEffect, useState } from 'react';

const Home = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2026-03-31T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background with blur effect */}
      <div className="absolute inset-0 opacity-90 backdrop-blur-2xl -z-10"></div>
      
      {/* Content */}
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-6">
          <div className="text-4xl font-bold text-white flex flex-col items-center">
            <Image alt='logo' className='w-[17rem]' src={logoImg}/>
          </div>
          <div className="tagline flex gap-[10px] items-center justify-center text-white">
            <p className="text-xs mt-2">Advertise</p>
            <p className="text-xs mt-2">Simplify</p>
            <p className="text-xs mt-2">Grow</p>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-3xl font-bold text-white mb-3">
          Something Amazing is <span className="text-[#7F6AF7]">Coming Soon</span>
        </h1>
        
        {/* Description */}
        <p className="text-xs text-white max-w-md mx-auto mb-12 leading-relaxed">
          We're working hard to bring you an innovative platform for booking billboard advertising spaces. 
          Stay tuned for our launch!
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#ffffff1f] backdrop-blur-lg rounded-lg p-6 border border-[#7f6af766]">
            <div className="text-3xl md:text-4xl font-bold text-white">{days}</div>
            <div className="text-xs text-[#98A9B8] mt-2">Days</div>
          </div>
          <div className="bg-[#ffffff1f] backdrop-blur-lg rounded-lg p-6 border border-[#7f6af766]">
            <div className="text-3xl md:text-4xl font-bold text-white">{hours}</div>
            <div className="text-xs text-[#98A9B8] mt-2">Hours</div>
          </div>
          <div className="bg-[#ffffff1f] backdrop-blur-lg rounded-lg p-6 border border-[#7f6af766]">
            <div className="text-3xl md:text-4xl font-bold text-white">{minutes}</div>
            <div className="text-xs text-[#98A9B8] mt-2">Minutes</div>
          </div>
          <div className="bg-[#ffffff1f] backdrop-blur-lg rounded-lg p-6 border border-[#7f6af766]">
            <div className="text-3xl md:text-4xl font-bold text-white">{seconds}</div>
            <div className="text-xs text-[#98A9B8] mt-2">Seconds</div>
          </div>
        </div>

        {/* Notify Form */}
        <div className="bg-[#ffffff1f] backdrop-blur-lg rounded-xl p-6 border border-[#7f6af766] max-w-md mx-auto mb-12">
          <h3 className="text-white text-lg font-medium mb-4">Get Notified When We Launch!</h3>
         <div className="flex rounded-[10rem] bg-[#080411b3] border border-[#7f6af766] focus-within:ring-1 focus-within:ring-[#7f6af766] transition-all">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1  text-white text-xs rounded-l-lg py-3 px-4 focus:outline-none"
            />
            <button className="bg-[#7F6AF7] text-white text-xs font-medium py-3 px-6 rounded-[10rem] hover:bg-[#6B5BD9] transition-colors">
              Notify Me
            </button>
          </div>  
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 w-full text-center">
        <p className="text-xs text-[#98a9b882]">
          © {new Date().getFullYear()} BookAdZone. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;