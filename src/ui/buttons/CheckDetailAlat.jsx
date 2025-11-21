import { useState } from 'react';
import FormDetailAlatAktif from '../forms/FormDetailAlatAktif';
import FormDetailAlatNonAktif from '../forms/FormDetailAlatNonAktif';

export default function CheckDetailAlat({ isActive, onClick }) {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <>
      <button 
        onClick={handleClick}
        className="w-full py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Check Detail
      </button>

      {/* Modal Form - berbeda berdasarkan status */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleClose}>
          <div className="max-w-2xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            {isActive ? (
              <FormDetailAlatAktif onClose={handleClose} />
            ) : (
              <FormDetailAlatNonAktif onClose={handleClose} />
            )}
          </div>
        </div>
      )}
    </>
  );
}