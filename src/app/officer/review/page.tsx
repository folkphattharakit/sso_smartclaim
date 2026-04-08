"use client"
import { useRouter } from 'next/navigation'
import { pendingClaims } from '@/lib/mocData'
import { ChevronRight, ShieldCheck, Search, User, Bell, Filter } from 'lucide-react'

export default function ReviewPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header เดิมของคุณ */}
        <div className="mb-8">
          <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
            <span className="text-slate-400">เจ้าหน้าที่</span> 
            <ChevronRight className="w-3 h-3 text-orange-500"/> 
            <span className="text-orange-500">ตรวจสอบเอกสาร</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-black text-white tracking-tighter">ตรวจสอบคำร้อง</h1>
              <p className="text-slate-400 text-sm font-medium mt-1">คำร้องที่รอการตรวจสอบความถูกต้องจาก AI และ Consent</p>
            </div>
            {/* เพิ่มช่องค้นหาให้ดูเต็มรูปแบบขึ้น */}
            <div className="relative w-64 hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="ค้นหาเลขที่คำร้อง..." 
                className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-2xl text-sm text-white outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all backdrop-blur-md" 
              />
            </div>
          </div>
        </div>

        {/* Table เดิมของคุณแบบครบถ้วน */}
        <div className="bg-slate-900/40 backdrop-blur-xl rounded-[32px] border border-slate-800 shadow-2xl overflow-hidden">
          {/* Header ตาราง */}
          <div className="grid grid-cols-12 gap-4 p-6 bg-slate-800/30 border-b border-slate-800 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">
            <div className="col-span-3 text-left pl-4">เลขที่คำร้อง</div>
            <div className="col-span-3 text-left">ผู้ประกันตน</div>
            <div className="col-span-2">ประเภท</div>
            <div className="col-span-2">จำนวนเงิน</div>
            <div className="col-span-2">สถานะ AI</div>
          </div>

          <div className="divide-y divide-slate-800/50">
            {pendingClaims.map((claim) => (
              <div 
                key={claim.id}
                onClick={() => router.push(`/officer/${claim.id}`)}
                className="grid grid-cols-12 gap-4 p-6 items-center hover:bg-orange-500/[0.03] cursor-pointer transition-all group"
              >
                <div className="col-span-3 pl-4">
                  <span className="font-black text-blue-400 group-hover:text-orange-500 transition-colors tracking-tight">{claim.id}</span>
                </div>
                
                <div className="col-span-3">
                  <p className="font-black text-white text-sm tracking-tight">{claim.user}</p>
                  {/* ส่วนที่แก้ไข: เช็คว่าเป็น Proxy หรือ Self */}
                  {claim.isProxy ? (
                    <span className="inline-flex items-center gap-1 text-[9px] font-black bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded-full mt-1 border border-purple-500/20 uppercase tracking-tighter">
                      <ShieldCheck className="w-3 h-3" /> Proxy Claim
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[9px] font-black bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full mt-1 border border-blue-500/20 uppercase tracking-tighter">
                      <User className="w-3 h-3" /> Self Claim
                    </span>
                  )}
                </div>

                <div className="col-span-2 text-center">
                  <span className="text-[11px] text-slate-400 font-black uppercase tracking-wide">{claim.type.split(' ')[0]}</span>
                </div>

                <div className="col-span-2 text-center">
                  <span className="font-black text-white text-base tracking-tighter">฿{claim.amount.toLocaleString()}</span>
                </div>

                <div className="col-span-2 flex justify-center">
                  <div className={`px-3 py-1.5 rounded-full text-[10px] font-black flex items-center gap-2 border ${
                    claim.aiConfidence > 90 
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                    : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${claim.aiConfidence > 90 ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-amber-500'} animate-pulse`}></span>
                    MATCH {claim.aiConfidence}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info (เพิ่มเติมเพื่อให้ UI ดูเต็มแบบหน้าหลัก) */}
        <div className="mt-6 flex justify-between items-center px-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Showing {pendingClaims.length} pending requests</p>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-orange-500 cursor-pointer transition-colors">
              <Filter size={14}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}