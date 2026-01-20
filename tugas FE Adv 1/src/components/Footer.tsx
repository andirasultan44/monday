// src/components/Footer.tsx
import React, { JSX } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/videobelajar.png';

export default function Footer(): JSX.Element {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* LEFT: Brand & Contact */}
        <div className="footer-brand">
          <div className="logo-row">
             <Link to="/" className="logo" aria-label="videobelajar">
                     <img src={logo} alt="videobelajar" className="logo-img" />
                    </Link>
          </div>
         

          <p className="footer-desc">
            Gali Potensi Anda Melalui Pembelajaran
            <br />
            Video di hariesok.id!
          </p>

          <address className="footer-address">
            Jl. Usman Effendi No. 50 Lowokwaru, Malang
            <br />
            <a href="tel:+6287771231234">+62-877-7123-1234</a>
          </address>
        </div>

        {/* MIDDLE: Link columns */}
        <div className="footer-links">
          <div className="links-col">
            <h4>Kategori</h4>
            <ul>
              <li><Link to="/category/digital">Digital & Teknologi</Link></li>
              <li><Link to="/category/marketing">Pemasaran</Link></li>
              <li><Link to="/category/business">Manajemen Bisnis</Link></li>
              <li><Link to="/category/personal">Pengembangan Diri</Link></li>
              <li><Link to="/category/design">Desain</Link></li>
            </ul>
          </div>

          <div className="links-col">
            <h4>Perusahaan</h4>
            <ul>
              <li><Link to="/about">Tentang Kami</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/privacy">Kebijakan Privasi</Link></li>
              <li><Link to="/terms">Ketentuan Layanan</Link></li>
              <li><Link to="/help">Bantuan</Link></li>
            </ul>
          </div>

          <div className="links-col">
            <h4>Komunitas</h4>
            <ul>
              <li><Link to="/tips">Tips Sukses</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* line separator */}
      <div className="container footer-divider" />

      {/* bottom: copyright + socials di ujung kanan */}
      <div className="container footer-bottom">
        <div className="copyright">
          @2023 Gerobak Sayur All Rights Reserved.
        </div>

        <div className="socials" aria-label="social links">
          <a href="#" aria-label="LinkedIn" className="social-btn" title="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <path d="M4.98 3.5C4.98 4.604 4.06 5.5 2.99 5.5 1.92 5.5 1 4.604 1 3.5 1 2.396 1.92 1.5 2.99 1.5 4.06 1.5 4.98 2.396 4.98 3.5z" fill="currentColor" />
              <path d="M0.5 8.5h5v14h-5v-14zM9.5 8.5h4.8v2h.07c.67-1.28 2.3-2.64 4.73-2.64 5.05 0 6 3.33 6 7.66v6.98h-5v-6.2c0-1.48-.03-3.39-2.06-3.39-2.07 0-2.39 1.62-2.39 3.29v6.3h-5v-14z" fill="currentColor" />
            </svg>
          </a>

          <a href="#" aria-label="Facebook" className="social-btn" title="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.65 9.12 8.44 9.88v-6.99H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3V21.9C18.35 21.12 22 16.99 22 12z" fill="currentColor" />
            </svg>
          </a>

          <a href="#" aria-label="Instagram" className="social-btn" title="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5A4.5 4.5 0 107 12 4.5 4.5 0 0012 7.5zm6.5-.8a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" fill="currentColor" />
              <path d="M12 9.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill="currentColor" />
            </svg>
          </a>

          <a href="#" aria-label="Twitter" className="social-btn" title="Twitter">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <path d="M22 5.92c-.64.28-1.33.48-2.05.57a3.59 3.59 0 001.57-1.98c-.7.42-1.48.72-2.3.88a3.55 3.55 0 00-6.05 3.23A10.07 10.07 0 013 4.8a3.54 3.54 0 001.1 4.73c-.56-.02-1.09-.17-1.55-.43v.04a3.54 3.54 0 002.84 3.47c-.5.14-1.03.16-1.58.06a3.55 3.55 0 003.31 2.46A7.12 7.12 0 012 19.54 10.06 10.06 0 008.29 21c6.2 0 9.59-5.13 9.59-9.58v-.44c.66-.47 1.21-1.06 1.66-1.73-.6.27-1.24.45-1.9.54z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
