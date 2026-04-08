"use client"
import { useParams, useRouter } from 'next/navigation'
import { pendingClaims } from '@/lib/mocData'
import ProxyVerificationCard from '@/components/ProxyVerificationCard'
import ActionButtons from '@/components/ActionButtons'
import { ArrowLeft, FileSearch, CheckCircle2, AlertTriangle, ShieldCheck, Activity } from 'lucide-react'

export default function ClaimReviewPage() {
  const params = useParams()
  const router = useRouter()
  
  // จุดนี้สำคัญ: params.claimId ต้องสะกดตรงกับชื่อโฟลเดอร์ [claimId]
  const claim = pendingClaims.find(c => c.id === params.claimId)

  if (!claim) return <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white font-black uppercase tracking-widest">ไม่พบข้อมูลคำร้อง</div>

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-6 flex flex-col">
      {/* Back Button */}
      <button 
        onClick={() => router.back()} 
        className="flex items-center gap-2 text-slate-500 hover:text-orange-500 font-black text-[10px] uppercase tracking-[0.2em] mb-8 w-fit transition-all group"
      >
        <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-orange-500/50">
          <ArrowLeft className="w-4 h-4" />
        </div>
        กลับไปหน้า Dashboard
      </button>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1400px] mx-auto w-full mb-6">
        
        {/* ฝั่งซ้าย: Document Viewer (Glassmorphism) */}
        <div className="bg-slate-900/40 backdrop-blur-xl rounded-[40px] border border-slate-800 p-8 flex flex-col shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 border border-orange-500/20">
              <FileSearch className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white tracking-tight uppercase">เอกสารแนบต้นฉบับ</h2>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Original Document Scanned</p>
            </div>
          </div>
          <div className="flex-1 bg-slate-950/50 rounded-[32px] border-2 border-dashed border-slate-800 flex flex-col items-center justify-center min-h-[500px] group hover:border-orange-500/30 transition-colors">
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-4 text-slate-700 group-hover:text-orange-500 transition-colors">
              <Activity className="w-8 h-8" />
            </div>
            <p className="text-slate-500 font-black text-[10px] uppercase tracking-widest text-center px-10">ภาพสแกนใบรับรองแพทย์ / ใบเสร็จ<br/><span className="text-slate-700 font-medium lowercase">waiting for document renderer...</span></p>
          </div>
        </div>

        {/* ฝั่งขวา: AI Data & Actions */}
        <div className="space-y-6 flex flex-col">
          <div className="bg-slate-900/40 backdrop-blur-xl rounded-[40px] border border-slate-800 p-8 shadow-2xl relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-[60px]"></div>

            <div className="flex justify-between items-start mb-8 border-b border-slate-800 pb-6">
              <div>
                <h2 className="text-3xl font-black text-white tracking-tighter mb-1">{claim.id}</h2>
                <span className="bg-orange-500/10 text-orange-500 text-[10px] font-black px-3 py-1 rounded-full border border-orange-500/20 uppercase tracking-widest">
                  {claim.type}
                </span>
              </div>
              <div className={`px-4 py-2 rounded-2xl flex items-center gap-2 font-black text-[10px] uppercase tracking-widest border ${
                claim.aiConfidence > 90 
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
              }`}>
                {claim.aiConfidence > 90 ? <CheckCircle2 className="w-4 h-4 shadow-[0_0_10px_rgba(16,185,129,0.3)]" /> : <AlertTriangle className="w-4 h-4" />}
                AI Match: {claim.aiConfidence}%
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/30 p-5 rounded-[24px] border border-slate-800/50">
                  <p className="text-[10px] text-slate-500 font-black mb-1 uppercase tracking-widest">ผู้เอาประกัน</p>
                  <p className="text-white font-black tracking-tight">{claim.user}</p>
                </div>
                <div className="bg-slate-800/30 p-5 rounded-[24px] border border-slate-800/50">
                  <p className="text-[10px] text-slate-500 font-black mb-1 uppercase tracking-widest">สถานพยาบาล</p>
                  <p className="text-white font-black tracking-tight">{claim.hospital}</p>
                </div>
                <div className="bg-slate-900/60 p-6 rounded-[28px] col-span-2 border border-orange-500/20 shadow-inner relative overflow-hidden">
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-orange-500"></div>
                  <p className="text-[10px] text-orange-500 font-black mb-1 uppercase tracking-[0.2em]">ยอดเงินเบิกจ่าย (สกัดจากเอกสาร)</p>
                  <p className="text-4xl text-white font-black tracking-tighter">฿{claim.amount.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          {claim.isProxy && claim.proxyDetails && (
            <div className="bg-purple-500/5 backdrop-blur-md rounded-[32px] border border-purple-500/20 p-2">
               <ProxyVerificationCard proxy={claim.proxyDetails} />
            </div>
          )}

          <div className="mt-auto pt-4">
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4 ml-4">Final Decision Actions</div>
            <ActionButtons claimId={claim.id} />
          </div>
        </div>
      </div>
    </div>
  )
}