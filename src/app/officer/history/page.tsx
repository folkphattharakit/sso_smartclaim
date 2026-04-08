"use client"
import { useRouter } from 'next/navigation'
import { activityLogs } from '@/lib/mocData'
import { ChevronRight, History, Search, FileText, CheckCircle, XCircle, Info, Filter, Calendar } from 'lucide-react'

export default function HistoryPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
            <span className="text-slate-400">เจ้าหน้าที่</span> 
            <ChevronRight className="w-3 h-3 text-orange-500"/> 
            <span className="text-orange-600">ประวัติการดำเนินการ</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-black text-white tracking-tighter">ประวัติการดำเนินการ</h1>
              <p className="text-slate-400 text-sm font-medium mt-1">บันทึกการอนุมัติ ปฏิเสธ และการแก้ไขข้อมูลทั้งหมดในระบบ</p>
            </div>
            <div className="relative w-64 hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="ค้นหาเลขที่คำร้อง..." 
                className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-2xl text-sm text-white outline-none focus:border-orange-500/50 transition-all backdrop-blur-md" 
              />
            </div>
          </div>
        </div>

        {/* History Table */}
        <div className="bg-slate-900/40 backdrop-blur-xl rounded-[32px] border border-slate-800 shadow-2xl overflow-hidden">
          {/* Header ตาราง */}
          <div className="grid grid-cols-12 gap-4 p-6 bg-slate-800/30 border-b border-slate-800 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">
            <div className="col-span-2 text-left pl-4">วัน-เวลา</div>
            <div className="col-span-2 text-left">เลขที่คำร้อง</div>
            <div className="col-span-3 text-left">ผู้ประกันตน</div>
            <div className="col-span-2">การดำเนินการ</div>
            <div className="col-span-3 text-left">หมายเหตุ</div>
          </div>

          <div className="divide-y divide-slate-800/50">
            {activityLogs.map((log) => (
              <div key={log.id} className="grid grid-cols-12 gap-4 p-6 items-center hover:bg-orange-500/[0.03] transition-all group">
                <div className="col-span-2 pl-4">
                  <p className="text-sm font-black text-white tracking-tight">{log.date}</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">{log.time} น.</p>
                </div>
                
                <div className="col-span-2">
                  <span className="text-sm font-black text-blue-400 group-hover:text-orange-500 transition-colors tracking-tight">{log.claimId}</span>
                </div>
                
                <div className="col-span-3">
                  <p className="text-sm font-black text-slate-200 tracking-tight">{log.user}</p>
                  <p className="text-[10px] text-slate-500 font-black uppercase mt-0.5">ผู้ตรวจสอบ: {log.officer}</p>
                </div>

                <div className="col-span-2 flex justify-center">
                  <span className={`px-3 py-1.5 rounded-full text-[10px] font-black flex items-center gap-2 border uppercase tracking-tighter ${
                    log.action === 'Approved' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                    log.action === 'Rejected' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' :
                    'bg-blue-500/10 text-blue-400 border-blue-500/20'
                  }`}>
                    {log.action === 'Approved' && <CheckCircle className="w-3 h-3" />}
                    {log.action === 'Rejected' && <XCircle className="w-3 h-3" />}
                    {log.action === 'Requested Info' && <Info className="w-3 h-3" />}
                    {log.action}
                  </span>
                </div>

                <div className="col-span-3">
                  <p className="text-[11px] text-slate-400 italic line-clamp-1 group-hover:text-slate-300 transition-colors font-medium">"{log.note}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table Footer */}
        <div className="mt-6 flex justify-between items-center px-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Total logs analyzed: {activityLogs.length}</p>
          <div className="flex gap-2 text-slate-500">
             <Calendar size={14} className="hover:text-orange-500 cursor-pointer transition-colors"/>
             <Filter size={14} className="hover:text-orange-500 cursor-pointer transition-colors"/>
          </div>
        </div>
      </div>
    </div>
  )
}