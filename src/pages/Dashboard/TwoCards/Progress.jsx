const Progress = ({ label, value, percent }) => {
  return (
    <div>
      <div className="flex justify-between text-sm text-white mb-2">
        <span>{label}</span>
        <span className="text-gray-300">{value} requests</span>
      </div>

      <div className="h-2 rounded-full bg-[#1C2A52] overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#2B7FFF] to-[#00D4FF]"
          style={{ width: percent }}
        />
      </div>
    </div>
  );
};
export default Progress