export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <main className="flex-grow flex">
        {children}
      </main>
      <footer className="shrink-0 bg-gray-100 py-4 text-center">
        <div className="text-blue-800 text-3xl">★</div>
        <div className="text-red-600 font-bold text-lg tracking-widest">
          BRICOL <span className="text-blue-800">SN</span>
        </div>
      </footer>
    </div>
  );
}
