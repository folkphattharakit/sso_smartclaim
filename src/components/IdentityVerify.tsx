"use client"
import React, { useState } from 'react'
import { ShieldCheck, ScanLine, Smartphone, ArrowRight, Loader2, Lock } from 'lucide-react'

export default function IdentityVerify({ onVerified }: { onVerified: () => void }) {
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      onVerified();
    }, 2500);
  }

  return (
    <div className="fixed inset-0 bg-white z-[200] flex flex-col items-center justify-center p-6 font-['Kanit']">
      <div className="max-w-sm w-full text-center">
        <div className="w-20 h-20 bg-orange-500 rounded-[2rem] flex items-center justify-center text-white mx-auto mb-8 shadow-2xl shadow-orange-200">
          <Lock className="w-10 h-10" />
        </div>
        
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">ยืนยันตัวตน</h2>
        <p className="text-slate-500 mt-2 font-light">เพื่อความปลอดภัยสูงสุด กรุณายืนยันตัวตนระดับ <span className="text-orange-500 font-bold">IAL2</span> ก่อนดำเนินการต่อ</p>

        <div className="mt-12 space-y-4">
          <button 
            onClick={handleVerify}
            disabled={isVerifying}
            className="w-full p-6 bg-slate-900 rounded-3xl text-white flex items-center justify-between group hover:bg-black transition-all shadow-xl disabled:opacity-50"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-orange-500" />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm">แอปพลิเคชัน ThaID</p>
                <p className="text-[10px] text-slate-400 uppercase font-medium">Identity Provider</p>
              </div>
            </div>
            {isVerifying ? <Loader2 className="w-5 h-5 animate-spin text-orange-500" /> : <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
          </button>

          <button 
            onClick={handleVerify}
            disabled={isVerifying}
            className="w-full p-6 bg-white border border-slate-100 rounded-3xl flex items-center justify-between group hover:border-orange-200 transition-all shadow-sm disabled:opacity-50"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center">
                <ScanLine className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm text-slate-800">Face Recognition</p>
                <p className="text-[10px] text-slate-400 uppercase font-medium">Biometric Scan</p>
              </div>
            </div>
            {isVerifying ? <Loader2 className="w-5 h-5 animate-spin text-orange-500" /> : <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
          </button>
        </div>

        <p className="mt-12 text-[10px] text-slate-300 font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2">
          <ShieldCheck className="w-3 h-3" /> Powered by SSO Identity Vault
        </p>
      </div>
    </div>
  )
}