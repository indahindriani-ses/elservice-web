export default function ContentProductLayout({ children }) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-gray-100 p-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Product Management</h1>
        <p className="mt-1 text-gray-500">Manage and monitor all your products</p>
        
        {/* Product content di sini */}
        <div className="mt-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-600">Product content will go here...</p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}