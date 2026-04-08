"use client"

import { useRouter } from 'next/navigation'
import { pendingClaims, claims } from '@/lib/mocData'
import { LayoutDashboard, Clock, CheckCircle2, AlertCircle, BarChart3, ChevronRight, User, HeartPulse, Accessibility, Landmark, ShieldCheck, Search, Bell } from 'lucide-react'

export default function OfficerDashboard() {
  const router = useRouter()

  // คำนวณสถิติจาก Data จริง
  const totalPending = pendingClaims.length
  const totalAllClaims = claims.length + pendingClaims.length 
  const proxyClaims = pendingClaims.filter(c => c.isProxy).length
  const selfClaims = pendingClaims.filter(c => !c.isProxy).length 
  
  const proxyToVerify = pendingClaims.filter(c => c.isProxy).length 

  const allData = [...claims, ...pendingClaims]
  const medicalCount = allData.filter(c => c.type.includes("Medical") || c.type.includes("รักษา")).length
  const disabilityCount = allData.filter(c => c.type.includes("Disability") || c.type.includes("ทุพพลภาพ")).length
  const oldAgeCount = allData.filter(c => c.type.includes("Old-Age") || c.type.includes("ชราภาพ")).length
  const childSupportCount = allData.filter(c => c.type.includes("Child") || c.type.includes("สงเคราะห์บุตร")).length

  const stats = [
    { label: 'คำร้องรอตรวจ', value: totalPending, detail: 'รอการตรวจสอบสิทธิ์', icon: Clock, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { label: 'คำร้องขอทั้งหมด', value: totalAllClaims, detail: 'ประวัติรวมทุกรายการ', icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'ยื่นด้วยตนเอง(Self)', value: selfClaims, detail: 'ดำเนินการโดยผู้ประกันตน', icon: User, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'ยื่นแทน (Proxy)', value: proxyClaims, detail: `รอตรวจ Consent ${proxyToVerify} รายการ`, icon: ShieldCheck, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { label: 'ข้อผิดพลาด', value: '3', detail: 'เอกสารไม่ชัดเจน', icon: AlertCircle, color: 'text-rose-400', bg: 'bg-rose-500/10' },
  ]

  const categoryStats = [
    { label: 'กรณีชราภาพ', value: oldAgeCount, icon: Landmark, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'กรณีทุพพลภาพ', value: disabilityCount, icon: Accessibility, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { label: 'ค่ารักษาพยาบาล', value: medicalCount, icon: HeartPulse, color: 'text-rose-400', bg: 'bg-rose-500/10' },
    { label: 'สงเคราะห์บุตร', value: childSupportCount, icon: ShieldCheck, color: 'text-orange-400', bg: 'bg-orange-500/10' },
  ]

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                <ShieldCheck size={18} />
              </div>
              <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em]">Official Intelligence</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter">Dashboard เจ้าหน้าที่</h1>
            <p className="text-slate-400 text-sm font-medium mt-1">ภาพรวมระบบ SSO SmartClaim และคิวงานปัจจุบัน</p>
          </div>
          <div className="flex gap-4">
             <div className="bg-slate-900/50 border border-slate-800 p-2 rounded-2xl text-slate-400 hover:text-white transition-colors cursor-pointer">
                <Search size={20}/>
             </div>
             <div className="bg-slate-900/50 border border-slate-800 p-2 rounded-2xl text-slate-400 hover:text-white transition-colors cursor-pointer relative">
                <Bell size={20}/>
                <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full border-2 border-[#020617]"></span>
             </div>
          </div>
        </div>

        {/* Stats Cards - Glassmorphism Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="group bg-slate-900/40 backdrop-blur-xl p-6 rounded-[32px] border border-slate-800 hover:border-orange-500/50 transition-all duration-500 shadow-2xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
                  <h3 className="text-4xl font-black text-orange-500 mt-1 tracking-tighter group-hover:scale-110 transition-transform origin-left">
                    {stat.value}
                  </h3>
                </div>
                <div className={`${stat.bg} ${stat.color} p-3 rounded-2xl border border-white/5`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-bold uppercase">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* Category Stats - Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryStats.map((cat) => (
            <div key={cat.label} className="bg-slate-900/40 backdrop-blur-md p-5 rounded-[28px] border border-slate-800/50 flex items-center gap-5 hover:bg-slate-800/40 transition-colors">
              <div className={`${cat.bg} ${cat.color} p-4 rounded-2xl shadow-inner`}>
                <cat.icon className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{cat.label}</p>
                <h4 className="text-2xl font-black text-white uppercase tracking-tighter">
                  {cat.value} <span className="text-[10px] text-slate-500 ml-1 font-bold">รายการ</span>
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Queue - Dark Table Style */}
          <div className="bg-slate-900/40 backdrop-blur-2xl p-8 rounded-[40px] border border-slate-800 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-black flex items-center gap-3 text-white text-lg uppercase tracking-tight">
                <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
                คิวงานรอตรวจสอบ
              </h2>
              <button 
                onClick={() => router.push('/officer/review')}
                className="text-[10px] font-black text-orange-500 hover:text-white uppercase tracking-widest transition-colors bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20"
              >
                ดูทั้งหมด
              </button>
            </div>
            <div className="space-y-4">
              {pendingClaims.slice(0, 3).map((claim) => (
                <div 
                  key={claim.id} 
                  onClick={() => router.push(`/officer/${claim.id}`)}
                  className="group flex items-center justify-between p-5 bg-slate-800/30 rounded-[24px] border border-slate-700/50 hover:border-orange-500/40 hover:bg-slate-800/60 cursor-pointer transition-all duration-300"
                >
                  <div className="flex gap-4 items-center">
                    <div className="bg-slate-900 p-3 rounded-2xl text-orange-500 font-black text-[10px] border border-slate-700 group-hover:border-orange-500/50 transition-colors shadow-xl">SSO</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-black text-white tracking-tight">{claim.id}</p>
                        {claim.isProxy && (
                          <span className="bg-purple-500/20 text-purple-400 text-[8px] px-2 py-0.5 rounded-full font-black uppercase border border-purple-500/30 tracking-tighter">Proxy Case</span>
                        )}
                      </div>
                      <p className="text-[10px] text-slate-500 font-black uppercase mt-0.5">{claim.user}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-600 group-hover:text-orange-500 group-hover:translate-x-1 transition-all">
                    <ChevronRight size={18} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Performance - Neumorphism/Glow Style */}
          <div className="bg-slate-900/40 backdrop-blur-2xl p-8 rounded-[40px] border border-slate-800 shadow-2xl flex flex-col justify-between">
            <div>
              <h2 className="font-black mb-8 flex items-center gap-3 text-white text-lg uppercase tracking-tight">
                <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                ประสิทธิภาพ AI OCR
              </h2>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">ความแม่นยำเฉลี่ย</span>
                      <p className="text-xs text-slate-400 font-medium">สแกนและตรวจสอบอัตโนมัติ</p>
                    </div>
                    <span className="text-3xl font-black text-emerald-500 tracking-tighter">92%</span>
                  </div>
                  <div className="h-3 bg-slate-800 rounded-full overflow-hidden p-1 border border-slate-700">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div className="p-5 bg-blue-500/5 rounded-[24px] border border-blue-500/10">
                  <p className="text-[10px] text-blue-400 font-bold leading-relaxed uppercase tracking-wide">
                    * ข้อมูลจากการวิเคราะห์เอกสาร 100 รายการล่าสุด ระบบสามารถสกัดข้อมูลได้ถูกต้องโดยไม่ต้องแก้ไข 85 รายการ
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3 text-slate-500">
               <BarChart3 size={16}/>
               <span className="text-[9px] font-black uppercase tracking-[0.2em]">Real-time Analytics Engine Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}