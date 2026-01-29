import React from 'react';
import { HiPlay, HiOutlineDocumentText } from "react-icons/hi2";

const CallDetails = () => {
  return (
    <div className="lg:mt-0 mt-2 min-h-screen   flex justify-center items-start font-sans border border-[#192D71] rounded-xl">
      <div className="w-full max-w-lg p-4 bg-[#111c3e] rounded-3xl  text-slate-300 shadow-2xl border border-slate-800/50">
        
        {/* Header */}
        <h2 className=" font-semibold text-white mb-4">Call Details</h2>
            <hr className=" text-[#192D71] " />

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-y-6 mb-8 mt-2">
          <div>
            <p className="text-slate-500 text-sm mb-1">Phone Number</p>
            <p className="text-white font-medium">+1 (555) 123-4567</p>
          </div>
          <div>
            <p className="text-slate-500 text-sm mb-1">Duration</p>
            <p className="text-white font-medium">4:32</p>
          </div>
          <div>
            <p className="text-slate-500 text-sm mb-1">Date & Time</p>
            <p className="text-white font-medium">2025-12-16 10:45 AM</p>
          </div>
          <div>
            <p className="text-slate-500 text-sm mb-1">Issue Type</p>
            <p className="text-white font-medium">Screen</p>
          </div>
        </div>

        {/* Call Type Badge */}
        <div className="mb-6">
          <p className="text-slate-500 text-sm mb-2">Call Type</p>
          <span className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-medium">
            AI Resolved
          </span>
        </div>

        {/* Outcome */}
        <div className="mb-8">
          <p className="text-slate-500 text-sm mb-1">Outcome</p>
          <p className="text-white text-lg">Quote provided</p>
        </div>

        {/* Audio Button */}
        <button className="w-full bg-[#3B1E54] hover:bg-[#4a266a] text-[#D8B4FE] font-medium py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-colors mb-10 border border-purple-500/10">
          <div className="border-2 border-[#D8B4FE] rounded-full p-0.5">
            <HiPlay size={16} />
          </div>
          Play Audio Recording
        </button>

        {/* Transcript Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-slate-300 font-medium">
            <HiOutlineDocumentText className="text-blue-400" size={20} />
            <h3>Conversation Transcript</h3>
          </div>

          <div className="bg-[#17223b] rounded-2xl p-6 space-y-6 text-[15px] leading-relaxed">
            <div>
              <p className="text-emerald-500 font-bold mb-1">AI Assistant:</p>
              <p className="text-slate-100">Thank you for calling UBreakiFix! How can I help you today?</p>
            </div>

            <div>
              <p className="text-blue-500 font-bold mb-1">Customer:</p>
              <p className="text-slate-100">Hi, my iPhone 13 screen is cracked. How much would it cost to repair?</p>
            </div>

            <div>
              <p className="text-emerald-500 font-bold mb-1">AI Assistant:</p>
              <p className="text-slate-100">
                I can help you with that! For an iPhone 13 screen repair, our price is $199. 
                This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?
              </p>
            </div>

            <div>
              <p className="text-blue-500 font-bold mb-1">Customer:</p>
              <p className="text-slate-100">Yes, please! When are you available?</p>
            </div>

            <div>
              <p className="text-emerald-500 font-bold mb-1">AI Assistant:</p>
              <p className="text-slate-100">
                Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CallDetails;