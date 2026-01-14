'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import { useState, useEffect } from 'react';

// --- Component: Navbar ---
// แถบเมนูหลักของเว็บไซต์, รองรับการแสดงผลทั้งบน Desktop และ Mobile
const Navbar = () => {
    // State สำหรับจัดการการเปิด/ปิดเมนูบนมือถือ
    const [isNavOpen, setIsNavOpen] = useState(false);

    // ฟังก์ชันสำหรับจัดการ Smooth Scroll เมื่อคลิกลิงก์ Anchor
    const handleSmoothScroll = (e, href) => {
        // ตรวจสอบว่าเป็นลิงก์ที่ไปยังส่วนต่างๆ ในหน้าเดียวกันหรือไม่ (เช่น /#contact)
        if (href.startsWith('/#')) {
            const targetId = href.substring(2); // ตัด '/#' ออกเพื่อให้ได้ id ของ element
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault(); // ป้องกันการทำงานปกติของ Link เฉพาะเมื่อเจอ element ในหน้าปัจจุบัน
                // เลื่อนไปยัง element เป้าหมายอย่างนุ่มนวล
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
            closeNav(); // ปิดเมนูมือถือ (ถ้าเปิดอยู่)
        }
    };

    // เพิ่ม event listener เพื่อปิดเมนูเมื่อกดปุ่ม Esc
    useEffect(() => {
        const handleEsc = (event) => { if (event.key === 'Escape') closeNav(); };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);
    // ฟังก์ชันสำหรับสลับสถานะการเปิด/ปิดเมนู
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    // ฟังก์ชันสำหรับปิดเมนู (ใช้เมื่อคลิกลิงก์ในเมนูมือถือ)
    const closeNav = () => {
        setIsNavOpen(false);
    };

    return (
        <nav className={styles.navbar} style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
            <div className={styles.navbarContainer}>
                <div className={styles.navbarContent}>
                    {/* ส่วนโลโก้และชื่อโรงพยาบาล */}
                    <Link href="/" onClick={closeNav} className={styles.navBrand}>
                        <Image
                            src="/navbar/logo.png" // Make sure your logo is in the /public folder
                            alt="KPPMCH Logo"
                            width={40}
                            height={40}
                            className={styles.logoImage}
                        />
                        <span className={styles.brandText}>โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร</span>
                    </Link>
                    {/* Hamburger Menu Button (แสดงเฉพาะบน Mobile) */}
                    <div className={styles.hamburgerMenu}>
                        <button onClick={toggleNav} type="button" className={styles.hamburgerButton} aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className={styles.hamburgerIcon}>
                                {isNavOpen ? (
                                    <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                ) : (
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                )}
                            </svg>
                        </button>
                    </div>
                    {/* Desktop Menu (แสดงเฉพาะบน Desktop) */}
                    <div className={styles.desktopMenu}>
                        <Link href="/" className={styles.navLink}>หน้าแรก</Link>
                        <Link href="/About" className={styles.navLink}>เกี่ยวกับเรา</Link>                       
                        <Link href="/OrganizationalStructure" className={styles.navLink}>โครงสร้างองค์กร</Link>
                        {/* ใช้ onClick เพื่อเรียกใช้ handleSmoothScroll สำหรับลิงก์ภายในหน้า */}
                        <a href="/#contact" onClick={(e) => handleSmoothScroll(e, '/#contact')} className={styles.navLink}>ติดต่อเรา</a>
                        <a href="/#faq" onClick={(e) => handleSmoothScroll(e, '/#faq')} className={styles.navLink}>FAQ</a>
                    </div>
                </div>
                {/* Mobile Menu (จะแสดงเมื่อ isNavOpen เป็น true) */}
                <div className={`${styles.mobileMenu} ${isNavOpen ? styles.mobileMenuOpen : ''}`}>
                    {/* ในเมนูมือถือ, เราจะใช้ onClick ที่มีอยู่แล้วและเพิ่มการจัดการ smooth scroll เข้าไป */}
                    <Link href="/" onClick={closeNav} className={styles.mobileNavLink}>หน้าแรก</Link>
                    <Link href="/About" onClick={closeNav} className={styles.mobileNavLink}>เกี่ยวกับเรา</Link>
                    <Link href="/OrganizationalStructure" onClick={closeNav} className={styles.mobileNavLink}>โครงสร้างองค์กร</Link>
                    <a href="/#contact" onClick={(e) => handleSmoothScroll(e, '/#contact')} className={styles.mobileNavLink}>ติดต่อเรา</a>
                    <a href="/#faq" onClick={(e) => handleSmoothScroll(e, '/#faq')} className={styles.mobileNavLink}>FAQ</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;