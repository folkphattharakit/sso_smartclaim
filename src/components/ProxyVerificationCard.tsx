import { ShieldCheck, UserCheck } from 'lucide-react'

export default function ProxyVerificationCard({ proxy }: { proxy: any }) {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl shadow-sm border border-purple-100 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-purple-500 p-2 rounded-lg text-white">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">ระบบตรวจสอบสิทธิ์มอบอำนาจ (Proxy)</h3>
      </div>
      
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-purple-50">
        <div className="flex items-center gap-4">
          <div className="bg-purple-100 p-3 rounded-full">
            <UserCheck className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-bold">ผู้รับมอบอำนาจที่ลงทะเบียนไว้</p>
            <p className="font-bold text-gray-900">{proxy.proxyName}</p>
          </div>
        </div>
        <div className="text-right">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-1">
            {proxy.consentStatus}
          </span>
          <p className="text-[10px] text-gray-400 font-medium">ยินยอมเมื่อ: {proxy.consentDate}</p>
        </div>
      </div>
    </div>
  )
}