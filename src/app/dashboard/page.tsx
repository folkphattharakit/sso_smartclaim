"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import {
  UserCircle2,
  FileText,
  Clock,
  CheckCircle2,
  LayoutDashboard,
  History,
  Settings,
  LogOut,
  ChevronRight,
  PlusCircle,
  Users,
  ScanLine,
  UploadCloud,
  AlertCircle,
  ArrowLeft,
  X,
  FileUp,
  Bell,
  FileCheck,
  FileX,
  Info,
  Search,
  Activity,
  CreditCard,
  Landmark,
  RotateCcw,
  Loader2,
  Menu,
  ShieldCheck,
  Eye,
  XCircle,
  Smartphone,
  Lock,
  MessageSquare,
  ArrowRight,
  UserPlus,
  Trash2,
  Filter,
  Calendar,
  Contact2,
} from "lucide-react";

// ==========================================================
// ==========================================================
// NEW COMPONENTS (ปรับปรุงสีให้สอดคล้องกับหน้าแรก)
// ==========================================================
const IdentityVerify = ({ onVerified }: { onVerified: () => void }) => {
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      onVerified();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 bg-[#020617] z-[200] flex flex-col items-center justify-center p-6 font-['Kanit'] overflow-hidden">
      {/* Background Glows เพื่อให้ดูมีมิติเหมือนหน้าแรก */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-900/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />

      <div className="max-w-sm w-full text-center relative z-10">
        {/* Icon Box ปรับให้ดูเป็น Glassmorphism */}
        <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-900 rounded-[2.5rem] flex items-center justify-center text-white mx-auto mb-8 shadow-[0_20px_50px_rgba(220,38,38,0.3)] border border-red-500/30 animate-pulse">
          <Lock className="w-12 h-12" />
        </div>

        <h2 className="text-3xl font-black text-white tracking-tight">
          ยืนยันตัวตน
        </h2>
        <p className="text-slate-400 mt-3 font-light text-sm">
          เพื่อความปลอดภัยสูงสุด กรุณายืนยันตัวตนระดับ{" "}
          <span className="text-red-500 font-bold">IAL2</span>{" "}
          ก่อนเข้าสู่ระบบจัดการคำขอ
        </p>

        <div className="mt-12 space-y-4">
          {/* ปุ่มแบบ Dark Theme สไตล์หน้าแรก */}
          <button
            onClick={handleVerify}
            disabled={isVerifying}
            className="w-full p-5 bg-white/5 border border-white/10 backdrop-blur-md rounded-[2rem] text-white flex items-center justify-between group hover:bg-white/10 hover:border-red-500/50 transition-all shadow-xl disabled:opacity-50"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600/20 rounded-2xl flex items-center justify-center border border-red-500/20">
                <Smartphone className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-left">
                <p className="font-bold text-base text-white">แอปพลิเคชัน ThaID</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                  Identity Provider
                </p>
              </div>
            </div>
            {isVerifying ? (
              <Loader2 className="w-5 h-5 animate-spin text-red-500" />
            ) : (
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
            )}
          </button>

          {/* ปุ่ม Face Recognition */}
          <button
            onClick={handleVerify}
            disabled={isVerifying}
            className="w-full p-5 bg-white/5 border border-white/10 backdrop-blur-md rounded-[2rem] text-white flex items-center justify-between group hover:bg-white/10 hover:border-blue-500/50 transition-all shadow-xl disabled:opacity-50"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/20">
                <ScanLine className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-left">
                <p className="font-bold text-base text-white">Face Recognition</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                  Biometric Scan
                </p>
              </div>
            </div>
            {isVerifying ? (
              <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
            ) : (
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
            )}
          </button>
        </div>

        <p className="mt-10 text-[11px] text-slate-600 font-medium tracking-widest uppercase">
          SSO Intelligent Claim System
        </p>
      </div>
    </div>
  );
};

const ProxyManager = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
    <div className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 font-['Kanit']">
      <div className="bg-slate-900 p-8 text-white flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Users className="text-orange-500" /> จัดการผู้รับมอบอำนาจ
          </h2>
          <p className="text-slate-400 text-xs mt-1 font-light">
            จัดการสิทธิ์และประวัติการให้ความยินยอม (Consent Vault)
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-xl transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="p-8">
        <button className="w-full py-4 border-2 border-dashed border-slate-100 rounded-2xl flex items-center justify-center gap-2 text-slate-500 hover:border-orange-200 hover:text-orange-500 hover:bg-orange-50/50 transition-all font-bold text-sm mb-8">
          <UserPlus className="w-5 h-5" /> เพิ่มรายชื่อผู้รับมอบอำนาจใหม่
        </button>
        <div className="space-y-4">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
            รายชื่อปัจจุบัน
          </h3>
          <div className="flex items-center justify-between p-5 rounded-3xl border border-slate-50 bg-slate-50/30 hover:bg-white hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm">
                  นายสมชาย ใจดี
                </p>
                <p className="text-[10px] text-slate-400 font-medium">
                  ID: 1-10xx-xxxx-x1-1 • ยินยอมเมื่อ: 01 มี.ค. 2568
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[9px] font-black uppercase bg-green-50 text-green-600">
                มีผลอยู่
              </span>
              <button className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ActionRequiredModal = ({
  onClose,
  claimId,
}: {
  onClose: () => void;
  claimId: string;
}) => {
  const [isUploaded, setIsUploaded] = useState(false);
  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 font-['Kanit']">
      <div className="bg-white w-full max-w-md rounded-[40px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-300">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shadow-sm">
              <AlertCircle className="w-8 h-8" />
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <h2 className="text-2xl font-black text-slate-900">
            ต้องแก้ไขข้อมูล
          </h2>
          <p className="text-slate-400 text-sm mt-1 font-medium">
            รายการเลขที่: <span className="text-orange-500">{claimId}</span>
          </p>
          <div className="mt-8 bg-amber-50 rounded-3xl p-5 border border-amber-100">
            <div className="flex gap-3 text-amber-700">
              <MessageSquare className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-black uppercase tracking-wider">
                  หมายเหตุจากเจ้าหน้าที่:
                </p>
                <p className="text-sm mt-1 font-medium leading-relaxed">
                  "ตราประทับในใบรับรองแพทย์ไม่ชัดเจน
                  กรุณาถ่ายรูปใหม่ให้เห็นตราประทับโรงพยาบาลที่ชัดเจนกว่านี้"
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 text-center">
              อัปโหลดไฟล์ใหม่เฉพาะจุด
            </p>
            <div
              className={`border-2 border-dashed rounded-[32px] p-8 flex flex-col items-center justify-center transition-all cursor-pointer ${isUploaded ? "border-green-500 bg-green-50/30" : "border-slate-100 bg-slate-50/50 hover:border-orange-200"}`}
              onClick={() => setIsUploaded(true)}
            >
              {isUploaded ? (
                <div className="text-center">
                  <CheckCircle2 className="w-10 h-10 text-green-500 mx-auto mb-2" />
                  <p className="text-xs font-bold text-slate-800">
                    อัปโหลดไฟล์ใหม่เรียบร้อย
                  </p>
                </div>
              ) : (
                <>
                  <FileUp className="w-10 h-10 text-slate-300 mb-3" />
                  <p className="text-xs font-bold text-slate-800">
                    เลือกไฟล์ใบรับรองแพทย์ใหม่
                  </p>
                  <p className="text-[9px] text-slate-400 mt-1 uppercase">
                    PNG, JPG หรือ PDF
                  </p>
                </>
              )}
            </div>
          </div>
          <button
            disabled={!isUploaded}
            className={`w-full mt-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${isUploaded ? "bg-slate-900 text-white shadow-xl hover:bg-black" : "bg-slate-100 text-slate-400 cursor-not-allowed"}`}
          >
            ส่งข้อมูลที่แก้ไขแล้ว <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
// ==========================================================

// --- Types ---
type ViewState = "dashboard" | "create-claim" | "track-status" | "history";
type ClaimCategory = "Old-Age" | "Disability" | "Medical" | "none";

export default function UserDashboard() {
  const [view, setView] = useState<ViewState>("dashboard");
  const [claimType, setClaimType] = useState<"self" | "proxy">("self");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // (ADDED) New States for Dashboard Integration
  const [isVerified, setIsVerified] = useState(false);
  const [showProxyManager, setShowProxyManager] = useState(false);
  const [activeActionClaim, setActiveActionClaim] = useState<string | null>(
    null,
  );

  // Form States
  const [medicalDoc, setMedicalDoc] = useState<File | null>(null);
  const [consentDoc, setConsentDoc] = useState<File | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<ClaimCategory>("none");

  const medicalInputRef = useRef<HTMLInputElement>(null);
  const consentInputRef = useRef<HTMLInputElement>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [proxyDoc, setProxyDoc] = useState<File | null>(null); // เก็บไฟล์ใบมอบอำนาจ
  const proxyInputRef = useRef<HTMLInputElement>(null);
  const [idCardDoc, setIdCardDoc] = useState<File | null>(null);
  const idCardInputRef = useRef<HTMLInputElement>(null);


  // ใช้สั่งเปิดหน้าต่างเลือกไฟล์

  // จำลองการ Scan OCR เมื่ออัปโหลดไฟล์
  useEffect(() => {
    if (medicalDoc) {
      setIsScanning(true);
      const timer = setTimeout(() => {
        setIsScanning(false);
        setSelectedCategory("Medical");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [medicalDoc]);

  // ข้อมูลสถิติที่สอดคล้องกับหน้า Status (สำเร็จ 3, รอ 1, ไม่ผ่าน 1)
  const statsData = {
    success: 3,
    pending: 1,
    rejected: 1,
  };

  // (ADDED) Security Check before dashboard
  if (!isVerified) {
    return <IdentityVerify onVerified={() => setIsVerified(true)} />;
  }

  // ==========================================================
  // SIDEBAR COMPONENT (Added for Convenience)
  // ==========================================================
  const Sidebar = ({ onLogout }: { onLogout: () => void }) => (<>
    {/* Mobile Overlay */}
    {isSidebarOpen && (
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[110] lg:hidden"
        onClick={() => setIsSidebarOpen(false)}
      />
    )}

    <aside
      className={`fixed top-0 left-0 h-full w-72 bg-slate-900 border-r border-slate-800 z-[120] transition-transform duration-300 lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="p-8 h-full flex flex-col">
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(220,38,38,0.2)]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="text-xl font-black text-white tracking-tighter uppercase">
            SSO Smart
          </span>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 space-y-2">
          {[
            { id: "dashboard", label: "หน้าแรก", icon: LayoutDashboard },
            { id: "create-claim", label: "ยื่นคำร้อง", icon: PlusCircle },
            { id: "track-status", label: "ติดตามสถานะ", icon: History },
            { id: "history", label: "ประวัติรายการ", icon: Clock },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setView(item.id as ViewState);
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all font-bold text-sm ${view === item.id
                ? "bg-red-600/10 text-red-500 shadow-[inset_0_0_0_1px_rgba(220,38,38,0.2)]"
                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
          <button
            onClick={() => setShowProxyManager(true)}
            className="w-full flex items-center gap-4 p-4 rounded-2xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all font-bold text-sm"
          >
            <Users className="w-5 h-5" /> จัดการตัวแทน
          </button>
        </nav>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800 space-y-4">
          <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-slate-400 hover:text-white hover:bg-slate-800/40 transition-all font-bold text-sm">
            <Settings className="w-5 h-5" /> ตั้งค่าระบบ
          </button>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-4 p-4 rounded-2xl text-red-500 hover:bg-red-950/40 hover:text-red-400 transition-all font-bold text-sm border border-transparent hover:border-red-900/50"
          >
            <LogOut className="w-5 h-5" /> ออกจากระบบ
          </button>
        </div>
      </div>
    </aside>
  </>
  );

  return (
    <div className="min-h-screen bg-slate-950 font-['Kanit',sans-serif] antialiased text-slate-200">
      <Sidebar onLogout={() => {
        setIsAuthenticated(false); // บรรทัดนี้จะทำให้หน้าเลือกฝั่ง (IdentityVerify) กลับมาแสดงผล
        setIsSidebarOpen(false);   // ปิดเมนูข้าง
      }} />

      {/* Main Content Wrap to handle Sidebar space on Desktop */}
      <div className={`transition-all duration-300 lg:pl-72`}>
        {/* Mobile Navbar Header */}
        <div className="lg:hidden p-4 flex justify-between items-center bg-white border-b border-slate-100">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 bg-slate-50 rounded-xl text-slate-900"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-xs">
            PS
          </div>
        </div>

        {/* --- VIEW: DASHBOARD --- */}
        {view === "dashboard" && (
          <div className="max-w-7xl mx-auto px-4 py-8">
            <header className="flex justify-between items-end mb-10">
              <div>
                <div className="flex items-center gap-2 text-orange-500 mb-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                    SSO Smart Systems
                  </span>
                </div>
                <h1 className="text-4xl font-black text-white tracking-tight">
                  แผงควบคุมผู้ใช้งาน
                </h1>
                <p className="text-slate-400 font-medium mt-1">
                  ยินดีต้อนรับคุณ,{" "}
                  <span className="text-slate-700">Test user</span>
                </p>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <button className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-200 transition-all shadow-sm relative group">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                </button>
                <div className="h-12 w-[1px] bg-slate-100 mx-2" />
                <div className="flex items-center gap-3 bg-white p-1.5 pr-5 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-xs">
                    PS
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black text-slate-900 leading-none">
                      Phattharakrit S.
                    </p>
                    <p className="text-[9px] text-slate-400 font-bold mt-1 uppercase tracking-tighter">
                      Premium Member
                    </p>
                  </div>
                </div>
              </div>
            </header>

            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      label: "จ่ายเงินสำเร็จ",
                      value: `${statsData.success} รายการ`,
                      icon: CheckCircle2,
                      bg: "bg-green-500",
                      textColor: "text-green-600",
                    },
                    {
                      label: "รอดำเนินการ",
                      value: `${statsData.pending} รายการ`,
                      icon: Clock,
                      bg: "bg-amber-500",
                      textColor: "text-amber-600",
                    },
                    {
                      label: "ไม่ผ่านอนุมัติ",
                      value: `${statsData.rejected} รายการ`,
                      icon: XCircle,
                      bg: "bg-red-500",
                      textColor: "text-red-600",
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all"
                    >
                      <div
                        className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center text-white mb-3 shadow-md group-hover:scale-110 transition-transform`}
                      >
                        <stat.icon className="w-5 h-5" />
                      </div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {stat.label}
                      </p>
                      <h3
                        className={`text-xl font-black mt-0.5 ${stat.textColor}`}
                      >
                        {stat.value}
                      </h3>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div
                    className="bg-slate-900 rounded-[32px] p-6 text-white relative overflow-hidden group cursor-pointer"
                    onClick={() => setView("create-claim")}
                  >
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                          <PlusCircle className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold mb-1" >ยื่นคำร้อง</h3>
                        <p className="text-slate-400 text-xs font-light">
                          เริ่มต้นทำรายการสิทธิประโยชน์
                        </p>
                      </div>
                      <div className="mt-6 flex items-center gap-2 text-orange-500 font-bold text-xs">
                        เริ่มเลย <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-white border border-slate-100 rounded-[40px] p-8 cursor-pointer border-dashed hover:border-orange-300 transition-all"
                    onClick={() => setView("track-status")}
                  >
                    <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center mb-6">
                      <Search className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      ติดตามสถานะ
                    </h3>
                    <p className="text-slate-400 text-sm font-light">
                      เช็คความคืบหน้าแบบเรียลไทม์
                    </p>
                  </div>
                  <div
                    className="bg-white border border-slate-100 rounded-[40px] p-8 cursor-pointer hover:border-blue-300 transition-all"
                    onClick={() => setShowProxyManager(true)}
                  >
                    <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      จัดการตัวแทน
                    </h3>
                    <p className="text-slate-400 text-sm font-light">
                      จัดการสิทธิ์ผู้รับมอบอำนาจ
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
                  <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-800">
                      รายการล่าสุด
                    </h3>
                    {/* Fixed: Link to track status */}
                    <button
                      onClick={() => setView("track-status")}
                      className="text-xs font-bold text-orange-500 hover:underline"
                    >
                      ดูทั้งหมด
                    </button>
                  </div>
                  <div className="p-4">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left">
                          <th className="px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            เลขที่คำร้อง
                          </th>
                          <th className="px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                            สถานะ
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {[
                          {
                            id: "SSO-2025-0045",
                            type: "เงินทดแทนกรณีว่างงาน",
                            status: "pending",
                            label: "รอดำเนินการ",
                            color: "amber",
                          },
                          {
                            id: "SSO-2025-0038",
                            type: "ค่าตรวจสุขภาพ",
                            status: "rejected",
                            label: "ไม่ผ่านอนุมัติ",
                            color: "red",
                          },
                        ].map((row, i) => (
                          <tr
                            key={i}
                            onClick={() =>
                              row.status === "rejected" &&
                              setActiveActionClaim(row.id)
                            }
                            className="group hover:bg-slate-50/50 cursor-pointer"
                          >
                            <td className="px-4 py-4 text-xs font-bold text-slate-900">
                              {row.id}
                              <p className="text-[9px] text-slate-400 font-normal">
                                {row.type}
                              </p>
                            </td>
                            <td className="px-4 py-4 text-center">
                              <span
                                className={`px-3 py-1 rounded-full text-[9px] font-black uppercase ${row.color === "amber" ? "bg-amber-50 text-amber-600" : "bg-red-50 text-red-600"}`}
                              >
                                {row.label}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-4 space-y-8">
                <div className="bg-white rounded-[40px] border border-slate-100 p-8 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-800 mb-6">
                    การแจ้งเตือน
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Info className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800 leading-tight">
                          สิทธิการรักษาใกล้หมดอายุ
                        </p>
                        <p className="text-[11px] text-slate-500 mt-1">
                          กรุณาตรวจสอบข้อมูลประกันสังคม
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW: TRACK STATUS (Added to fix Black Screen) --- */}
        {view === "track-status" && (
          <div className="max-w-7xl mx-auto px-6 py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="mb-10">
              <h1 className="text-4xl font-black text-white tracking-tight">
                ติดตามสถานะคำร้อง
              </h1>
              <p className="text-slate-400 font-medium mt-1">
                ตรวจสอบความคืบหน้าสิทธิประโยชน์ทั้งหมดของคุณ
              </p>
            </header>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex-1 min-w-[300px] relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="ค้นหาเลขที่คำร้อง..."
                  className="w-full pl-11 pr-4 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-medium outline-none focus:border-orange-500 transition-all shadow-sm"
                />
              </div>
              <button className="flex items-center gap-2 px-6 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 shadow-sm transition-all">
                <Filter className="w-4 h-4" /> กรองข้อมูล
              </button>
            </div>

            <div className="space-y-6">
              {[
                {
                  id: "SSO-2025-0045",
                  date: "25 มี.ค. 2568",
                  type: "เงินทดแทนกรณีว่างงาน",
                  status: "pending",
                  label: "รอดำเนินการ",
                  step: 2,
                  amount: "-",
                },
                {
                  id: "SSO-2025-0042",
                  date: "18 มี.ค. 2568",
                  type: "เบิกค่ารักษาพยาบาล (IPD)",
                  status: "success",
                  label: "จ่ายเงินสำเร็จ",
                  step: 4,
                  amount: "12,500 ฿",
                },
                {
                  id: "SSO-2025-0038",
                  date: "10 มี.ค. 2568",
                  type: "ค่าตรวจสุขภาพประจำปี",
                  status: "rejected",
                  label: "ไม่ผ่านอนุมัติ",
                  step: 3,
                  amount: "0 ฿",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-8">
                    <div className="flex items-start gap-5">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${item.status === "success" ? "bg-green-500 text-white" : item.status === "rejected" ? "bg-red-500 text-white" : "bg-amber-500 text-white"}`}
                      >
                        {item.status === "success" ? (
                          <CheckCircle2 className="w-7 h-7" />
                        ) : item.status === "rejected" ? (
                          <XCircle className="w-7 h-7" />
                        ) : (
                          <Clock className="w-7 h-7" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h4 className="text-xl font-bold text-slate-900 leading-none">
                            {item.type}
                          </h4>
                          <span
                            className={`px-3 py-1 rounded-full text-[9px] font-black uppercase ${item.status === "success" ? "bg-green-50 text-green-600" : item.status === "rejected" ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"}`}
                          >
                            {item.label}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 font-medium mt-2 flex items-center gap-2">
                          <Calendar className="w-3 h-3" /> ยื่นเมื่อ:{" "}
                          {item.date} •{" "}
                          <span className="font-bold text-slate-600">
                            ID: {item.id}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        ยอดเงินได้รับ
                      </p>
                      <p
                        className={`text-2xl font-black ${item.status === "success" ? "text-green-600" : "text-slate-900"}`}
                      >
                        {item.amount}
                      </p>
                    </div>
                  </div>

                  <div className="relative pt-6">
                    <div className="flex justify-between mb-3">
                      {[
                        "ตรวจสอบสิทธิ์",
                        "พิจารณาเอกสาร",
                        "อนุมัติคำขอ",
                        "โอนเงิน",
                      ].map((step, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col items-center gap-2 w-1/4"
                        >
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center z-10 transition-colors ${idx + 1 <= item.step ? "bg-orange-500 border-orange-500 text-white shadow-lg" : "bg-white border-slate-100 text-slate-200"}`}
                          >
                            {idx + 1 < item.step ? (
                              <CheckCircle2 className="w-4 h-4" />
                            ) : (
                              <span className="text-[10px] font-bold">
                                {idx + 1}
                              </span>
                            )}
                          </div>
                          <span
                            className={`text-[10px] font-bold ${idx + 1 <= item.step ? "text-slate-900" : "text-slate-300"}`}
                          >
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="absolute top-[35px] left-0 h-0.5 bg-slate-50 w-full -z-0" />
                    <div
                      className="absolute top-[35px] left-0 h-0.5 bg-orange-500 transition-all duration-1000"
                      style={{ width: `${((item.step - 1) / 3) * 100}%` }}
                    />
                  </div>

                  {item.status === "rejected" && (
                    <div className="mt-8 pt-8 border-t border-slate-50 flex justify-between items-center">
                      <div className="flex items-center gap-3 text-red-500">
                        <AlertCircle className="w-4 h-4" />
                        <p className="text-xs font-bold italic">
                          พบข้อผิดพลาดในใบรับรองแพทย์ กรุณาอัปโหลดใหม่
                        </p>
                      </div>
                      <button
                        onClick={() => setActiveActionClaim(item.id)}
                        className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-black transition-all"
                      >
                        แก้ไขข้อมูล
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW: CREATE CLAIM (คงเดิมทุกบรรทัด) --- */}
        {view === "create-claim" && (
          <div className="max-w-xl mx-auto px-4 py-10 animate-in zoom-in-95 duration-500">
            <button
              onClick={() => setView("dashboard")}
              className="flex items-center gap-2 text-slate-400 hover:text-orange-600 mb-5 transition-colors font-medium group text-xs"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />{" "}
              กลับสู่หน้าหลัก
            </button>

            <div className="bg-white rounded-[32px] shadow-2xl shadow-slate-200/40 border border-slate-100 overflow-hidden">
              <div className="bg-slate-900 p-7 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-orange-400 mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                      Secure Submission
                    </span>
                  </div>
                  <h2 className="text-xl font-bold">ยื่นคำร้องขอรับประโยชน์</h2>
                  <p className="opacity-50 font-light mt-0.5 text-[10px] tracking-wide">
                    ระบบประมวลผลอัจฉริยะ AI OCR 2.0
                  </p>
                </div>
                <PlusCircle className="absolute right-[-10px] top-[-10px] w-32 h-32 text-white/5 rotate-12" />
              </div>

              <div className="p-5 md:p-7 space-y-7">
                <section>
                  <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2.5">
                    <span className="w-7 h-7 bg-orange-500 text-white rounded-lg flex items-center justify-center text-[10px] shadow-md shadow-orange-200">
                      1
                    </span>
                    เลือกรูปแบบการยื่น
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {[
                      {
                        id: "self",
                        label: "ยื่นด้วยตนเอง",
                        sub: "ใช้ข้อมูลในระบบเพื่อความรวดเร็ว",
                        icon: UserCircle2,
                      },
                      {
                        id: "proxy",
                        label: "ยื่นแทนผู้อื่น",
                        sub: "ต้องมีหนังสือมอบอำนาจอิเล็กทรอนิกส์",
                        icon: Users,
                      },
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setClaimType(type.id as any)}
                        className={`p-3.5 rounded-2xl border-2 transition-all flex items-center gap-3.5 text-left group ${claimType === type.id
                          ? "border-orange-500 bg-orange-50/40 shadow-sm shadow-orange-100"
                          : "border-slate-50 hover:border-slate-200 hover:bg-slate-50"
                          }`}
                      >
                        <div
                          className={`p-2.5 rounded-xl transition-colors ${claimType === type.id
                            ? "bg-orange-500 text-white"
                            : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                            }`}
                        >
                          <type.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-xs">
                            {type.label}
                          </p>
                          <p className="text-[9px] text-slate-500 font-medium">
                            {type.sub}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2.5">
                    <span className="w-7 h-7 bg-orange-500 text-white rounded-lg flex items-center justify-center text-[10px] shadow-md shadow-orange-200">
                      2
                    </span>
                    ข้อมูลรายละเอียดบุคคล
                  </h3>
                  <div className="space-y-4">
                    {/* ส่วนที่ 1: ข้อมูลผู้ทำรายการ */}
                    <div className="bg-slate-50/50 p-4 rounded-2xl border border-slate-100 space-y-3">
                      <p className="text-[9px] font-black text-orange-600 uppercase tracking-widest">
                        ข้อมูลผู้ทำรายการ{" "}
                        {claimType === "proxy" && "(ผู้รับมอบอำนาจ)"}
                      </p>
                      <div className="grid grid-cols-1 gap-3">
                        <input
                          type="text"
                          placeholder="ชื่อ-นามสกุล"
                          className="w-full p-2.5 rounded-xl border border-slate-200 focus:border-orange-500 outline-none text-xs transition-all bg-white text-slate-900 placeholder:text-slate-400"
                        />
                        <input
                          type="text"
                          placeholder="เลขบัตรประชาชน (13 หลัก)"
                          className="w-full p-2.5 rounded-xl border border-slate-200 focus:border-orange-500 outline-none text-xs transition-all bg-white text-slate-900 placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* ส่วนที่ 2: ข้อมูลผู้ประกันตน (แสดงเฉพาะเมื่อเลือกยื่นแทนผู้อื่น) */}
                    {claimType === "proxy" && (
                      <div className="bg-orange-50/30 p-4 rounded-2xl border border-orange-100 space-y-3 border-dashed">
                        <p className="text-[9px] font-black text-orange-600 uppercase tracking-widest">
                          ข้อมูลผู้ประกันตน (ผู้มีสิทธิได้รับประโยชน์)
                        </p>
                        <div className="grid grid-cols-1 gap-3">
                          {/* เพิ่มช่องสถานะความสัมพันธ์ */}
                          <select
                            className="w-full p-2.5 rounded-xl border border-slate-200 focus:border-orange-500 outline-none text-xs transition-all bg-white text-slate-900 cursor-pointer appearance-none"
                            defaultValue="" // กำหนดค่าเริ่มต้นที่นี่แทน
                          >
                            <option value="" disabled>เลือกความสัมพันธ์กับผู้ประกันตน</option>
                            <option value="parent">บิดา / มารดา</option>
                            <option value="spouse">คู่สมรส</option>
                            <option value="child">บุตร</option>
                            <option value="relative">ญาติ</option>
                            <option value="employer">นายจ้าง / ตัวแทนบริษัท</option>
                            <option value="other">อื่น ๆ (ระบุในหนังสือมอบอำนาจ)</option>
                          </select>

                          <input
                            type="text"
                            placeholder="ชื่อ-นามสกุล ของผู้ประกันตน"
                            className="w-full p-2.5 rounded-xl border border-slate-200 focus:border-orange-500 outline-none text-xs transition-all bg-white text-slate-900 placeholder:text-slate-400"
                          />
                          <input
                            type="text"
                            placeholder="เลขบัตรประชาชน ของผู้ประกันตน"
                            className="w-full p-2.5 rounded-xl border border-slate-200 focus:border-orange-500 outline-none text-xs transition-all bg-white text-slate-900 placeholder:text-slate-400"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2.5">
                    <span className="w-7 h-7 bg-red-600 text-white rounded-lg flex items-center justify-center text-[10px] shadow-md shadow-red-200">
                      3
                    </span>
                    อัปโหลดหลักฐานหลัก
                  </h3>

                  <div className="grid grid-cols-1 gap-4">
                    {/* --- ช่อง 1: เอกสารประกอบคำขอ (โค้ดเดิมของคุณ) --- */}
                    <div
                      onClick={() => medicalInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-[24px] p-6 flex flex-col items-center justify-center transition-all relative overflow-hidden group cursor-pointer ${medicalDoc ? "border-red-500 bg-red-50/30" : "border-slate-100 bg-slate-50/50 hover:bg-slate-50"}`}
                    >
                      <input
                        type="file"
                        ref={medicalInputRef}
                        className="hidden"
                        onChange={(e) => setMedicalDoc(e.target.files?.[0] || null)}
                      />
                      {isScanning ? (
                        <div className="flex flex-col items-center animate-pulse">
                          <Loader2 className="w-8 h-8 text-red-500 animate-spin mb-2" />
                          <p className="font-bold text-red-600 text-[10px]">AI OCR Scanning...</p>
                        </div>
                      ) : medicalDoc ? (
                        <div className="flex flex-col items-center text-center">
                          <div className="w-11 h-11 bg-green-500 text-white rounded-xl flex items-center justify-center mb-2 shadow-lg shadow-green-100">
                            <CheckCircle2 className="w-6 h-6" />
                          </div>
                          <p className="font-bold text-slate-800 text-[10px] truncate max-w-[180px]">{medicalDoc.name}</p>
                          <button onClick={(e) => { e.stopPropagation(); setMedicalDoc(null); }} className="text-[9px] font-bold text-red-500 mt-1 hover:underline">ลบไฟล์</button>
                        </div>
                      ) : (
                        <>
                          <div className="w-11 h-11 bg-white rounded-xl shadow-sm flex items-center justify-center text-red-500 mb-3 group-hover:scale-105 transition-transform duration-300"><ScanLine className="w-6 h-6" /></div>
                          <p className="font-bold text-slate-800 text-xs">อัปโหลดเอกสารประกอบคำขอ</p>
                          <p className="text-slate-400 mt-0.5 text-[9px]">ex.ใบรับรองแพทย์/สูติบัตรของบุตร (PDF, PNG, JPG (สูงสุด 10MB))</p>
                        </>
                      )}
                    </div>

                    {/* --- ช่องที่เพิ่มใหม่: สำเนาบัตรประชาชน (ใช้ได้ทุกกรณี) --- */}
                    <div
                      onClick={() => idCardInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-[24px] p-6 flex flex-col items-center justify-center transition-all relative overflow-hidden group cursor-pointer ${idCardDoc ? "border-red-500 bg-red-50/30" : "border-slate-100 bg-slate-50/50 hover:bg-slate-50"}`}
                    >
                      <input
                        type="file"
                        ref={idCardInputRef}
                        className="hidden"
                        onChange={(e) => setIdCardDoc(e.target.files?.[0] || null)}
                      />
                      {idCardDoc ? (
                        <div className="flex flex-col items-center text-center">
                          <div className="w-11 h-11 bg-green-500 text-white rounded-xl flex items-center justify-center mb-2 shadow-lg shadow-green-100">
                            <CheckCircle2 className="w-6 h-6" />
                          </div>
                          <p className="font-bold text-slate-800 text-[10px] truncate max-w-[180px]">{idCardDoc.name}</p>
                          <button onClick={(e) => { e.stopPropagation(); setIdCardDoc(null); }} className="text-[9px] font-bold text-red-500 mt-1 hover:underline">ลบไฟล์</button>
                        </div>
                      ) : (
                        <>
                          <div className="w-11 h-11 bg-white rounded-xl shadow-sm flex items-center justify-center text-red-500 mb-3 group-hover:scale-105 transition-transform duration-300">
                            <Contact2 className="w-6 h-6" />
                          </div>
                          <p className="font-bold text-slate-800 text-xs">อัปโหลดสำเนาบัตรประชาชนผู้ประกันตน</p>
                          <p className="text-slate-400 mt-0.5 text-[9px]">รับรองสำเนาถูกต้องให้เรียบร้อย</p>
                        </>
                      )}
                    </div>

                    {/* --- ช่อง 2: หนังสือมอบอำนาจ (โค้ดเดิมของคุณ) --- */}
                    {claimType === "proxy" && (
                      <div
                        onClick={() => proxyInputRef.current?.click()}
                        className={`border-2 border-dashed rounded-[24px] p-6 flex flex-col items-center justify-center transition-all relative overflow-hidden group cursor-pointer animate-in fade-in slide-in-from-top-2 ${proxyDoc ? "border-red-500 bg-red-50/30" : "border-red-100 bg-red-50/20 hover:bg-red-50/40"}`}
                      >
                        <input
                          type="file"
                          ref={proxyInputRef}
                          className="hidden"
                          onChange={(e) => setProxyDoc(e.target.files?.[0] || null)}
                        />
                        {proxyDoc ? (
                          <div className="flex flex-col items-center text-center">
                            <div className="w-11 h-11 bg-red-600 text-white rounded-xl flex items-center justify-center mb-2 shadow-lg shadow-red-100"><ShieldCheck className="w-6 h-6" /></div>
                            <p className="font-bold text-slate-800 text-[10px] truncate max-w-[180px]">{proxyDoc.name}</p>
                            <button onClick={(e) => { e.stopPropagation(); setProxyDoc(null); }} className="text-[9px] font-bold text-red-500 mt-1 hover:underline">ลบไฟล์</button>
                          </div>
                        ) : (
                          <>
                            <div className="w-11 h-11 bg-white rounded-xl shadow-sm flex items-center justify-center text-red-500 mb-3 group-hover:scale-105 transition-transform duration-300 border border-red-50"><FileUp className="w-6 h-6 text-red-500" /></div>
                            <p className="font-bold text-slate-800 text-xs">อัปโหลดหนังสือมอบอำนาจ / ยินยอม</p>
                            <p className="text-red-400 mt-0.5 text-[9px]">จำเป็นต้องมีเอกสารเพื่อยืนยันสิทธิ์</p>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </section>

                <section
                  className={
                    (claimType === "proxy" && !proxyDoc) || !medicalDoc
                      ? "opacity-30 pointer-events-none"
                      : ""
                  }
                >
                  <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2.5">
                    <span className="w-7 h-7 bg-orange-500 text-white rounded-lg flex items-center justify-center text-[10px] shadow-md shadow-orange-200">
                      4
                    </span>
                    ประเภทสิทธิประโยชน์
                  </h3>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value as any)}
                    className="w-full p-3 rounded-xl border-2 border-slate-50 focus:border-orange-500 outline-none font-bold text-slate-700 bg-white shadow-sm appearance-none text-xs transition-all"
                  >
                    <option value="none">กรุณาเลือกประเภทสิทธิ...</option>
                    <option value="Old-Age">💰 กรณีชราภาพ</option>
                    <option value="Disability">♿ กรณีทุพพลภาพ</option>
                    <option value="Medical">🏥 ค่ารักษาพยาบาล</option>
                  </select>
                </section>

                <div className="pt-2">
                  <button
                    disabled={
                      selectedCategory === "none" ||
                      !medicalDoc ||
                      !idCardDoc ||
                      (claimType === "proxy" && !proxyDoc)
                    }
                    className={`w-full font-bold py-4 rounded-[20px] shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-sm ${selectedCategory === "none" ? "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none" : "bg-orange-500 hover:bg-orange-600 text-white shadow-orange-100"}`}
                  >
                    <ShieldCheck className="w-4 h-4" /> ยืนยันการส่งคำขอ
                  </button>
                  <p className="text-center text-[8px] text-slate-400 mt-3 font-medium uppercase tracking-wider">
                    🔒 Secure 256-bit SSL Data Encryption
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- จบส่วน VIEW: CREATE CLAIM ที่คุณส่งมา --- */}
        {view === "create-claim" && (
          <div className="...">
            {/* ... โค้ดที่คุณส่งมาทั้งหมด ... */}
          </div>
        )}

        {/* ✅ เพิ่มขั้นตอนที่ 3: VIEW HISTORY ตรงนี้ครับ ✅ */}
        {view === 'history' && (
          <div className="max-w-7xl mx-auto px-6 py-10 animate-in fade-in duration-500">
            <header className="mb-10">
              <h1 className="text-4xl font-black text-white tracking-tight">ประวัติรายการทั้งหมด</h1>
              <p className="text-slate-400 font-medium mt-1">เรียกดูรายการสิทธิประโยชน์ย้อนหลังของคุณ</p>
            </header>

            <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b flex justify-between items-center bg-slate-50/30">
                <h3 className="text-lg font-bold text-slate-800">รายการที่เคยยื่นไว้</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b border-slate-50">
                      <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">เลขที่คำร้อง</th>
                      <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">ประเภท</th>
                      <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">สถานะ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[
                      { id: 'SSO-2025-0045', type: 'เงินทดแทนกรณีว่างงาน', date: '08 เม.ย. 2569', status: 'pending', statusText: 'รอดำเนินการ', color: 'amber' },
                      { id: 'SSO-2025-0042', type: 'ค่ารักษาพยาบาล (OPD)', date: '02 เม.ย. 2569', status: 'approved', statusText: 'อนุมัติแล้ว', color: 'green' },
                      { id: 'SSO-2025-0038', type: 'ตรวจสุขภาพประจำปี', date: '28 มี.ค. 2569', status: 'action_required', statusText: 'ต้องแก้ไขเอกสาร', color: 'orange' },
                      { id: 'SSO-2025-0031', type: 'กรณีชราภาพ', date: '15 มี.ค. 2569', status: 'rejected', statusText: 'ไม่ผ่านการอนุมัติ', color: 'red' },
                      { id: 'SSO-2025-0025', type: 'สงเคราะห์บุตร', date: '01 มี.ค. 2569', status: 'approved', statusText: 'อนุมัติแล้ว', color: 'green' },
                    ].map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-all group">
                        <td className="px-8 py-6">
                          <span className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{item.id}</span>
                        </td>
                        <td className="px-8 py-6">
                          <p className="text-sm text-slate-600 font-medium">{item.type}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">{item.date}</p>
                        </td>
                        <td className="px-8 py-6 text-center">
                          <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-${item.color}-50 text-${item.color}-600 border border-${item.color}-100`}>
                            <span className={`w-1.5 h-1.5 rounded-full bg-${item.color}-500 mr-2 animate-pulse`} />
                            {item.statusText}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button className="p-2 hover:bg-white hover:shadow-md rounded-xl transition-all text-slate-300 hover:text-orange-500 border border-transparent hover:border-slate-100">
                            <Eye className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* --- Global Modals --- */}
      {showProxyManager && (
        <ProxyManager onClose={() => setShowProxyManager(false)} />
      )}
      {activeActionClaim && (
        <ActionRequiredModal
          claimId={activeActionClaim}
          onClose={() => setActiveActionClaim(null)}
        />
      )}
    </div>
  );
}
