export default function FormDetailAlatAktif({ onClose }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Detail Alat (Aktif)</h2>
      <p>Form untuk alat dengan status aktif...</p>
      <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-200 rounded-lg">Tutup</button>
    </div>
  );
}