// src/pages/Catalog.tsx
import React, { JSX, useEffect, useState } from "react";

// UI components (TIDAK DIUBAH)
import CourseForm from "../components/ui/CourseForm";
import CourseList from "../components/ui/CourseList";

// service API (BARU di FE3)
import {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from "@/services/api/course.service";

import type { Course } from "@/types";

export default function Catalog(): JSX.Element {
  // =========================
  // 1. STATE
  // =========================
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // =========================
  // 2. GET DATA (SAAT PAGE DIBUKA)
  // =========================
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error("Gagal mengambil data course:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // =========================
  // 3. CREATE COURSE
  // =========================
  const addCourse = async (payload: Partial<Course>) => {
    try {
      const createdCourse = await createCourse(payload);
      setCourses(prev => [...prev, createdCourse]);
    } catch (error) {
      console.error("Gagal menambahkan course:", error);
    }
  };

  // =========================
  // 4. UPDATE COURSE (PATCH)
  // =========================
  const updateCourseById = async (id: number, data: Partial<Course>) => {
    try {
      const updatedCourse = await updateCourse(id, data);
      setCourses(prev =>
        prev.map(c => (c.id === updatedCourse.id ? updatedCourse : c))
      );
    } catch (error) {
      console.error("Gagal mengupdate course:", error);
    }
  };

  // =========================
  // 5. DELETE COURSE
  // =========================
  const removeCourse = async (id: number) => {
    try {
      await deleteCourse(id);
      setCourses(prev => prev.filter(c => c.id !== id));
    } catch (error) {
      console.error("Gagal menghapus course:", error);
    }
  };

  // =========================
  // 6. LOADING STATE
  // =========================
  if (loading) {
    return (
      <main className="container" style={{ padding: "40px 0" }}>
        <p style={{ color: "#fff" }}>Memuat data course...</p>
      </main>
    );
  }

  // =========================
  // 7. RENDER UI
  // =========================
  return (
    <main className="container" style={{ padding: "40px 0" }}>
      <h1 style={{ color: "#fff" }}>
        Koleksi Video Pembelajaran Unggulan
      </h1>

      <section style={{ margin: "20px 0" }}>
        <CourseForm onAdd={addCourse} />
      </section>

      <section style={{ marginTop: 20 }}>
        <CourseList
          courses={courses}
          onUpdate={updateCourseById}
          onRemove={removeCourse}
        />
      </section>
    </main>
  );
}
