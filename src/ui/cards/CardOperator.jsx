export default function CardOperator({
  index = 1,
  name = "Ahmad Rahman",
  hasAccount = true,
  onPrimary,
  onDelete,
}) {
  const statusText = hasAccount ? "Punya akun" : "Belum punya Akun";
  const statusColor = hasAccount ? "bg-green-500" : "bg-gray-500";
  const primaryText = hasAccount ? "Lihat Akun" : "Buat Akun";

  return (
    <div className="relative w-full rounded-xl border border-gray-300 bg-white p-5 shadow-sm">
      <div className="absolute left-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-gray-700 text-sm font-semibold text-gray-800">
        {index}
      </div>

      <div className={`absolute right-3 top-3 rounded-md px-3 py-1 text-xs font-semibold text-white ${statusColor}`}>
        {statusText}
      </div>

      <div className="mt-8 mb-6 text-gray-900">
        {name.split(" ").length > 1 ? (
          <>
            <div className="text-xl font-semibold leading-tight">{name.split(" ")[0]}</div>
            <div className="text-xl font-semibold leading-tight">{name.split(" ").slice(1).join(" ")}</div>
          </>
        ) : (
          <div className="text-xl font-semibold leading-tight">{name}</div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onPrimary}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-gray-300/80 bg-white text-base font-semibold text-purple-500 hover:bg-purple-50 active:scale-[0.99]"
        >
          {hasAccount ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm-7 8a7 7 0 0 1 14 0 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z" />
              <path d="M19 8h-3a1 1 0 0 1 0-2h3V3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm7-2a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 1-1Z" />
              <path d="M5 20a7 7 0 0 1 9.33-6.62 1 1 0 1 1-.66 1.89A5 5 0 0 0 7 20a1 1 0 0 1-2 0Z" />
            </svg>
          )}
          {primaryText}
        </button>

        <button
          type="button"
          onClick={onDelete}
          aria-label="Hapus"
          className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300/80 bg-white text-red-600 hover:bg-red-50 active:scale-[0.99]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M9 3a1 1 0 0 0-1 1v1H4a1 1 0 0 0 0 2h1v12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V7h1a1 1 0 0 0 0-2h-4V4a1 1 0 0 0-1-1Zm2 4a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1Zm5 1a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}