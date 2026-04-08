"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Building2, UserCircle2, ClipboardCheck, ScanLine, ShieldCheck, CheckCircle2 } from 'lucide-react'

export default function LoginPage() {
  const [role, setRole] = useState<'user' | 'officer'>('user')
  const router = useRouter()

  return (
    /* ✅ เปลี่ยน bg-[#fdfcfb] เป็น bg-slate-950 */
    <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden p-4 font-sans">
      
      {/* Decorative Background Blobs (ปรับสีให้เข้ากับ Dark Mode) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-slate-800/30 rounded-full blur-[100px]"></div>

      {/* Main Container: ✅ เปลี่ยน bg-white/90 เป็น bg-slate-900/80 และแก้สี border */}
      <div className="relative z-10 w-full max-w-[1000px] bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.5)] flex flex-col md:flex-row overflow-hidden min-h-[600px] border border-slate-800">
        
        {/* ฝั่งซ้าย: ✅ เปลี่ยนจากสีส้มแสด เป็นสีแดงเข้ม-เทาดำ (Red-900 to Slate-950) */}
        <div className="w-full md:w-[45%] bg-gradient-to-br from-red-900 via-slate-950 to-slate-900 p-10 flex flex-col justify-between text-white relative">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-xs font-semibold mb-8 backdrop-blur-sm border border-white/10 shadow-sm text-slate-300">
              <Building2 className="w-4 h-4 text-red-500" />
              สำนักงานประกันสังคม (SSO)
            </div>

            <h1 className="text-[2.2rem] font-bold leading-tight mb-2 text-white">
              ระบบยื่นคำร้องดิจิทัล
            </h1>
            <h2 className="text-2xl font-bold text-red-500 mb-6 tracking-wide uppercase">
              SSO SmartClaim
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-10 pr-4 opacity-90">
              ยื่นคำขอรับสิทธิประโยชน์ผ่านระบบออนไลน์ รองรับการยื่นด้วยตนเอง และการมอบอำนาจ (Proxy) พร้อมระบบตรวจสอบอัตโนมัติ
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="bg-white/5 p-2 rounded-lg border border-white/5"><ScanLine className="w-4 h-4 text-red-500" /></div>
                <span className="text-sm text-slate-300 font-medium">AI OCR สกัดข้อมูลใบรับรองแพทย์อัตโนมัติ</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/5 p-2 rounded-lg border border-white/5"><ShieldCheck className="w-4 h-4 text-red-500" /></div>
                <span className="text-sm text-slate-300 font-medium">Verify Consent ระบบตรวจสอบสิทธิ์การมอบอำนาจ</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/5 p-2 rounded-lg border border-white/5"><ClipboardCheck className="w-4 h-4 text-red-500" /></div>
                <span className="text-sm text-slate-300 font-medium">ติดตามสถานะการพิจารณาแบบ Real-time</span>
              </div>
            </div>
          </div>
        </div>

        {/* ฝั่งขวา: ✅ เปลี่ยน bg-white/50 เป็น bg-transparent หรือ bg-slate-900/50 */}
        <div className="w-full md:w-[55%] p-10 lg:p-14 flex flex-col justify-center bg-slate-900/40">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-red-600 p-3 rounded-xl text-white shadow-lg shadow-red-600/20">
              <ClipboardCheck className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">เข้าสู่ระบบการยื่นคำขอ</h2>
              <p className="text-xs text-red-500 font-bold mt-1 uppercase tracking-wider">SSO Intelligent Claim System</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-200 mb-1">เลือกสถานะผู้ใช้งาน</h3>
            <p className="text-sm text-slate-500 font-medium">เลือกบทบาทเพื่อเข้าสู่ขั้นตอนการยื่นหรือตรวจสอบคำขอ</p>
          </div>

          <div className="space-y-4 mb-10">
            {/* User Option: ✅ ปรับ Border/BG ให้เป็น Dark Mode */}
            <label className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${role === 'user' ? 'border-red-600 bg-red-950/20 shadow-[0_10px_25px_-5px_rgba(220,38,38,0.1)]' : 'border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'}`}>
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl transition-colors duration-300 ${role === 'user' ? 'bg-red-600 text-white shadow-md' : 'bg-slate-800 text-slate-500'}`}>
                  <UserCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className={`font-bold text-base ${role === 'user' ? 'text-white' : 'text-slate-400'}`}>ผู้ประกันตน / ผู้รับมอบอำนาจ</p>
                  <p className={`text-xs mt-0.5 font-medium ${role === 'user' ? 'text-red-400' : 'text-slate-600'}`}>สำหรับยื่นคำขอ Self-Claim หรือ Proxy-Claim</p>
                </div>
              </div>
              {role === 'user' ? <CheckCircle2 className="w-6 h-6 text-red-600" /> : <div className="w-6 h-6 rounded-full border-2 border-slate-700"></div>}
              <input type="radio" className="hidden" checked={role === 'user'} onChange={() => setRole('user')} />
            </label>

            {/* Officer Option */}
            <label className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${role === 'officer' ? 'border-red-600 bg-red-950/20 shadow-[0_10px_25px_-5px_rgba(220,38,38,0.1)]' : 'border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'}`}>
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl transition-colors duration-300 ${role === 'officer' ? 'bg-red-600 text-white shadow-md' : 'bg-slate-800 text-slate-500'}`}>
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <p className={`font-bold text-base ${role === 'officer' ? 'text-white' : 'text-slate-400'}`}>เจ้าหน้าที่ประกันสังคม</p>
                  <p className={`text-xs mt-0.5 font-medium ${role === 'officer' ? 'text-red-400' : 'text-slate-600'}`}>ตรวจสอบ Review และ Approve คำขอในระบบ</p>
                </div>
              </div>
              {role === 'officer' ? <CheckCircle2 className="w-6 h-6 text-red-600" /> : <div className="w-6 h-6 rounded-full border-2 border-slate-700"></div>}
              <input type="radio" className="hidden" checked={role === 'officer'} onChange={() => setRole('officer')} />
            </label>
          </div>

          <button
            onClick={() => router.push(role === 'user' ? '/dashboard' : '/officer')}
            className="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-red-900/40 active:scale-[0.98] border-b-4 border-black/20"
          >
            เข้าสู่ระบบ <span className="text-xl leading-none">→</span>
          </button>
        </div>

      </div>
    </div>
  )
}