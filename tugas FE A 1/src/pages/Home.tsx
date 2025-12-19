import React, { JSX, useEffect, useState } from "react";
import CourseCard from "@/components/CourseCard";
import Newsletter from "@/components/Newsletter";
import banner from "../assets/banner.jpg";

import { getCourses } from "@/services/api/course.service";
import type { Course } from "@/types";

const categories = [
  "Semua Kelas",
  "Pemasaran",
  "Desain",
  "Pengembangan Diri",
  "Bisnis",
];

export default function Home(): JSX.Element {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCat, setActiveCat] = useState<string>("Semua Kelas");

  // ambil data dari API (FE3)
 useEffect(() => {
  const fetchCourses = async () => {
    try {
      const data = await getCourses();
      setCourses(data);
      localStorage.setItem("fe1_courses_v1", JSON.stringify(data));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      console.warn("API gagal, fallback ke localStorage");

      const raw = localStorage.getItem("fe1_courses_v1");
      if (raw) {
        setCourses(JSON.parse(raw));
      }
    } finally {
      setLoading(false);
    }
  };

  fetchCourses();
}, []);


  

  // filter sederhana (tetap sama seperti sebelumnya)
  const filtered =
    activeCat === "Semua Kelas"
      ? courses
      : courses.filter((c) =>
          c.title.toLowerCase().includes(activeCat.toLowerCase())
        );

  if (loading) {
    return (
      <main className="container" style={{ padding: "40px 0" }}>
        <p>Memuat data...</p>
      </main>
    );
  }

  return (
    <main>
      {/* HERO */}
      <section style={heroWrap}>
        <div className="container" style={heroInner}>
          <h1 style={heroTitle}>
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>
          <p style={heroSubtitle}>
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
          <a
            href="/catalog"
            className="btn btn-primary"
            style={{ marginTop: 18 }}
          >
            Temukan Video Course untuk Dipelajari!
          </a>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="container" style={{ padding: "40px 0" }}>
        <h2
          style={{
            color: "var(--gray-700)",
            margin: 0,
            fontSize: 28,
            fontWeight: 800,
          }}
        >
          Koleksi Video Pembelajaran Unggulan
        </h2>
        <p style={{ color: "var(--gray-400)", marginTop: 6 }}>
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>

        {/* categories */}
        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: 18,
            alignItems: "center",
          }}
        >
          <nav style={{ display: "flex", gap: 18 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                style={{
                  background: "transparent",
                  border: "none",
                  padding: "6px 10px",
                  color:
                    activeCat === cat
                      ? "var(--color-warning)"
                      : "var(--gray-100)",
                  borderBottom:
                    activeCat === cat
                      ? "3px solid var(--color-warning)"
                      : "3px solid transparent",
                  fontWeight: activeCat === cat ? 800 : 600,
                  cursor: "pointer",
                }}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>

        {/* grid */}
        <div className="course-grid">
          {filtered.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </section>

      {/* newsletter */}
      <Newsletter />
    </main>
  );
}

/* inline styles */
const heroWrap: React.CSSProperties = {
  padding: "64px 0 48px",
  backgroundImage: `linear-gradient(rgba(7,7,7,0.85), rgba(7,7,7,0.85)), url(${banner})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: 12,
  margin: "60px",
};

const heroInner: React.CSSProperties = {
  maxWidth: 980,
  margin: "0 auto",
  textAlign: "center",
  color: "#fff",
};

const heroTitle: React.CSSProperties = {
  fontSize: 40,
  lineHeight: 1.05,
  fontWeight: 900,
  margin: 0,
  textShadow: "0 6px 18px rgba(0,0,0,0.6)",
};

const heroSubtitle: React.CSSProperties = {
  color: "rgba(255,255,255,0.85)",
  marginTop: 12,
  fontSize: 16,
  maxWidth: 840,
  marginLeft: "auto",
  marginRight: "auto",
};
