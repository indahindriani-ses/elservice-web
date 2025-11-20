import { useState } from 'react';
import NotifBuatAkunTeknisi from '../notif/notifBuatAkunTeknisi';

export default function FormBuatAkunTeknisi({ teknisi, onClose }) {
  const [showNotif, setShowNotif] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form buat akun teknisi submitted");
    setShowNotif(true);
  };

  const handleCloseNotif = () => {
    setShowNotif(false);
    onClose();
  };

  return (
    <>
      <div className="bg-white rounded-2xl p-8 shadow-lg max-w-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Buat Akun untuk Teknisi</h2>
        <p className="text-sm text-gray-600 mb-8">Buat akun login untuk {teknisi?.name || "Fira"}</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
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
              defaultValue={teknisi?.email || "Fira@gmail.com"}
              className="w-full px-4 py-2.5 bg-gray-200 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 text-sm"
              placeholder="Fira@gmail.com"
            />
          </div>

          {/* Username */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <label className="text-sm font-semibold text-gray-900">
                Username
              </label>
            </div>
            <input
              type="text"
              defaultValue={teknisi?.name || "Fira"}
              className="w-full px-4 py-2.5 bg-gray-200 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 text-sm"
              placeholder="Fira"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <label className="text-sm font-semibold text-gray-900">
                Password
              </label>
            </div>
            <input
              type="password"
              className="w-full px-4 py-2.5 bg-gray-200 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 text-sm"
              placeholder="shfusgfufyg"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors text-sm"
            >
              Tutup
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

      {/* Notifikasi Buat Akun Teknisi */}
      {showNotif && (
        <NotifBuatAkunTeknisi onClose={handleCloseNotif} />
      )}
    </>
  );
}