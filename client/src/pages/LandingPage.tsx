import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[375px] h-[812px] bg-gradient-to-b from-cyan-100 via-blue-100 to-purple-200 rounded-[40px] overflow-hidden shadow-xl relative p-6">
        {/* Content */}
        <div className="flex flex-col h-full">
          <button className="self-start mb-8 bg-white text-purple-600 font-semibold py-2 px-6 rounded-full shadow-md">
            Log in
          </button>
          
          <h1 className="text-4xl font-bold text-purple-600 mb-4 leading-tight">
            Your AI Double:<br />
            Engage, Respond, Sell.
          </h1>
          
          <p className="text-purple-700 mb-12">
            Transform your social media presence with an AI-powered assistant that engages your audience and drives sales.
          </p>
          
          <div className="relative h-48 mb-12">
            <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center text-2xl shadow-lg">
              🧑🏽‍🦱
            </div>
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center text-3xl shadow-lg">
              👩🏽‍🦱
            </div>
            <div className="absolute top-24 left-1/4 w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-2xl shadow-lg">
              🧑🏻
            </div>
            <div className="absolute top-20 right-0 w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-2xl shadow-lg">
              👨🏿‍🦱
            </div>
            <div className="absolute bottom-0 left-1/3 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-2xl shadow-lg">
              👨🏻
            </div>
          </div>
          
          <button className="mt-auto w-full bg-purple-600 text-white font-semibold py-4 px-4 rounded-full text-lg">
            Sign up to build AI double
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;