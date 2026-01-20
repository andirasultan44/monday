// src/components/ui/CourseList.tsx
import React, { JSX, useState } from "react";
import CourseCard from "@/components/CourseCard"; // sesuai struktur kamu
import type { Course } from "@/types";

type Props = {
  courses: Course[];
  onUpdate: (id: string, data: Partial<Course>) => void;
  onRemove: (id: string) => void;
};

export default function CourseList({ courses, onUpdate, onRemove }: Props): JSX.Element {
  if (!courses || courses.length === 0) return <p style={{ color: "#fff" }}>Tidak ada course.</p>;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
        {courses.map(c => (
          <CourseRow key={c.id} course={c} onUpdate={onUpdate} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
}

function CourseRow({ course, onUpdate, onRemove }: { course: Course; onUpdate: (id: string, data: Partial<Course>) => void; onRemove: (id: string) => void; }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(course.title);
  const [price, setPrice] = useState<string>(String(course.price ?? 0));

  const save = () => {
    if (!title.trim()) return;
    onUpdate(course.id, { title: title.trim(), price: price ? Number(price) : 0 });
    setEditing(false);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* show card (preserve original Link behavior) */}
      <CourseCard course={course} />

      {/* overlay actions */}
      <div style={{ marginTop: 8, display: "flex", gap: 8, alignItems: "center" }}>
        {editing ? (
          <>
            <input value={title} onChange={e => setTitle(e.target.value)} style={{ flex: 1, padding: 6 }} />
            <input value={price} onChange={e => setPrice(e.target.value)} style={{ width: 100, padding: 6 }} />
            <button onClick={save}>Save</button>
            <button onClick={() => { setEditing(false); setTitle(course.title); setPrice(String(course.price ?? 0)); }}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={() => { if (confirm("Hapus course ini?")) onRemove(course.id); }}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}
