export default function ProductTableHeader({ onFilterChange, currentFilter = "brand" }) {
  return (
    <div className="bg-white rounded-xl p-4">
      {/* Search */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search Task"
          className="pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-80"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Filter Buttons */}
      <div className="flex items-center gap-3">
        {/* Brand Dialog Button */}
        <button 
          onClick={() => onFilterChange("brand")}
          className={`px-10 py-3 text-sm font-semibold transition-all ${
            currentFilter === "brand"
              ? "bg-gradient-to-b from-purple-700 to-purple-500 text-white"
              : "bg-gradient-to-b from-purple-600 to-purple-400 text-white hover:from-purple-700 hover:to-purple-500"
          }`}
          style={{ borderRadius: '0 0 25px 25px' }}
        >
          Brand Dialog
        </button>

        {/* Manage Alat Button */}
        <button 
          onClick={() => onFilterChange("alat")}
          className={`px-10 py-3 text-sm font-semibold transition-all ${
            currentFilter === "alat"
              ? "bg-gradient-to-b from-purple-700 to-purple-500 text-white"
              : "bg-gradient-to-b from-purple-600 to-purple-400 text-white hover:from-purple-700 hover:to-purple-500"
          }`}
          style={{ borderRadius: '0 0 25px 25px' }}
        >
          Manage Alat
        </button>

        {/* Manage Sperpart Button */}
        <button 
          onClick={() => onFilterChange("sparepart")}
          className={`px-10 py-3 text-sm font-semibold transition-all ${
            currentFilter === "sparepart"
              ? "bg-gradient-to-b from-purple-700 to-purple-500 text-white"
              : "bg-gradient-to-b from-purple-600 to-purple-400 text-white hover:from-purple-700 hover:to-purple-500"
          }`}
          style={{ borderRadius: '0 0 25px 25px' }}
        >
          Manage Sperpart
        </button>
      </div>
    </div>
  );
}