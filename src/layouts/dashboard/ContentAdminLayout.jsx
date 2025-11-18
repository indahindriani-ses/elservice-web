import CardCountServices from "../../ui/cards/CardCountServices";
import CardLaporanMingguan from "../../ui/cards/CardLaporanMingguan";
import CardReminders from "../../ui/cards/CardReminders";
import CardTimOperator from "../../ui/cards/CardTimOperator";
import CardTotalPemasukanPengeluaran from "../../ui/cards/CardTotalPemasukanPengeluaran";
import CardClockLocation from "../../ui/cards/CardClockLocation";

export default function ContentAdminLayout({ children }) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-gray-100 p-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Dashboard</h1>
        <p className="mt-1 text-gray-500">Plan, prioritize, and accomplish your tasks with ease</p>
        
        {/* 4 Card Stats */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CardCountServices title="Total Service" count={24} percentage="7%" />
          <CardCountServices title="Ended Service" count={17} percentage="7%" />
          <CardCountServices title="Running Service" count={10} percentage="7%" />
          <CardCountServices title="Delay Service" count={4} percentage="7%" />
        </div>
        
        {/* Laporan Mingguan (2 kolom), Reminders (1 kolom), Tim Operator (1 kolom) */}
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <CardLaporanMingguan />
          </div>
          <div className="lg:col-span-1">
            <CardReminders />
          </div>
          <div className="lg:col-span-1">
            <CardTimOperator />
          </div>
        </div>

        {/* Total Pemasukan & Pengeluaran (3 kolom) + Clock Location (1 kolom) */}
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <CardTotalPemasukanPengeluaran />
          </div>
          <div className="lg:col-span-1">
            <CardClockLocation />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}