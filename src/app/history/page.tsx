"use client";
import React from 'react';
// แก้ไขจาก '@/components/Sidebar' เป็นการถอยหลังกลับไปหาโฟลเดอร์ components โดยตรงเพื่อแก้ Error
import Sidebar from '../../components/Sidebar'; 
import { 
  Download, Filter, FileText, CheckCircle2, 
  Clock, AlertCircle, ChevronRight, XCircle
} from 'lucide-react';

export default function HistoryPage() {
  // ข้อมูลประวัติการรับสิทธิประโยชน์
  const historyData = [
    { id: "SSO-2025-0045", type: "เงินทดแทนกรณีว่างงาน", amount: 15000, date: "12 มี.ค. 2568", status: "pending" },
    { id: "SSO-2025-0042", type: "เบิกค่ารักษาพยาบาล", amount: 3200, date: "10 มี.ค. 2568", status: "success" },
    { id: "SSO-2025-0040", type: "สงเคราะห์บุตร", amount: 800, date: "7 มี.ค. 2568", status: "success" },
    { id: "SSO-2025-0038", type: "ค่าตรวจสุขภาพประจำปี", amount: 1200, date: "3 มี.ค. 2568", status: "rejected" },
    { id: "SSO-2025-0035", type: "เงินทดแทนกรณีชราภาพ", amount: 45000, date: "1 มี.ค. 2568", status: "success" },
  ];

  // คำนวณจำนวนรายการตามสถานะ
  const stats = {
    success: historyData.filter(item => item.status === 'success').length,
    pending: historyData.filter(item => item.status === 'pending').length,
    rejected: historyData.filter(item => item.status === 'rejected').length,
  };

  // ฟังก์ชันช่วยเลือกสีและข้อความตามสถานะ
  const renderStatus = (status: string) => {
    switch (status) {
      case 'success':
        return (
          <span className="bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-[11px] font-black border border-green-100 uppercase tracking-wider flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3" /> จ่ายเงินสำเร็จ
          </span>
        );
      case 'pending':
        return (
          <span className="bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full text-[11px] font-black border border-amber-100 uppercase tracking-wider flex items-center gap-1.5">
            <Clock className="w-3 h-3" /> รอดำเนินการ
          </span>
        );
      case 'rejected':
        return (
          <span className="bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-[11px] font-black border border-red-100 uppercase tracking-wider flex items-center gap-1.5">
            <AlertCircle className="w-3 h-3" /> ไม่ผ่านอนุมัติ
          </span>
        );
      default:
        return status;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar activeMenu="history" /> 
      
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">ประวัติการรับสิทธิประโยชน์</h1>
              <p className="text-slate-500 font-medium mt-1">ตรวจสอบและดาวน์โหลดเอกสารย้อนหลังของคุณ</p>
            </div>
            <button className="flex items-center gap-2 bg-white border border-slate-200 px-5 py-2.5 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
              <Download className="w-4 h-4 text-[#FF6B00]" />
              ส่งออกรายงาน (CSV)
            </button>
          </div>

          {/* สรุปยอด (Stats) - ปรับโชว์เฉพาะจำนวนรายการตามสถานะ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-green-600">
                  <CheckCircle2 className="w-16 h-16" />
               </div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">สำเร็จแล้ว</p>
              <h3 className="text-3xl font-black text-green-600">{stats.success} รายการ</h3>
            </div>
            
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-amber-500">
                  <Clock className="w-16 h-16" />
               </div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">รอดำเนินการ</p>
              <h3 className="text-3xl font-black text-amber-500">{stats.pending} รายการ</h3>
            </div>

            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-red-500">
                  <XCircle className="w-16 h-16" />
               </div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">ไม่ผ่านอนุมัติ</p>
              <h3 className="text-3xl font-black text-red-500">{stats.rejected} รายการ</h3>
            </div>
          </div>

          {/* Table Area */}
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-white">
              <h4 className="font-bold text-slate-800 text-lg">รายการสิทธิประโยชน์ทั้งหมด</h4>
              <button className="p-2 text-slate-400 hover:text-[#FF6B00] hover:bg-orange-50 rounded-xl transition-all">
                <Filter className="w-5 h-5" />
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50/50">
                  <tr>
                    <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-[0.15em]">เลขที่คำร้อง</th>
                    <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-[0.15em]">ประเภทรายการ</th>
                    {/* ลบคอลัมน์จำนวนเงินออกตามความต้องการ */}
                    <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-[0.15em]">วันที่ทำรายการ</th>
                    <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-[0.15em] text-center">สถานะ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {historyData.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                      <td className="px-8 py-6">
                        <span className="font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors">{item.id}</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="text-sm font-bold text-slate-800">{item.type}</div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-0.5">SSO SmartClaim System</div>
                      </td>
                      {/* ลบช่องแสดงจำนวนเงินออก */}
                      <td className="px-8 py-6">
                        <div className="text-sm font-medium text-slate-500">{item.date}</div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex justify-center">
                          {renderStatus(item.status)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Table Footer */}
            <div className="p-6 bg-slate-50/30 border-t border-slate-50 text-center">
               <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">สิ้นสุดข้อมูลประวัติย้อนหลัง • ข้อมูลอัปเดตล่าสุดวันนี้</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}