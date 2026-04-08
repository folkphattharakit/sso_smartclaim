"use client"
import React, { useState } from 'react'
import { Users, UserPlus, Trash2, ShieldCheck, Clock, X, CheckCircle2 } from 'lucide-react'

interface Proxy {
  id: string;
  name: string;
  idCard: string;
  status: 'active' | 'expired';
  grantedDate: string;
}

export default function ProxyManager({ onClose }: { onClose: () => void }) {
  const [proxies, setProxies] = useState<Proxy[]>([
    { id: '1', name: 'นายสมชาย ใจดี', idCard: '1-10xx-xxxx-x1-1', status: 'active', grantedDate: '01 มี.ค. 2568' },
    { id: '2', name: 'นางสาวใฝ่เรียน รู้จริง', idCard: '3-12xx-xxxx-x2-2', status: 'expired', grantedDate: '15 ม.ค. 2567' }
  ]);

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="bg-slate-900 p-8 text-white flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Users className="text-orange-500" /> จัดการผู้รับมอบอำนาจ
            </h2>
            <p className="text-slate-400 text-xs mt-1 font-light">จัดการสิทธิ์และประวัติการให้ความยินยอม (Consent Vault)</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8">
          <button className="w-full py-4 border-2 border-dashed border-slate-100 rounded-2xl flex items-center justify-center gap-2 text-slate-500 hover:border-orange-200 hover:text-orange-500 hover:bg-orange-50/50 transition-all font-bold text-sm mb-8">
            <UserPlus className="w-5 h-5" /> เพิ่มรายชื่อผู้รับมอบอำนาจใหม่
          </button>

          <div className="space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">รายชื่อปัจจุบัน</h3>
            {proxies.map((proxy) => (
              <div key={proxy.id} className="flex items-center justify-between p-5 rounded-3xl border border-slate-50 bg-slate-50/30 hover:bg-white hover:shadow-md transition-all">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${proxy.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{proxy.name}</p>
                    <p className="text-[10px] text-slate-400 font-medium">ID: {proxy.idCard} • ยินยอมเมื่อ: {proxy.grantedDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase ${proxy.status === 'active' ? 'bg-green-50 text-green-600' : 'bg-slate-50 text-slate-400'}`}>
                    {proxy.status === 'active' ? 'มีผลอยู่' : 'หมดอายุ'}
                  </span>
                  <button className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}