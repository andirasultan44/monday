// src/components/ui/CourseList.tsx
import React, { JSX, useState } from "react";
import CourseCard from "@/components/CourseCard";
import type { Course } from "@/types";

type Props = {
  courses: Course[];
  onUpdate: (id: number, data: Partial<Course>) => void;
  onRemove: (id: number) => void;
};

export default function CourseList({
  courses,
  onUpdate,
  onRemove,
}: Props): JSX.Element {
  if (!courses || courses.length === 0) {
    return <p style={{ color: "#fff" }}>Tidak ada course.</p>;
  }

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}
      >
        {courses.map(course => (
          <CourseRow
            key={course.id}
            course={course}
            onUpdate={onUpdate}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}

type CourseRowProps = {
  course: Course;
  onUpdate: (id: number, data: Partial<Course>) => void;
  onRemove: (id: number) => void;
};

function CourseRow({
  course,
  onUpdate,
  onRemove,
}: CourseRowProps): JSX.Element {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(course.title);
  const [price, setPrice] = useState<string>(
    String(course.price ?? 0)
  );

  const save = () => {
    if (!title.trim()) return;

    onUpdate(course.id, {
      title: title.trim(),
      price: price ? Number(price) : 0,
    });

    setEditing(false);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Card */}
      <CourseCard course={course} />

      {/* Actions */}
      <div
        style={{
          marginTop: 8,
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}
      >
        {editing ? (
          <>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              style={{ flex: 1, padding: 6 }}
            />
            <input
              value={price}
              onChange={e => setPrice(e.target.value)}
              style={{ width: 100, padding: 6 }}
            />
            <button onClick={save}>Save</button>
            <button
              onClick={() => {
                setEditing(false);
                setTitle(course.title);
                setPrice(String(course.price ?? 0));
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setEditing(true)}>Edit</button>
            <button
              onClick={() => {
                if (confirm("Hapus course ini?")) {
                  onRemove(course.id);
                }
              }}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
