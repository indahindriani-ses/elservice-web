export default function CardCountServices({ title, count, percentage, isActive = false }) {
  return (
    <div 
      className={`
        relative rounded-2xl p-5 transition-all duration-500 ease-in-out cursor-pointer group
        ${isActive 
          ? 'bg-gradient-to-br from-purple-600 to-purple-500 text-white shadow-xl' 
          : 'bg-white text-gray-900 hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-500 hover:text-white hover:shadow-xl'
        }
      `}
    >
      {/* Header with title and arrow icon */}
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-sm font-medium ${isActive ? 'text-white/90' : 'text-gray-600 group-hover:text-white/90'} transition-colors duration-500`}>
          {title}
        </h3>
        <button 
          className={`
            p-1.5 rounded-lg transition-all duration-500 rotate-45
            ${isActive 
              ? 'bg-white/20 hover:bg-white/30' 
              : 'bg-gray-50 hover:bg-gray-100 group-hover:bg-white/20 group-hover:hover:bg-white/30'
            }
          `}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-700 group-hover:text-white'} transition-colors duration-500`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </button>
      </div>

      {/* Count */}
      <div className={`text-5xl font-bold mb-4 ${isActive ? 'text-white' : 'text-gray-900 group-hover:text-white'} transition-colors duration-500`}>
        {count}
      </div>

      {/* Percentage increase */}
      <div className="flex items-center gap-1.5">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor" 
          className={`w-3.5 h-3.5 ${isActive ? 'text-white/80' : 'text-purple-500 group-hover:text-white/80'} transition-colors duration-500`}
        >
          <path fillRule="evenodd" d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z" clipRule="evenodd" />
        </svg>
        <span className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500 group-hover:text-white/80'} transition-colors duration-500`}>
          {percentage} Increase From Last Month
        </span>
      </div>
    </div>
  );
}