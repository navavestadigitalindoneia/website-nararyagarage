import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: { default: "Nararya Garage — Virtual Simulator & Gaming Community", template: "%s | Nararya Garage" },
  description: "Pusat komunitas simulator, gaming, convoy, modding, creator showcase, dan layanan digital Nararya Garage.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: { title: "Nararya Garage", description: "Virtual Simulator & Gaming Community", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}