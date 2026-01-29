import Activity from "./Activity";
import Progress from "./Progress";

const TwoCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 ">
      {/* Recent Activity */}
      <div className=" rounded-2xl border border-[#2B7FFF40] bg-gradient-to-b from-[#0E1A3A] to-[#0A1430] p-6 shadow-lg lg:w-[480px]">
        <h2 className="text-white text-lg font-semibold mb-4">
          Recent Activity
        </h2>

        <div className="space-y-4 ">
          <Activity
            color="bg-green-400"
            text="AI booked appointment for iPhone 13 screen repair"
            time="2 min ago"
          />
          <Activity
            color="bg-orange-400"
            text="Warm transfer to technician - Software issue"
            time="5 min ago"
          />
          <Activity
            color="bg-green-400"
            text="Quote provided for iPad battery replacement"
            time="8 min ago"
          />
          <Activity
            color="bg-red-400"
            text="Call dropped after 12 seconds"
            time="15 min ago"
          />
        </div>
      </div>

      {/* Top Repair Requests */}
      <div className="rounded-2xl border border-[#2B7FFF40] bg-gradient-to-b from-[#0E1A3A] to-[#0A1430] p-6 shadow-lg lg:mt-0 mt-2 lg:w-[480px]" >
        <h2 className="text-white text-lg font-semibold mb-6">
          Top Repair Requests
        </h2>

        <div className="space-y-5">
          <Progress label="Screen Repair" value={156} percent="85%" />
          <Progress label="Battery Replacement" value={89} percent="55%" />
          <Progress label="Back Glass Repair" value={67} percent="42%" />
          <Progress label="Software Issues" value={45} percent="30%" />
        </div>
      </div>
    </div>
  );
};

export default TwoCards;
