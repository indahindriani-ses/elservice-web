export default function CardTotalPemasukanPengeluaran() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Card Total Pemasukan */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Total Pemasukan</h3>
        
        <div className="text-3xl font-bold text-gray-900 mb-6">
          Rp. xxx.xxx.xxx,xx
        </div>

        {/* Wave Chart - Purple Gradient */}
        <div className="relative h-20 overflow-hidden">
          <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#e879f9" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#f5f3ff" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            
            {/* Wave Path */}
            <path
              d="M0,60 C50,40 100,70 150,50 C200,30 250,60 300,45 C350,30 380,50 400,40 L400,100 L0,100 Z"
              fill="url(#purpleGradient)"
            />
            
            {/* Top Wave Line */}
            <path
              d="M0,60 C50,40 100,70 150,50 C200,30 250,60 300,45 C350,30 380,50 400,40"
              fill="none"
              stroke="#a855f7"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>

      {/* Card Total Pengeluaran */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Total Pengeluaran</h3>
        
        <div className="text-3xl font-bold text-gray-900 mb-6">
          Rp. xxx.xxx.xxx,xx
        </div>

        {/* Wave Chart - Red/Pink Gradient */}
        <div className="relative h-20 overflow-hidden">
          <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fb7185" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#fda4af" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#fff1f2" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            
            {/* Wave Path */}
            <path
              d="M0,55 C50,35 100,65 150,45 C200,25 250,55 300,40 C350,25 380,45 400,35 L400,100 L0,100 Z"
              fill="url(#redGradient)"
            />
            
            {/* Top Wave Line */}
            <path
              d="M0,55 C50,35 100,65 150,45 C200,25 250,55 300,40 C350,25 380,45 400,35"
              fill="none"
              stroke="#f43f5e"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}