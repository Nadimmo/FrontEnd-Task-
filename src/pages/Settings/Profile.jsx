import { Pencil, Square, SquarePen } from "lucide-react";
import DHeader from "../../compnents/DHeader";

function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1438] via-[#0d1b4c] to-[#050b24] text-white ">
      <DHeader text={"Settings"}></DHeader>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-white/10 pb-2 pl-10">
        <button className="text-white font-medium ">
          Profile
        </button>
        <button className="text-white/60 hover:text-white transition">
          Password Settings
        </button>
      </div>
      <div className="pl-2 lg:pl-10">
        {/* Profile Image */}
        <div className="mt-6">
          <p className="mb-3 text-sm text-white/80">Profile Image</p>
          <div className="relative w-24 h-24">
            <img
              src="/src/assets/Avatar.png"
              alt="Profile"
              className="w-24 h-24 rounded-full "
            />
            <button className="absolute bottom-0 right-0 bg-[#7AA3CC] p-2 rounded-lg shadow-lg">
              <SquarePen size={16} />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div>
            <label className="block text-sm text-white/80 mb-2">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Jane D."
              className="w-full px-4 py-3 text-sm rounded-lg bg-[#0b1538]
                       border border-white/10 focus:outline-none
                       focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-white/80 mb-2">Email</label>
            <input
              type="email"
              defaultValue="jane@gmail.com"
              className="w-full px-4 py-3 text-sm rounded-lg bg-[#0b1538]
                       border border-white/10 focus:outline-none
                       focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-white/80 mb-2">
              Store Name
            </label>
            <input
              type="text"
              defaultValue="Ubreakfix Store"
              className="w-full px-4 py-3 text-sm rounded-lg bg-[#0b1538]
                       border border-white/10 focus:outline-none
                       focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-white/80 mb-2">
              Store Address
            </label>
            <input
              type="text"
              defaultValue="123 Main Street, New York"
              className="w-full px-4 py-3 text-sm rounded-lg bg-[#0b1538]
                       border border-white/10 focus:outline-none
                       focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-12 flex justify-center ">
        <button
          className="px-16 py-3 rounded-full w-[30%] bg-green-500
                     font-semibold text-lg hover:bg-green-400
                     transition shadow-lg"
        >
          Save
        </button>
      </div>
    </div>
  );
}
export default Profile;
