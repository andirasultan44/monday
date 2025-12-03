// src/pages/CourseDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "@/data/mockCourses";
import type { Course } from "@/types";

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const course: Course | undefined = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <main className="vb-page">
        <div className="vb-container">
          <p>Kelas tidak ditemukan.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="vb-course-detail-page">
      {/* Hero section: biarkan background yang sudah kamu buat */}
      <section className="vb-course-hero">
        <div className="vb-container vb-course-hero-inner">
          <div className="vb-hero-text">
            <p className="vb-breadcrumb">Beranda / Desain / {course.title}</p>
            <h1 className="vb-hero-title">{course.title}</h1>
            <p className="vb-hero-subtitle">
              Belajar bersama tutor profesional di Video Course.
            </p>

            <div className="vb-hero-meta">
              <div className="vb-rating">
                <span className="vb-stars">★★★★☆</span>
                <span className="vb-rating-number">
                  {course.rating} ({course.reviews} review)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body: kiri konten, kanan box harga */}
      <section className="vb-container vb-course-layout">
        {/* Kiri: deskripsi, tutor, modul, review */}
        <div className="vb-course-main">
          <section className="vb-section">
            <h2 className="vb-section-title">Deskripsi</h2>
            <p className="vb-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem dignissim
              mattis tristique elementum. Sit consequat varius vel. Diam aenean mattis
              hac vitae, orci sed pretium pretium. Sit ut cursus adipiscing vestibulum,
              ac nibh. Viverra quis at quis suscipit. Fermentum dui duis porttitor amet
              diam sed ultricies condimentum dolor.
            </p>
          </section>

          <section className="vb-section">
            <h2 className="vb-section-title">Belajar bersama Tutor Profesional</h2>
            <div className="vb-tutor-card">
              <img
                src={course.instructorAvatar}
                alt={course.instructor}
                className="vb-tutor-avatar"
              />
              <div>
                <div className="vb-tutor-name">{course.instructor}</div>
                <div className="vb-tutor-title">{course.instructorTitle}</div>
                <p className="vb-tutor-bio">
                  Berkarier di bidang {course.title} selama lebih dari 3 tahun. 
                  Saat ini bekerja sebagai {course.instructorTitle}.
                </p>
              </div>
            </div>
          </section>

          <section className="vb-section">
            <h2 className="vb-section-title">Kamu akan mempelajari</h2>
            <div className="vb-modules-list">
              {course.modules.map((m) => (
                <div key={m.id} className="vb-module-item">
                  <div className="vb-module-title">{m.title}</div>
                  <div className="vb-module-meta">
                    <span className="vb-pill">{m.type}</span>
                    {m.duration && <span className="vb-pill">{m.duration}</span>}
                    {m.questions && (
                      <span className="vb-pill">
                        {m.questions} soal
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="vb-section">
            <h2 className="vb-section-title">Rating dan Review</h2>
            <div className="vb-review-summary">
              <div className="vb-review-score">{course.rating}</div>
              <div className="vb-review-stars">★★★★☆</div>
              <div className="vb-review-count">{course.reviews} review</div>
            </div>
          </section>
        </div>

        {/* Kanan: card harga seperti di desain */}
        <aside className="vb-course-sidebar">
          <div className="vb-price-card">
            <div className="vb-price-card-header">
              <h3 className="vb-price-title">{course.title}</h3>
              <p className="vb-price-subtitle">
                Penawaran spesial tersisa 2 hari lagi!
              </p>
            </div>

            <div className="vb-price-row">
              <span className="vb-price-main">
                Rp {(course.price / 1000).toFixed(0)}K
              </span>
              {course.discount > 0 && (
                <>
                  <span className="vb-price-strike">
                    Rp {((course.price * (100 + course.discount)) / 100000).toFixed(0)}K
                  </span>
                  <span className="vb-price-discount">
                    Diskon {course.discount}%
                  </span>
                </>
              )}
            </div>

            <button className="btn btn-primary vb-fullwidth">
              Beli Sekarang
            </button>
            <button className="btn btn-ghost vb-fullwidth">
              Bagikan Kelas
            </button>

            <div className="vb-includes">
              <h4>Kelas ini sudah termasuk</h4>
              <ul>
                <li>Ujian Akhir</li>
                <li>{course.modules.length} Video</li>
                <li>Dokumen materi</li>
                <li>Sertifikat</li>
              </ul>
            </div>

            <div className="vb-language">
              <h4>Bahasa Pengantar</h4>
              <p>Bahasa Indonesia</p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
