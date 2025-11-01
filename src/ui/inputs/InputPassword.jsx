export default function InputPassword({ label, value, onValueChange, placeholder = "" }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type="password"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 placeholder-gray-400 bg-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-colors"
      />
    </div>
  );
}