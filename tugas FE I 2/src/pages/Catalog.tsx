// src/pages/Catalog.tsx
import React, { JSX, useEffect, useState } from "react";
import CourseForm from "../components/ui/CourseForm";
import CourseList from "../components/ui/CourseList";
import { courses as mockCourses } from "@/data/mockCourses";
import type { Course } from "@/types";

const STORAGE_KEY = "fe1_courses_v1";

export default function Catalog(): JSX.Element {
  // inisialisasi dari localStorage jika ada, kalau tidak pakai mockCourses
  const initial = (): Course[] => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw) as Course[];
    } catch (e) {
      console.warn("Failed to parse stored courses", e);
    }
    return mockCourses;
  };

  const [courses, setCourses] = useState<Course[]>(initial);

  // persist ke localStorage tiap kali courses berubah
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
    } catch (e) {
      console.warn("Failed to persist courses", e);
    }
  }, [courses]);

  // CREATE
  const addCourse = (payload: Partial<Course>) => {
    const newCourse: Course = {
      id: `c${Date.now()}`,
      title: payload.title?.trim() ?? "Untitled Course",
      instructor: payload.instructor ?? "Unknown",
      instructorTitle: payload.instructorTitle ?? "",
      instructorAvatar: payload.instructorAvatar ?? mockCourses[0]?.instructorAvatar ?? "",
      price: payload.price ?? 0,
      discount: payload.discount ?? 0,
      thumbnail: payload.thumbnail ?? mockCourses[0]?.thumbnail ?? "",
      rating: payload.rating ?? 0,
      reviews: payload.reviews ?? 0,
      modules: payload.modules ?? [],
    };
    setCourses(prev => [...prev, newCourse]);
  };

  // UPDATE (partial)
  const updateCourse = (id: string, data: Partial<Course>) => {
    setCourses(prev => prev.map(c => (c.id === id ? { ...c, ...data } : c)));
  };

  // DELETE
  const removeCourse = (id: string) => {
    setCourses(prev => prev.filter(c => c.id !== id));
  };

  return (
    <main className="container" style={{ padding: "40px 0" }}>
      <h1 style={{ color: "#fff" }}>Koleksi Video Pembelajaran Unggulan</h1>

      <section style={{ margin: "20px 0" }}>
        <CourseForm onAdd={addCourse} />
      </section>

      <section style={{ marginTop: 20 }}>
        <CourseList courses={courses} onUpdate={updateCourse} onRemove={removeCourse} />
      </section>
    </main>
  );
}
