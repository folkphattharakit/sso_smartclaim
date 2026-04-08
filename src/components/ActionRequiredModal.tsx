"use client"
import React, { useState } from 'react'
import { AlertCircle, FileUp, X, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react'

export default function ActionRequiredModal({ onClose, claimId }: { onClose: () => void, claimId: string }) {
  const [isUploaded, setIsUploaded] = useState(false);

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-[40px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-300">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shadow-sm">
              <AlertCircle className="w-8 h-8" />
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-300">
              <X className="w-6 h-6" />
            </button>
          </div>

          <h2 className="text-2xl font-black text-slate-900">ต้องแก้ไขข้อมูล</h2>
          <p className="text-slate-400 text-sm mt-1 font-medium">รายการเลขที่: <span className="text-orange-500">{claimId}</span></p>

          <div className="mt-8 bg-amber-50 rounded-3xl p-5 border border-amber-100">
            <div className="flex gap-3 text-amber-700">
              <MessageSquare className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-black uppercase tracking-wider">หมายเหตุจากเจ้าหน้าที่:</p>
                <p className="text-sm mt-1 font-medium leading-relaxed">"ตราประทับในใบรับรองแพทย์ไม่ชัดเจน กรุณาถ่ายรูปใหม่ให้เห็นตราประทับโรงพยาบาลที่ชัดเจนกว่านี้"</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 text-center">อัปโหลดไฟล์ใหม่เฉพาะจุด</p>
            <div className={`border-2 border-dashed rounded-[32px] p-8 flex flex-col items-center justify-center transition-all cursor-pointer ${isUploaded ? 'border-green-500 bg-green-50/30' : 'border-slate-100 bg-slate-50/50 hover:border-orange-200'}`}
                 onClick={() => setIsUploaded(true)}>
              {isUploaded ? (
                <div className="text-center">
                  <CheckCircle2 className="w-10 h-10 text-green-500 mx-auto mb-2" />
                  <p className="text-xs font-bold text-slate-800">อัปโหลดไฟล์ใหม่เรียบร้อย</p>
                </div>
              ) : (
                <>
                  <FileUp className="w-10 h-10 text-slate-300 mb-3" />
                  <p className="text-xs font-bold text-slate-800">เลือกไฟล์ใบรับรองแพทย์ใหม่</p>
                  <p className="text-[9px] text-slate-400 mt-1 uppercase">PNG, JPG หรือ PDF</p>
                </>
              )}
            </div>
          </div>

          <button 
            disabled={!isUploaded}
            className={`w-full mt-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${isUploaded ? 'bg-slate-900 text-white shadow-xl hover:bg-black' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
          >
            ส่งข้อมูลที่แก้ไขแล้ว <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}