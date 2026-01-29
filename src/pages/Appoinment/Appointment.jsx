import { Calendar, CheckCircle, Clock, Copy } from "lucide-react";
import './app.css'

function Appointment() {
  const appointments = Array(6).fill({
    name: "Jane.D",
    phone: "01960685765",
    email: "admin@gmail.com",
    device: "Apple / iPhone 13 Pro",
    repair: "Screen",
    date: "02/06/2026",
    slot: "1",
  });

  return (
    <div className="min-h-screen p-8 text-white bg-gradient-to-br from-[#0a1438] via-[#0d1b4c] to-[#050b24]">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          icon={<Calendar className="text-blue-400" />}
          title="Total Booked"
          value="34"
          subtitle="+8 this week"
          positive
        />
        <StatCard
          icon={<CheckCircle className="text-green-400" />}
          title="AI Booked"
          value="28"
          subtitle="82% of total"
        />
        <StatCard
          icon={<Clock className="text-yellow-400" />}
          title="Pending"
          value="3"
          subtitle="Awaiting confirmation"
        />
      </div>

      {/* Booking Link */}
      <div className="bg-[#0b1538] border border-white/10 rounded-xl p-5 mb-8 h-[140px] ">
        <h3 className="mb-4">Booking Link</h3>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1  bg-[#0A0A0F80] p-3 rounded-md text-sm text-white/80 truncate">
            https://techstore.com/book?id=store123
          </div>
          <button
            className="back flex items-center gap-2 px-4 py-2 rounded-lg
                           shadow shadow-[#E0E9F2] opacity-100 hover:right-2 transition"
          >
            <Copy size={16} /> Copy Link
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0b1538]">
        <table className="w-full text-sm">
          <thead className=" text-white/70">
            <tr>
              {[
                "Client Name",
                "Client Phone",
                "Client Mail",
                "Device",
                "Repair Type",
                "Date",
                "Slot no",
                "Start Time",
              ].map((h) => (
                <th key={h} className="px-4 py-3 text-left font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {appointments.map((a, i) => (
              <tr
                key={i}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >
                <td className="px-4 py-3 text-blue-400">{a.name}</td>
                <td className="px-4 py-3  text-[#CFCFCF]">{a.phone}</td>
                <td className="px-4 py-3">{a.email}</td>
                <td className="px-4 py-3  text-[#CFCFCF]">{a.device}</td>
                <td className="px-4 py-3 text-[#CFCFCF]">{a.repair}</td>
                <td className="px-4 py-3 text-[#CFCFCF]">{a.date}</td>
                <td className="px-4 py-3 text-[#CFCFCF]">{a.slot}</td>
                <td className="px-4 py-3 text-[#CFCFCF]">
                  {["09:00", "10:00", "11:00", "12:00", "02:00", "03:00"][i]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8 text-sm text-white/70">
        <button className="hover:text-white">‹ Previous</button>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            className={`w-8 h-8 text-[#0F62FE] ${
              n === 2 ? "bg-[#A6C8FF] text-black" : "hover:bg-white/10"
            }`}
          >
            {n}
          </button>
        ))}
        <span className="text-[#0F62FE]">…</span>
        <button className="hover:text-white text-[#0F62FE]">11</button>
        <button className="hover:text-white text-[#0F62FE]">Next ›</button>
      </div>
    </div>
  );
}

/* ---------- Reusable Stat Card ---------- */
function StatCard({ icon, title, value, subtitle, positive }) {
  return (
    <div className="bg-[#0b1538] border border-white/10 rounded-xl p-6">
      <div className="flex items-center gap-2 text-sm text-white/70 mb-3">
        {icon}
        {title}
      </div>
      <div className="text-3xl font-semibold mb-1">{value}</div>
      <div
        className={`text-sm ${positive ? "text-green-400" : "text-white/60"}`}
      >
        {subtitle}
      </div>
    </div>
  );
}

export default Appointment;
