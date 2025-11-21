import AddSparepart from "../buttons/AddSparepart";

export default function CardSparepartProduct() {
  const handleAddSparepart = () => {
    console.log("Add Sparepart clicked");
    // Logic untuk add sparepart
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Manage Sperpart</h2>
        <AddSparepart onClick={handleAddSparepart} />
      </div>
      <p className="text-gray-600">Card Sparepart Product content will go here...</p>
    </div>
  );
}