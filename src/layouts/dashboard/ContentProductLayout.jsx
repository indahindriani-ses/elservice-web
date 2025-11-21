import { useState } from "react";
import ProductTableHeader from "../../ui/product/ProductTableHeader";
import CardMerekProduct from "../../ui/cards/CardMerekProduct";
import CardAlatProduct from "../../ui/cards/CardAlatProduct";
import CardSparepartProduct from "../../ui/cards/CardSparepartProduct";

export default function ContentProductLayout({ children }) {
  const [currentView, setCurrentView] = useState("brand");

  const handleFilterChange = (filter) => {
    setCurrentView(filter);
  };

  const renderContent = () => {
    switch (currentView) {
      case "brand":
        return <CardMerekProduct />;
      case "alat":
        return <CardAlatProduct />;
      case "sparepart":
        return <CardSparepartProduct />;
      default:
        return <CardMerekProduct />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-gray-100 p-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Product Management</h1>
        <p className="mt-1 text-gray-500">Manage and monitor all your products</p>
        
        {/* Product Table Header */}
        <div className="mt-4">
          <ProductTableHeader 
            onFilterChange={handleFilterChange}
            currentFilter={currentView}
          />
        </div>

        {/* Dynamic Content based on selected filter */}
        <div className="mt-4">
          {renderContent()}
        </div>
      </div>
      {children}
    </div>
  );
}