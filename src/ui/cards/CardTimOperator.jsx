import { useState } from 'react';

export default function CardTimOperator() {
  const [isActive, setIsActive] = useState(false);

  const operators = [
    {
      id: 1,
      name: "Azka Ghalib abdab",
      company: "PT Sukamaju",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Azka"
    },
    {
      id: 2,
      name: "Alzahran Shafwan A.",
      company: "PT Kemas Cepat",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alzahran"
    },
    {
      id: 3,
      name: "Indah Indriani",
      company: "PT Sekar Wangi",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Indah"
    },
    {
      id: 4,
      name: "Raisya nur aisyah",
      company: "PT Polikternaga",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raisya"
    },
    {
      id: 5,
      name: "Milo kusuma B.",
      company: "PT Cahaya Jumida",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Milo"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm" style={{ height: '350px' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Tim Operator</h2>
        <button 
          onClick={() => setIsActive(!isActive)}
          className={`flex items-center gap-2 px-4 py-2 border-2 rounded-full transition-colors ${
            isActive 
              ? 'border-gray-900 bg-gray-900 text-white' 
              : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          <span className="font-semibold">New</span>
        </button>
      </div>

      {/* Operator List */}
      <div className="space-y-4 overflow-y-auto" style={{ maxHeight: '260px' }}>
        {operators.map((operator) => (
          <div key={operator.id} className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
              <img 
                src={operator.avatar} 
                alt={operator.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold text-gray-900 truncate">
                {operator.name}
              </h3>
              <p className="text-sm text-gray-500 truncate">
                Working on <span className="font-semibold">{operator.company}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}