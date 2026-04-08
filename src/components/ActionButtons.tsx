"use client"
import { CheckCircle2, XCircle, MessageSquareWarning } from 'lucide-react'

export default function ActionButtons({ claimId }: { claimId: string }) {
  
  const handleAction = (action: string) => {
    alert(`ระบบบันทึกคำสั่ง: ${action} สำหรับรายการ ${claimId} เรียบร้อยแล้ว`);
    // ของจริงคือการ Fetch API อัปเดต Database ตรงนี้ครับ
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg shadow-orange-500/10 border border-orange-100 p-6 flex gap-4">
      <button 
        onClick={() => handleAction('REJECT')}
        className="flex-1 flex flex-col items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold py-4 rounded-2xl transition-colors border border-red-100"
      >
        <XCircle className="w-6 h-6" />
        ไม่อนุมัติ (Reject)
      </button>
      
      <button 
        onClick={() => handleAction('REQUEST_DOCS')}
        className="flex-1 flex flex-col items-center justify-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-600 font-bold py-4 rounded-2xl transition-colors border border-amber-100"
      >
        <MessageSquareWarning className="w-6 h-6" />
        ขอเอกสารเพิ่ม
      </button>

      <button 
        onClick={() => handleAction('APPROVE')}
        className="flex-1 flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold py-4 rounded-2xl transition-all shadow-md active:scale-95"
      >
        <CheckCircle2 className="w-6 h-6" />
        อนุมัติคำขอ (Approve)
      </button>
    </div>
  )
}