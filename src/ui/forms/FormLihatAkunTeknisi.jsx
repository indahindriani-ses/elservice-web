import { useState } from 'react';
import NotifUpdateTeknisi from '../notif/notifUpdateTeknisi';

export default function FormLihatAkunTeknisi({ teknisi, onClose }) {
  const [showNotif, setShowNotif] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Simpan perubahan teknisi");
    setShowNotif(true);
  };

  const handleCloseNotif = () => {
    setShowNotif(false);
    onClose();
  };

  return (
    <>
      <div className="bg-white rounded-2xl p-8 shadow-lg max-w-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Detail Teknisi</h2>
        <p className="text-sm text-gray-600 mb-8">Informasi dan edit data teknisi</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* ... semua field input yang sudah ada ... */}
          
          {/* Nama Lengkap */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              defaultValue={teknisi?.name || "Budi Santoso"}
              className="w-full px-4 py-2.5 bg-gray-200 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <label className="text-sm font-semibold text-gray-900">
                Email
              </label>
            </div>
            <input
              type="email"
              defaultValue={teknisi?.email || "BudiSantoso@gmail.com"}
              className="w-full px-4 py-2.5 bg-gray-200 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 text-sm"
            />
          </div>

          {/* Nomor Telepon */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <label className="text-sm font-semibold text-gray-900">
                Nomor Telepon
              </label>
            </div>
            <input
              type="tel"
              defaultValue="shfusgfufyg"
              className="w-full px-4 py-2.5 bg-gray-200 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 text-sm"
            />
          </div>

          {/* Cabang */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Cabang
            </label>
            <input
              type="text"
              defaultValue="Cabang Jakarta Pusat"
              className="w-full px-4 py-2.5 bg-gray-200 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 text-sm"
            />
          </div>

          {/* Alamat */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Alamat
            </label>
            <input
              type="text"
              defaultValue="dhsdgfhshfd"
              className="w-full px-4 py-2.5 bg-gray-200 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 text-sm"
            />
          </div>

          {/* Tanggal Dibuat & Diperbarui */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Dibuat: 2025-01-15</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Diperbarui: 2025-01-16</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors text-sm"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-8 py-2 bg-purple-500 text-white font-medium rounded-full hover:bg-purple-600 transition-colors text-sm"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>

      {/* Notifikasi Update Teknisi */}
      {showNotif && (
        <NotifUpdateTeknisi onClose={handleCloseNotif} />
      )}
    </>
  );
}