const StatCard = ({
  title,
  value,
  change,
  positive,
  icon,
  color,
  highlight = false,
}) => {
  return (
    <div
      className={`lg:w-[320px] relative rounded-2xl p-5 bg-gradient-to-b from-[#0E1A3A] to-[#0A1430]
      border  border-[#2B7FFF40] shadow-lg `}
    >
      {/* Icon */}
      <div
        className={`absolute top-4 right-4 w-10 h-10 rounded-xl
        bg-gradient-to-br ${color} flex items-center justify-center
        text-white text-lg`}
      >
        {icon}
      </div>

      {/* Content */}
      <p className="text-sm text-gray-400">{title}</p>
      <h2 className="text-3xl font-semibold text-white mt-1">
        {value}
      </h2>

      <p
        className={`text-sm mt-2 ${
          positive ? "text-green-400" : "text-red-400"
        }`}
      >
        {change}
      </p>

      {/* Glow */}
      {highlight && (
        <div className="absolute inset-0 rounded-2xl ring-1 ring-[#8B5CF6] pointer-events-none" />
      )}
    </div>
  );
};
export default StatCard