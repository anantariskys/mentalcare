import Navbar from "@/components/Navbar";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8F2F2] flex flex-col font-sans">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-[#5B5D83] text-white text-center py-4">
        <div className="max-w-screen-xl mx-auto px-4">
          <p>&copy; Copyright2025</p>
        </div>
      </footer>
    </div>
  );
}
