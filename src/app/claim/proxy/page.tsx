"use client"
import { useState } from 'react'

export default function ProxyClaim() {
  const [step, setStep] = useState(1)
  const [isVerifying, setIsVerifying] = useState(false)

  const handleVerifyConsent = () => {
    setIsVerifying(true)
    setTimeout(() => {
      setIsVerifying(false)
      setStep(2)
    }, 2000)
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-purple-600">Proxy Claim Submission</h1>
      
      {step === 1 && (
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h2 className="font-bold mb-4">ระบุข้อมูลผู้มอบอำนาจ (Identify Proxy)</h2>
          <div className="space-y-4">
            <input type="text" placeholder="เลขบัตรประชาชนผู้มอบอำนาจ" className="w-full p-2 border rounded" />
            <div className="border-2 border-dashed p-4 text-center text-gray-500">
              อัปโหลดหนังสือมอบอำนาจ (Consent Form)
              <input type="file" className="block w-full mt-2 text-sm" />
            </div>
            <button 
              onClick={handleVerifyConsent}
              disabled={isVerifying}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold"
            >
              {isVerifying ? "กำลังตรวจสอบลายเซ็น/ความยินยอม..." : "Verify Consent"}
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white p-6 rounded-xl shadow-sm border animate-in slide-in-from-bottom">
          <h2 className="text-green-600 font-bold mb-4 flex items-center gap-2">
            ✅ Consent Verified (Success)
          </h2>
          <p className="text-sm text-gray-600 mb-4">ระบบตรวจสอบความยินยอมเรียบร้อยแล้ว กรุณาเลือกประเภทคำขอและส่งเอกสาร</p>
          <div className="space-y-4">
            <select className="w-full p-2 border rounded">
              <option>กรณีคลอดบุตร</option>
              <option>กรณีว่างงาน</option>
              <option>กรณีเจ็บป่วย</option>
            </select>
            <input type="file" className="block w-full text-sm" />
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">ส่งคำขอในนามตัวแทน</button>
          </div>
        </div>
      )}
    </div>
  )
}