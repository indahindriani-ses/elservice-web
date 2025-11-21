import { useState } from "react";
import CheckDetailAlat from "../buttons/CheckDetailAlat";
import DeleteAlat from "../buttons/DeleteAlat";

export default function CardAlatProduct({ 
  imageSrc, 
  namaAlat = "Nama Alat", 
  jenisAlat = "Mesin Cuci Front Load",
  isActive = true,
  onCheckDetail,
  onDelete
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked);
  };

  // Tentukan warna border dan shadow berdasarkan status
  const getBorderColor = () => {
    if (isClicked) {
      return isActive ? 'border-blue-500' : 'border-red-500';
    }
    return 'border-gray-300';
  };

  const getShadowColor = () => {
    if (isClicked) {
      return isActive ? 'shadow-[0_8px_0_0_rgb(59,130,246)]' : 'shadow-[0_8px_0_0_rgb(239,68,68)]';
    }
    return 'shadow-sm';
  };

  return (
    <div 
      onClick={handleCardClick}
      className={`bg-white rounded-2xl border-2 ${getBorderColor()} ${getShadowColor()} hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden`}
    >
      {/* Image Container */}
      <div className="relative">
        <img 
          src={imageSrc || "https://via.placeholder.com/400x200"} 
          alt={namaAlat}
          className="w-full h-48 object-cover"
        />
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 ${
            isActive 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-400 text-white'
          }`}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {isActive ? 'Aktif' : 'Non- aktif'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Nama Alat & Jenis Alat */}
        <div className="mb-4">
          <h3 className="text-base font-bold text-gray-900 mb-2">{namaAlat}</h3>
          <div className="px-3 py-2 bg-purple-100 border border-purple-300 rounded-lg text-sm text-gray-700 text-center">
            {jenisAlat}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <div onClick={(e) => e.stopPropagation()} className="flex-1">
            <CheckDetailAlat 
              isActive={isActive}
              onClick={() => onCheckDetail(isActive)}
            />
          </div>
          <div onClick={(e) => e.stopPropagation()}>
            <DeleteAlat onClick={onDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Sample data untuk testing
export const sampleAlat = [
  { id: 1, namaAlat: "Nama Alat", jenisAlat: "Mesin Cuci Front Load", isActive: true, imageSrc: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400" },
  { id: 2, namaAlat: "Nama Alat", jenisAlat: "Kulkas 2 Pintu", isActive: true, imageSrc: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400" },
  { id: 3, namaAlat: "Nama Alat", jenisAlat: "AC Split 1 PK", isActive: true, imageSrc: "https://images.unsplash.com/photo-1631545806609-71f0e8046f29?w=400" },
  { id: 4, namaAlat: "Nama Alat", jenisAlat: "Rice Cooker", isActive: false, imageSrc: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400" },
  { id: 5, namaAlat: "Nama Alat", jenisAlat: "Kipas Angin", isActive: false, imageSrc: "https://images.unsplash.com/photo-1614252368530-e5ffae845ad1?w=400" },
  { id: 6, namaAlat: "Nama Alat", jenisAlat: "Microwave", isActive: true, imageSrc: "https://images.unsplash.com/photo-1585659722417-c5c6e82e60c9?w=400" },
  { id: 7, namaAlat: "Nama Alat", jenisAlat: "Televisi", isActive: false, imageSrc: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400" },
  { id: 8, namaAlat: "Nama Alat", jenisAlat: "Dispenser", isActive: true, imageSrc: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400" },
  { id: 9, namaAlat: "Nama Alat", jenisAlat: "Oven", isActive: true, imageSrc: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400" },
];