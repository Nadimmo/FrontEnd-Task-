import {
  FiPhone,
  FiRepeat,
  FiCalendar,
  FiClock,
  FiXCircle,
} from "react-icons/fi";
import StatCard from "./StatCard";
import { FaRegBell } from "react-icons/fa";
import TwoCards from "./TwoCards/TwoCards";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#111B3C] flex items-center justify-between  pb-4 pl-3 pt-4">
        <h1 className="text-xl font-semibold text-white">Dashboard Overview</h1>

        <div className="flex items-center gap-4 px-3">
          <button className="text-white/80 hover:text-white">
            <FaRegBell />
          </button>
          <img
            src="/src/assets/Avatar.png"
            alt="User"
            className="w-9 h-9 rounded-full border border-[#2B7FFF]"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-2 gap-y-3">
        <StatCard
          title="Total Calls Today"
          value="127"
          change="+12%"
          positive
          icon={<FiPhone />}
          color="from-[#D946EF] to-[#9333EA]"
        />

        <StatCard
          title="AI-Handled Calls"
          value="98"
          change="+7%"
          positive
          color="from-[#D946EF] to-[#9333EA]"
        />

        <StatCard
          title="Warm Transfer"
          value="23"
          change="+18%"
          positive
          icon={<FiRepeat />}
          color="from-[#FB923C] to-[#F97316]"
        />

        <StatCard
          title="Appointments Booked"
          value="34"
          change="+8%"
          positive
          icon={<FiCalendar />}
          color="from-[#22C55E] to-[#16A34A]"
        />

        <StatCard
          title="Missed / Failed Calls"
          value="6"
          change="-3%"
          positive={false}
          icon={<FiXCircle />}
          color="from-[#F43F5E] to-[#E11D48]"
        />

        <StatCard
          title="Avg Call Duration"
          value="3:42"
          change="+15%"
          positive
          icon={<FiClock />}
          color="from-[#3B82F6] to-[#2563EB]"
        />
      </div>

      {/* Char Bar */}
      <section className="bg-[#111B3C] ml-3 p-2 rounded-xl">
        <div className="flex justify-between mb-2">
          <div className="ml-3">
            <h3 className="text-xl">Call Trends - This Week</h3>
            <p className="text-[14px] text-[#90A1B9]">Total: 472 calls</p>
          </div>
          <div>
            <select
              defaultValue="This Week"
              className="select appearance-none bg-[#111B3C] text-white border border-[#1D293D] p-2 rounded-lg"
            >
              <option>This Week</option>
              <option>Saturday</option>
              <option>Sunday</option>
              <option>Monday</option>
            </select>
          </div>
        </div>
        <img src="/src/assets/Container.png" alt="" />
      </section>

      {/* Activity and Progress */}
      <TwoCards></TwoCards>
    </div>
  );
};

export default Dashboard;
