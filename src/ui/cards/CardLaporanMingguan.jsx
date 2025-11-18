export default function CardLaporanMingguan() {
  const weekData = [
    { day: 'S', date: '1 Jan', value: 60, pattern: true, active: false },
    { day: 'M', date: '2 Jan', value: 85, pattern: true, active: false },
    { day: 'T', date: '3 Jan', value: 45, pattern: true, active: false },
    { day: 'W', date: '4 Jan', value: 70, pattern: false, active: false, color: 'bg-purple-500' },
    { day: 'T', date: '5 Jan', value: 95, pattern: false, active: true, color: 'bg-purple-400' },
    { day: 'F', date: '6 Jan', value: 55, pattern: false, active: false, color: 'bg-purple-900' },
    { day: 'S', date: '7 Jan', value: 75, pattern: true, active: false }
  ];

  const maxValue = Math.max(...weekData.map(d => d.value));

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm" style={{ height: '350px' }}>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Laporan Mingguan</h2>
      </div>

      <div className="relative" style={{ height: '240px' }}>
        <div className="flex items-end justify-between gap-3 h-full pb-12">
          {weekData.map((item, index) => {
            const heightPercent = (item.value / maxValue) * 100;
            
            return (
              <div key={index} className="flex flex-col items-center justify-end flex-1 h-full relative">
                {/* Badge Percentage */}
                {item.active && (
                  <div className="absolute top-0 bg-purple-200 px-2.5 py-1 rounded-lg">
                    <span className="text-xs font-bold text-purple-700">{item.value}%</span>
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-purple-200"></div>
                  </div>
                )}
                
                {/* Bar Container */}
                <div className="flex flex-col items-center justify-end w-full" style={{ height: 'calc(100% - 50px)' }}>
                  {/* Pill-shaped Bar */}
                  <div 
                    className="w-full max-w-[60px] relative overflow-hidden transition-all duration-300"
                    style={{ 
                      height: `${heightPercent}%`,
                      minHeight: '35px',
                      borderRadius: '100px'
                    }}
                  >
                    {item.pattern ? (
                      <div 
                        className="w-full h-full"
                        style={{
                          background: `repeating-linear-gradient(
                            -45deg,
                            #581c87,
                            #581c87 6px,
                            #f3e8ff 6px,
                            #f3e8ff 12px
                          )`
                        }}
                      />
                    ) : (
                      <div className={`w-full h-full ${item.color}`} />
                    )}
                  </div>
                </div>

                {/* Day Label */}
                <div className="mt-3 text-center">
                  <div className="text-base font-bold text-gray-900">{item.day}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{item.date}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}