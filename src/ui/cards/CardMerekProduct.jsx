import AddMerek from "../buttons/AddMerek";

export default function CardMerekProduct() {
  const handleAddMerek = () => {
    console.log("Add Merek clicked");
    // Logic untuk add merek
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Brand Dialog</h2>
        <AddMerek onClick={handleAddMerek} />
      </div>
      <p className="text-gray-600">Card Merek Product content will go here...</p>
    </div>
  );
}