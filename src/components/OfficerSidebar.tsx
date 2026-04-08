"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// นำเข้าไอคอน History เพิ่มเติม
import { LayoutDashboard, FileSearch, CheckSquare, History, LogOut, Building2 } from 'lucide-react'
import { pendingClaims } from '@/lib/mocData'

export default function OfficerSidebar() {
  const pathname = usePathname()
  const pendingCount = pendingClaims.length

  const menuItems = [
    { name: 'แดชบอร์ด', href: '/officer', icon: LayoutDashboard },
    { name: 'ตรวจสอบเอกสาร', href: '/officer/review', icon: FileSearch, badge: pendingCount },
    // นำ "อนุมัติคำร้อง" ออกเรียบร้อยแล้ว
    { 
      // แก้ไขจาก "บันทึกข้อผิดพลาด" เป็น "ประวัติการดำเนินการ"
      name: 'ประวัติการดำเนินการ', 
      href: '/officer/history', // ลิงก์ไปยังหน้า history ที่สร้างไว้
      icon: History // เปลี่ยนไอคอนเป็นรูปนาฬิกาย้อนเวลาเพื่อให้สื่อความหมาย
    },
  ]

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0">
      {/* โลโก้และโปรไฟล์ */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-orange-500 p-2 rounded-xl text-white">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-gray-900 leading-tight">SSO Smart Claim</h1>
            <p className="text-[10px] text-gray-500">ระบบประกันสังคม</p>
          </div>
        </div>

        <div className="bg-blue-50/50 p-3 rounded-2xl flex items-center gap-3 border border-blue-100">
          <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-sm">
            ภ
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">เจ้าหน้าที่ นะจ๊ะ</p>
            <p className="text-[10px] text-blue-600 font-semibold">เจ้าหน้าที่ สปส.</p>
          </div>
        </div>
      </div>

      {/* เมนู Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <p className="text-xs font-bold text-gray-400 mb-4 px-2 mt-2">จัดการคำร้อง</p>
        {menuItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                isActive 
                  ? 'bg-orange-50 text-orange-600 font-bold' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className={`w-5 h-5 ${isActive ? 'text-orange-500' : 'text-gray-400'}`} />
                {item.name}
              </div>
              {item.badge && (
                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* ปุ่มออกจากระบบ */}
      <div className="p-4 border-t border-gray-100">
        <button className="w-full flex items-center justify-center gap-2 text-gray-500 hover:text-red-600 font-bold py-3 px-4 rounded-xl hover:bg-red-50 transition-colors text-sm border border-transparent hover:border-red-100">
          <LogOut className="w-5 h-5" />
          ออกจากระบบ
        </button>
      </div>
    </aside>
  )
}