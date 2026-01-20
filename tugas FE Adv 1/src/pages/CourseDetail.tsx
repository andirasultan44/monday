// src/pages/CourseDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";
import type { Course } from "@/types";

type Props = {
  courses: Course[];
  loading: boolean;
};

export default function CourseDetail({ courses, loading }: Props) {
  // ambil id dari URL
  const { id } = useParams<{ id: string }>();

  // 1. saat data masih diambil dari API
  if (loading) {
    return (
      <main className="vb-page">
        <div className="vb-container">
          <p>Memuat data kelas...</p>
        </div>
      </main>
    );
  }

  // 2. cari course berdasarkan id
  // id dari URL = string
  // id dari API (json-server) = number
  const course = courses.find(c => String(c.id) === id);

  // 3. jika course tidak ditemukan
  if (!course) {
    return (
      <main className="vb-page">
        <div className="vb-container">
          <p>Kelas tidak ditemukan.</p>
        </div>
      </main>
    );
  }

  // 4. render detail (UI TETAP, DATA DARI API)
  return (
    <main className="vb-course-detail-page">
      {/* HERO */}
      <section className="vb-course-hero">
        <div className="vb-container vb-course-hero-inner">
          <div className="vb-hero-text">
            <p className="vb-breadcrumb">
              Beranda / Kelas / {course.title}
            </p>

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

      {/* CONTENT */}
      <section className="vb-container vb-course-layout">
        {/* LEFT */}
        <div className="vb-course-main">
          <section className="vb-section">
            <h2 className="vb-section-title">Deskripsi</h2>
            <p className="vb-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Course ini dirancang untuk membantu kamu memahami topik
              {` ${course.title}`} secara bertahap dan praktis.
            </p>
          </section>

          <section className="vb-section">
            <h2 className="vb-section-title">
              Belajar bersama Tutor Profesional
            </h2>

            <div className="vb-tutor-card">
              <img
                src={course.instructorAvatar}
                alt={course.instructor}
                className="vb-tutor-avatar"
              />

              <div>
                <div className="vb-tutor-name">
                  {course.instructor}
                </div>

                <div className="vb-tutor-title">
                  {course.instructorTitle}
                </div>

                <p className="vb-tutor-bio">
                  Berpengalaman di bidang ini dan siap membimbing kamu
                  dari dasar hingga mahir.
                </p>
              </div>
            </div>
          </section>

          <section className="vb-section">
            <h2 className="vb-section-title">Kamu akan mempelajari</h2>

            <div className="vb-modules-list">
              {course.modules.map(module => (
                <div key={module.id} className="vb-module-item">
                  <div className="vb-module-title">
                    {module.title}
                  </div>

                  <div className="vb-module-meta">
                    <span className="vb-pill">{module.type}</span>

                    {module.duration && (
                      <span className="vb-pill">
                        {module.duration}
                      </span>
                    )}

                    {module.questions && (
                      <span className="vb-pill">
                        {module.questions} soal
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="vb-section">
            <h2 className="vb-section-title">Rating & Review</h2>

            <div className="vb-review-summary">
              <div className="vb-review-score">
                {course.rating}
              </div>
              <div className="vb-review-stars">★★★★☆</div>
              <div className="vb-review-count">
                {course.reviews} review
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT */}
        <aside className="vb-course-sidebar">
          <div className="vb-price-card">
            <div className="vb-price-card-header">
              <h3 className="vb-price-title">{course.title}</h3>
              <p className="vb-price-subtitle">
                Penawaran terbatas untuk kamu
              </p>
            </div>

            <div className="vb-price-row">
              <span className="vb-price-main">
                Rp {(course.price / 1000).toFixed(0)}K
              </span>

              {course.discount > 0 && (
                <span className="vb-price-discount">
                  Diskon {course.discount}%
                </span>
              )}
            </div>

            <button className="btn btn-primary vb-fullwidth">
              Beli Sekarang
            </button>

            <button className="btn btn-ghost vb-fullwidth">
              Bagikan Kelas
            </button>

            <div className="vb-includes">
              <h4>Kelas ini termasuk</h4>
              <ul>
                <li>{course.modules.length} Modul</li>
                <li>Dokumen Materi</li>
                <li>Sertifikat</li>
              </ul>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
