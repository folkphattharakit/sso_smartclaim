// src/components/Sidebar.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  PlusCircle, // เปลี่ยนให้ตรงกับ Dashboard เดิม
  Activity, 
  History, 
  Settings, 
  LogOut 
} from 'lucide-react';

export default function Sidebar({ activeMenu }: { activeMenu?: string }) {
  const pathname = usePathname();

  // ปรับ Path ให้ตรงกับโครงสร้าง Folder ของคุณ
  const menus = [
    { id: 'dashboard', label: 'แดชบอร์ด', path: '/dashboard', icon: LayoutDashboard },
    { id: 'claim', label: 'ยื่นคำขอใหม่', path: '/dashboard', icon: PlusCircle }, // ถ้ายังไม่มี folder แยก ให้ลิงก์กลับ dashboard ก่อน
    { id: 'tracking', label: 'ติดตามสถานะ', path: '/dashboard', icon: Activity },
    { id: 'history', label: 'ประวัติรายการ', path: '/history', icon: History },
    { id: 'profile', label: 'ตั้งค่าโปรไฟล์', path: '#', icon: Settings },
  ];

  return (
    <aside className="w-72 min-h-screen bg-white border-r border-slate-100 flex flex-col p-6 sticky top-0 h-screen">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="bg-orange-500 p-2 rounded-lg text-white shadow-lg shadow-orange-500/20">
          <History className="w-6 h-6" />
        </div>
        <span className="text-xl font-bold text-slate-800 tracking-tight">SSO SmartClaim</span>
      </div>

      <nav className="flex-1 space-y-2">
        {menus.map((menu) => {
          const isActive = activeMenu === menu.id || pathname === menu.path;
          const Icon = menu.icon;
          
          return (
            <Link 
              key={menu.id} 
              href={menu.path}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-medium transition-all ${
                isActive 
                  ? 'bg-orange-50 text-orange-600 font-bold' 
                  : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{menu.label}</span>
            </Link>
          );
        })}
      </nav>

      <button className="mt-auto flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-2xl font-medium transition-all">
        <LogOut className="w-5 h-5" /> ออกจากระบบ
      </button>
    </aside>
  );
}