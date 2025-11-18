export default function CardReminders() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col" style={{ height: '350px' }}>
      <h2 className="text-xl font-bold text-gray-900 mb-8">Reminders</h2>
      
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 leading-tight px-4">
          Meeting with El Service
        </h3>
        
        <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
          </svg>
          <span>Start Meeting</span>
        </button>
      </div>
    </div>
  );
}