import './styles/globals.css'
import NavBar from './components/Navbar'
// นำเข้า Component และฟอนต์ที่จำเป็น
import Script from 'next/script';
import Footer from './components/Footer'
import BackToTopButton from './components/BackToTopButton';
import FloatingLineAd from './components/LineAd';
import { Sarabun } from 'next/font/google';

const sarabun = Sarabun({
  // ตั้งค่าฟอนต์ Sarabun
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

// --- Viewport Configuration ---
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

// --- Metadata สำหรับ SEO ---
export const metadata = {
  title: {
    default: 'โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร | บริการสุขภาพเพื่อชุมชน',
    template: '%s | โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร',
  },
  metadataBase: new URL('https://kppmch-service.vercel.app/'),
  description: 'โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร ให้บริการสุขภาพเพื่อชุมชนอย่างครบวงจร ตรวจรักษาโรคทั่วไป แพทย์แผนจีน แพทย์แผนไทย ฝังเข็ม และบริการสุขภาพอื่นๆ โดยทีมแพทย์ผู้เชี่ยวชาญ',
  keywords: ['โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร', 'โรงพยาบาลชุมชน', 'ตารางแพทย์', 'ตรวจโรคทั่วไป', 'แพทย์แผนจีน', 'แพทย์แผนไทย', 'ฝังเข็ม', 'กำแพงเพชร', 'คลินิก', 'รักษาโรค', 'สุขภาพชุมชน'],
  authors: [{ name: 'งานเทคโนโลยีดิจิทัล โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร' }],
  creator: 'งานเทคโนโลยีดิจิทัล โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร',
  publisher: 'โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico', // icon
  },
  // ยืนยันตัวตนกับ Search Engine (แนะนำให้ใส่เมื่อพร้อม)
  verification: {
    google: 'google-site-verification=YOUR_CODE', 
  },
  // ระบุ URL หลักเพื่อป้องกันเนื้อหาซ้ำซ้อน (Duplicate Content)
  alternates: {
    canonical: '/',
  },
  // ระบุพิกัดภูมิศาสตร์ (Local SEO) ช่วยให้คนในพื้นที่ค้นหาเจอได้ง่ายขึ้น
  other: {
    'geo.region': 'TH-62', // รหัสจังหวัดกำแพงเพชร
    'geo.placename': 'Kamphaeng Phet',
    'geo.position': '16.4833;99.5222', // TODO: แก้ไขเป็นพิกัดจริงของโรงพยาบาล (ละติจูด;ลองจิจูด) เพื่อความแม่นยำสูงสุด
    'ICBM': '16.4833, 99.5222',
  },
  // การตั้งค่าสำหรับ Search Engine Bots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // การตั้งค่าสำหรับ Open Graph (แสดงผลเมื่อแชร์ใน Social Media)
  openGraph: {
    title: 'โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร | บริการสุขภาพเพื่อชุมชน',
    description: 'ให้บริการตรวจรักษาโรคทั่วไป แพทย์แผนจีน แพทย์แผนไทย และบริการสุขภาพครบวงจร',
    url: '/', // Path relative to metadataBase (หน้าแรกของเว็บไซต์)
    siteName: 'โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร', // ชื่อของเว็บไซต์',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ภาพ Preview ของโรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร',
    description: 'บริการสุขภาพเพื่อชุมชน โดยเทศบาลเมืองกำแพงเพชร',
    images: ['/og-image.png'],
  },
  category: 'health',
}

// --- JSON-LD Schema สำหรับ SEO (Structured Data) ---
const hospitalSchema = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  "name": "โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร",
  "url": "https://kppmch-service.vercel.app/",
  "logo": "https://kppmch-service.vercel.app/logo.png",
  "image": "https://kppmch-service.vercel.app/og-image.png",
  "description": "โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร ให้บริการตรวจรักษาโรคทั่วไป, แพทย์แผนจีน, แพทย์แผนไทย และบริการการแพทย์ทางไกล (Telemedicine) ด้วยทีมแพทย์ผู้เชี่ยวชาญ",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "35 ซ.2 ถ.ราชดำเนิน 1",
    "addressLocality": "ในเมือง, เมืองกำแพงเพชร",
    "addressRegion": "กำแพงเพชร",
    "postalCode": "62000",
    "addressCountry": "TH"
  },
  "telephone": "+66-55-716-715",
  "openingHours": "Mo-Fr 08:30-16:30",
  "sameAs": [
    "https://www.facebook.com/kmch.kpp",
    "https://www.tiktok.com/@kppmuch"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://kppmch-service.vercel.app/",
  "name": "โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://kppmch-service.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// --- Component หลักของ Layout ---
export default function RootLayout({ children }) {
  return (
    <html lang="th" className={sarabun.className}> {/* เปลี่ยน lang เป็น "th" และใช้ฟอนต์ Sarabun */}
      <head>
        {/* ใส่ Script ของ JSON-LD Schema */}
        {/* Next.js จะจัดการ title, description, icons, และ openGraph/twitter images จาก metadata object ด้านบนโดยอัตโนมัติ */}
        {/* viewport และ charset จะถูกเพิ่มโดย Next.js โดยอัตโนมัติ */}
        <Script id="hospital-schema" type="application/ld+json">
          {JSON.stringify(hospitalSchema)}
        </Script>
        <Script id="website-schema" type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </Script>
      </head>
      <body >
        {/* แสดง Components ที่ใช้ร่วมกันทุกหน้า */}
        <NavBar />
        {children}
        <FloatingLineAd />
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  )
}
