const Activity = ({ color, text, time }) => {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-[#152252] p-4">
      <span className={`mt-1 h-2.5 w-2.5 rounded-full ${color}`} />
      <div>
        <p className="text-white text-sm">{text}</p>
        <p className="text-xs text-gray-400 mt-1">{time}</p>
      </div>
    </div>
  );
};
export default Activity