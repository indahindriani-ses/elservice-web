import { useState } from "react";
import TeknisiTableHeader from "../../ui/teknisi/TeknisiTableHeader";
import CardTeknisi, { sampleTeknisi } from "../../ui/cards/CardTeknisi";
import Pagination from "../../ui/teknisi/Pagination";

export default function ContentTeknisiLayout({ children }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Sesuaikan dengan jumlah card per halaman
  
  // Hitung total pages
  const totalPages = Math.ceil(sampleTeknisi.length / itemsPerPage);
  
  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTeknisi = sampleTeknisi.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStatusAkun = (teknisi) => {
    if (teknisi.hasAccount) {
      console.log("Lihat akun teknisi:", teknisi.namaTeknisi);
      // Logic untuk lihat akun
    } else {
      console.log("Buat akun untuk teknisi:", teknisi.namaTeknisi);
      // Logic untuk buat akun
    }
  };

  const handleDelete = (teknisiId) => {
    console.log("Delete teknisi:", teknisiId);
    // Logic untuk delete
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gray-100 p-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Manage Teknisi</h1>
        
        {/* Search Header */}
        <div className="mt-6">
          <TeknisiTableHeader />
        </div>
        
        {/* Teknisi Cards Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentTeknisi.map((teknisi, index) => (
            <CardTeknisi
              key={teknisi.id}
              number={indexOfFirstItem + index + 1}
              namaTeknisi={teknisi.namaTeknisi}
              cabang={teknisi.cabang}
              hasAccount={teknisi.hasAccount}
              onStatusAkun={() => handleStatusAkun(teknisi)}
              onDelete={() => handleDelete(teknisi.id)}
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      {children}
    </div>
  );
}