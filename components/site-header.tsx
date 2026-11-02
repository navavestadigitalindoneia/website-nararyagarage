"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["Community","/community"],["Platforms","/platforms"],["Events","/events"],
  ["Modding","/modding"],["Gallery","/gallery"],["Forum","/forum"],["Store","/store"]
];
export function SiteHeader(){
  const [open,setOpen]=useState(false);
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090a0c]/90 backdrop-blur-xl">
    <div className="container flex h-[76px] items-center justify-between gap-6">
      <Link href="/" className="flex items-center gap-3" onClick={()=>setOpen(false)}>
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#ff6b24] text-lg font-black text-black">NG</span>
        <span className="leading-tight"><b className="block text-sm tracking-[.16em]">NARARYA</b><small className="text-[10px] tracking-[.32em] text-[#ff8b4f]">GARAGE</small></span>
      </Link>
      <nav className="hidden items-center gap-6 lg:flex">{links.map(([label,href])=><Link key={href} href={href} className="text-sm text-zinc-300 transition hover:text-[#ff8b4f]">{label}</Link>)}</nav>
      <div className="hidden items-center gap-3 lg:flex"><Link href="/login" className="text-sm text-zinc-300 hover:text-white">Login</Link><Link href="/register" className="rounded-lg bg-[#ff6b24] px-4 py-2.5 text-sm font-bold text-black transition hover:bg-[#ff8b4f]">Join Community <ArrowUpRight className="ml-1 inline" size={15}/></Link></div>
      <button aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)} className="rounded-lg border border-white/15 p-2 lg:hidden">{open?<X/>:<Menu/>}</button>
    </div>
    {open&&<nav className="border-t border-white/10 bg-[#0d0f12] px-5 py-4 lg:hidden">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)} className="block border-b border-white/5 py-3 text-sm text-zinc-200">{label}</Link>)}<div className="flex gap-4 pt-4"><Link href="/login" onClick={()=>setOpen(false)}>Login</Link><Link href="/register" onClick={()=>setOpen(false)} className="text-[#ff8b4f]">Register</Link></div></nav>}
  </header>;
}