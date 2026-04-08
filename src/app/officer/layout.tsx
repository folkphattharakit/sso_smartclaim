import OfficerSidebar from "@/components/OfficerSidebar"

export default function OfficerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      {/* Sidebar จะอยู่ทางซ้ายเสมอ */}
      <OfficerSidebar />
      
      {/* พื้นที่สำหรับเนื้อหาหลัก (Dashboard, Review Page) */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}