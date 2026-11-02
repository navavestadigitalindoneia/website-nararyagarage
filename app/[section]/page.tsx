import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const pages:Record<string,{title:string;description:string;detail:string}>={
 about:{title:"About Nararya Garage",description:"Kenali identitas, visi, dan ekosistem Nararya Garage.",detail:"Nararya Garage adalah Virtual Simulator, Modding, and Gaming Community yang menghubungkan pemain, komunitas, dan creator."},
 contact:{title:"Contact",description:"Hubungi tim Nararya Garage.",detail:"Informasi kanal kontak resmi akan ditampilkan setelah alamat komunikasi dikonfigurasi."},
 community:{title:"Community",description:"Temukan ruang komunitas untuk game dan simulator favorit.",detail:"Direktori komunitas akan terhubung ke database setelah konfigurasi PostgreSQL tersedia."},
 platforms:{title:"Gaming Platforms",description:"Jelajahi platform simulator dan gaming yang didukung.",detail:"Platform awal mencakup BUSSID, ETS2, ATS, TOE3, TSI, Roblox, dan platform lain yang dapat dikelola admin."},
 events:{title:"Events & Convoys",description:"Agenda kegiatan, event, dan convoy komunitas.",detail:"Jadwal dan pendaftaran event membutuhkan backend serta database aktif."},
 convoy:{title:"Convoy",description:"Informasi perjalanan dan convoy komunitas.",detail:"Rute, meeting point, kuota, dan peserta akan dikelola melalui modul event."},
 modding:{title:"Modding Showcase",description:"Karya mod, livery, texture, dan asset creator.",detail:"Karya komunitas melewati proses submission dan moderasi sebelum dipublikasikan."},
 liveries:{title:"Livery Showcase",description:"Katalog karya livery dari creator komunitas.",detail:"Konten livery akan bersumber dari submission yang telah disetujui."},
 showcase:{title:"Creator Showcase",description:"Pamerkan karya dan portofolio creator.",detail:"Showcase mendukung karya 3D, texture, kendaraan, dan karya digital komunitas."},
 gallery:{title:"Gallery",description:"Dokumentasi foto kegiatan dan karya komunitas.",detail:"Album dan media akan dimuat dari database setelah storage dikonfigurasi."},
 videos:{title:"Videos",description:"Video kegiatan, simulator, dan creator.",detail:"Video embed akan ditampilkan dari sumber yang disetujui."},
 forum:{title:"Community Forum",description:"Diskusi, berbagi informasi, dan bertukar pengalaman.",detail:"Forum dan moderasi memerlukan autentikasi serta database aktif."},
 tutorials:{title:"Tutorials",description:"Panduan simulator, modding, dan komunitas.",detail:"Tutorial akan memiliki kategori, penulis, dan halaman detail."},
 downloads:{title:"Downloads",description:"Resource dan file komunitas.",detail:"File hanya dipublikasikan dengan sumber, lisensi, dan izin distribusi yang jelas."},
 news:{title:"News",description:"Berita dan pengumuman Nararya Garage.",detail:"Artikel berita akan dikelola melalui Admin Control Center."},
 partners:{title:"Partners",description:"Partner dan kolaborator Nararya Garage.",detail:"Informasi partner resmi akan ditampilkan setelah data diverifikasi."},
 achievements:{title:"Achievements",description:"Pencapaian dan kontribusi anggota.",detail:"Achievement anggota akan dicatat berdasarkan aktivitas yang terverifikasi."},
 fleet:{title:"Community Fleet",description:"Showcase kendaraan milik anggota.",detail:"Pengajuan fleet membutuhkan review admin sebelum publikasi."},
 recruitment:{title:"Recruitment",description:"Bergabung dan berkontribusi bersama tim Nararya Garage.",detail:"Formulir recruitment akan diaktifkan bersama autentikasi dan penyimpanan aplikasi."},
 submit:{title:"Submit Your Work",description:"Kirim karya untuk ditinjau tim moderasi.",detail:"Submission akan melalui validasi, review, dan persetujuan sebelum tampil publik."},
 repositories:{title:"GitHub Repositories",description:"Jelajahi proyek dan aktivitas pengembangan.",detail:"Integrasi GitHub membutuhkan GITHUB_OWNER dan token dengan izin yang sesuai."},
 store:{title:"Nararya Garage Store",description:"Layanan dan produk digital Nararya Garage.",detail:"Katalog dan harga wajib berasal dari server. Checkout dan pembayaran belum diaktifkan pada scaffold ini."},
 "joki-game":{title:"Joki Game",description:"Informasi layanan bantuan game.",detail:"Detail layanan dan ketersediaan perlu dikonfigurasi oleh pengelola."},
 "topup-game":{title:"Top Up Game",description:"Informasi layanan top up game.",detail:"Katalog dan harga harus disediakan melalui API resmi sebelum transaksi dibuka."},
 login:{title:"Member Login",description:"Masuk ke akun Nararya Garage.",detail:"Autentikasi belum dikonfigurasi. Jangan memasukkan kredensial sebelum sistem auth diaktifkan."},
 register:{title:"Join Nararya Garage",description:"Pendaftaran anggota komunitas.",detail:"Registrasi akan tersedia setelah database, verifikasi email, dan session management dikonfigurasi."},
 member:{title:"Member Center",description:"Pusat aktivitas dan profil anggota.",detail:"Member Center membutuhkan autentikasi dan data anggota yang tersimpan."},
};
export function generateStaticParams(){return Object.keys(pages).map(section=>({section}));}
export async function generateMetadata({params}:{params:Promise<{section:string}>}):Promise<Metadata>{const {section}=await params;const page=pages[section];return page?{title:page.title,description:page.description}:{title:"Page not found"};}
export default async function SectionPage({params}:{params:Promise<{section:string}>}){const {section}=await params;const page=pages[section];if(!page)notFound();return <main className="container min-h-[65vh] py-20"><p className="eyebrow">Nararya Garage / {section.replaceAll("-"," ")}</p><h1 className="mt-5 text-4xl font-black sm:text-6xl">{page.title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">{page.description}</p><div className="mt-12 max-w-3xl rounded-2xl border border-white/10 bg-[#111317] p-7"><h2 className="text-lg font-bold">Module status</h2><p className="mt-3 leading-7 text-zinc-400">{page.detail}</p><p className="mt-5 inline-flex rounded-full border border-[#ff6b24]/30 bg-[#ff6b24]/10 px-3 py-1 text-xs font-semibold text-[#ff9a69]">NEEDS CONFIGURATION / IMPLEMENTATION</p></div><Link href="/" className="mt-8 inline-block text-sm font-semibold text-[#ff8b4f]">← Back to homepage</Link></main>}
