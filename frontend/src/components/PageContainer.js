export default function PageContainer({ children }) {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-8 flex-grow">
      {children}
    </div>
  );
}
