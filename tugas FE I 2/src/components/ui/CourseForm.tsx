// src/components/ui/CourseForm.tsx
import React, { JSX, useState } from "react";
import type { Course } from "@/types";

type Props = {
  onAdd: (payload: Partial<Course>) => void;
};

export default function CourseForm({ onAdd }: Props): JSX.Element {
  const [title, setTitle] = useState("");
  const [instructor, setInstructor] = useState("");
  const [price, setPrice] = useState<string>("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({
      title: title.trim(),
      instructor: instructor.trim() || "Unknown",
      price: price ? Number(price) : 0,
    });
    setTitle("");
    setInstructor("");
    setPrice("");
  };

  return (
    <form onSubmit={submit} style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Course title"
        style={{ flex: 1, padding: 8 }}
      />
      <input
        value={instructor}
        onChange={e => setInstructor(e.target.value)}
        placeholder="Instructor"
        style={{ width: 200, padding: 8 }}
      />
      <input
        value={price}
        onChange={e => setPrice(e.target.value)}
        placeholder="Price (numeric)"
        style={{ width: 120, padding: 8 }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>
        Add Course
      </button>
    </form>
  );
}
