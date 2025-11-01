export default function LoginLayout({ children }) {
  return (
    <div
      className="flex min-h-screen p-2"
      style={{ backgroundColor: "rgba(181, 160, 209, 1)" }}
    >
      <div className="hidden md:flex w-1/2 relative">
        <img
          src="/images/Rectangle.png"
          alt="Login visual"
          className="object-cover w-full h-full rounded-tr-[80px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center flex-1 p-8">
        <div className="max-w-md w-full">{children}</div>
      </div>
    </div>
  );
}
