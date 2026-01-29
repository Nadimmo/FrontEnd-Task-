import React from "react";
import DHeader from "../../compnents/DHeader";
import { CircleCheckBig, Clock4, Phone, Timer } from "lucide-react";
import CallDetails from "./CallDetails";
import { LuChevronDown, LuSearch } from "react-icons/lu";
const calls = [
  {
    id: 1,
    number: "+1 (555) 345-6789",
    date: "2025-12-16 • 09:42 AM",
    status: "AI Resolved",
    tag: "Screen",
    time: "5:30",
    text: "Quote Provided",
  },
  {
    id: 2,
    number: "+1 (555) 345-6789",
    date: "2025-12-16 • 09:42 AM",
    status: "Warm Transfer",
    tag: "Software",
    time: "5:30",
    text: "Escalated to technician",
  },
  {
    id: 3,
    number: "+1 (555) 345-6789",
    date: "2025-12-16 • 09:42 AM",
    status: "Appointment",
    tag: "Battery",
    time: "5:30",
    text: "Appointment Booked",
  },
  {
    id: 4,
    number: "+1 (555) 345-6789",
    date: "2025-12-16 • 09:42 AM",
    status: "Dropped",
    tag: "Unknown",
    time: "5:30",
    text: "Call Dropped",
  },
  {
    id: 5,
    number: "+1 (555) 345-6789",
    date: "2025-12-16 • 09:42 AM",
    status: "AI Resolved",
    tag: "Screen",
    time: "5:30",
    text: "Quote Provided",
  },
];

function CallLogs() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0a1438] via-[#0d1b4c] to-[#050b24] text-white">
      <DHeader text={"Call Logs & History"}></DHeader>

      <div className="w-full max-w-6xl p-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Search Input */}
          <div className="relative  md:flex-grow">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <LuSearch className="text-slate-500 h-5 w-5" />
            </div>
            <input
              type="text"
              className="block w-full bg-[#111827] border border-slate-800 text-slate-300 text-sm rounded-xl pl-12 pr-4 py-3 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-slate-500 transition-all"
              placeholder="Search by phone number, issue type..."
            />
          </div>

          {/* Filters Container - Wraps on small screens */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {["All Type", "All Issues", "Today"].map((label) => (
              <button
                key={label}
                className="flex flex-grow md:flex-grow-0 items-center justify-between gap-4 bg-[#111827] border border-slate-800 text-slate-300 text-sm rounded-xl px-5 py-3 hover:bg-slate-800/50 transition-all min-w-[120px]"
              >
                <span className="font-medium">{label}</span>
                <LuChevronDown className="text-slate-500 h-4 w-4" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className=" p-4 md:p-6">
        {/* Main Layout */}
        <div className="lg:flex justify-between gap-4">
          {/* Call List */}
          <div className=" bg-[#111c3e] p-4 lg:w-[480px] lg:h-[640px]  border border-[#192D71] rounded-xl">
            <h2 className="font-semibold mb-4">Call List</h2>
            <hr className=" text-[#192D71] " />

            <div className="space-y-3">
              {calls.map((call) => (
                <div
                  key={call.id}
                  className="mt-2 border-b border-[#192D71] pb-2"
                >
                  <div className="flex justify-between items-center ">
                    <div className="flex justify-between items-center gap-2">
                      <div className="bg-gradient-to-t from-[#2B7FFF] to-[#00B8DB] p-2 rounded-xl ">
                        <Phone />
                      </div>
                      <div>
                        <p className="font-medium">{call.number}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {call.date}
                        </p>
                      </div>
                    </div>
                    <div className="text-xs rounded-xl p-2 bg-green-600/20 text-green-400">
                      {call.status}
                    </div>
                  </div>

                  {/*bottom  */}
                  <div className="flex gap-4 items-center mt-4">
                    <span className="text-xs flex items-center gap-1 text-gray-400">
                      {" "}
                      <Clock4 className="w-3 h-3 " /> {call.time}
                    </span>
                    <span className="text-xs flex items-center gap-1 text-gray-400">
                      {" "}
                      <CircleCheckBig className="w-3 h-3" /> {call.text}
                    </span>
                    <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-blue-600/20 text-blue-400">
                      {call.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Side */}
          <div>
            <CallDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallLogs;
