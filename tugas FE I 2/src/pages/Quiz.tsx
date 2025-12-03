// src/pages/Quiz.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const navigate = useNavigate();

  // contoh data (dummy)
  const questions = [
    {
      id: 1,
      text: "Memikirkan dan mengantisipasi adanya user secara tidak sengaja mengutak-atik konfigurasi...",
      choices: [
        "Memikirkan tentang default",
        "Mempertimbangkan page layout",
        "Memastikan sistem berjalan konsisten",
        "Menciptakan konsistensi UI"
      ]
    },
    {
      id: 2,
      text: "Apa fungsi utama rangkuman di akhir modul?",
      choices: [
        "Menambah durasi video",
        "Merangkum poin penting",
        "Menghapus progres",
        "Mempercepat loading"
      ]
    }
  ];

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | null>>({
    1: null,
    2: null
  });

  function selectOption(qId: number, cIndex: number) {
    setAnswers((prev) => ({ ...prev, [qId]: cIndex }));
  }

  function nextQuestion() {
    if (index < questions.length - 1) setIndex(index + 1);
  }

  function prevQuestion() {
    if (index > 0) setIndex(index - 1);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "220px 1fr 300px",
        gap: "24px",
        padding: "24px"
      }}
    >
      {/* ---------------- LEFT LIST ---------------- */}
      <aside>
        <div style={{ fontWeight: 700, marginBottom: 12 }}>List Soal</div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "10px"
          }}
        >
          {questions.map((q, i) => (
            <button
              key={q.id}
              onClick={() => setIndex(i)}
              style={{
                padding: "12px 0",
                borderRadius: 8,
                border: "1px solid #ddd",
                background: i === index ? "#22c55e" : "#fff",
                color: i === index ? "#fff" : "#111",
                cursor: "pointer"
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <div
          style={{
            marginTop: 12,
            padding: 12,
            borderRadius: 8,
            border: "1px solid #eee",
            background: "#f9fafb",
            fontSize: 14
          }}
        >
          Selesaikan semua soal untuk mengakhiri quiz
        </div>
      </aside>

      {/* ---------------- CENTER QUESTION ---------------- */}
      <main>
        <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 12 }}>
          Pertanyaan {index + 1}
        </div>

        <p style={{ fontSize: 16, marginBottom: 16 }}>
          {questions[index].text}
        </p>

        <div style={{ display: "grid", gap: "12px" }}>
          {questions[index].choices.map((c, ci) => {
            const active = answers[questions[index].id] === ci;
            return (
              <div
                key={ci}
                onClick={() =>
                  selectOption(questions[index].id, ci)
                }
                style={{
                  padding: "14px",
                  borderRadius: 10,
                  border: active
                    ? "2px solid #22c55e"
                    : "1px solid #ddd",
                  background: active ? "#f0fdf4" : "#fff",
                  cursor: "pointer"
                }}
              >
                {c}
              </div>
            );
          })}
        </div>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 20
          }}
        >
          <button
            onClick={prevQuestion}
            disabled={index === 0}
            style={{
              padding: "10px 16px",
              borderRadius: 8,
              background: "#eee",
              cursor: index === 0 ? "default" : "pointer"
            }}
          >
            Sebelumnya
          </button>

          {index < questions.length - 1 ? (
            <button
              onClick={nextQuestion}
              style={{
                padding: "10px 16px",
                borderRadius: 8,
                background: "#22c55e",
                color: "#fff",
                cursor: "pointer"
              }}
            >
              Selanjutnya →
            </button>
          ) : (
            <button
              onClick={() => navigate("/")}
              style={{
                padding: "10px 16px",
                borderRadius: 8,
                background: "#22c55e",
                color: "#fff",
                cursor: "pointer"
              }}
            >
              Selesai
            </button>
          )}
        </div>
      </main>

      {/* ---------------- RIGHT MODULE LIST ---------------- */}
      <aside>
        <div style={{ fontWeight: 700, marginBottom: 12 }}>
          Daftar Modul
        </div>

        <div
          style={{
            padding: 12,
            border: "1px solid #eee",
            borderRadius: 10,
            display: "grid",
            gap: 10
          }}
        >
          <div>
            <div style={{ fontWeight: 600 }}>Video: Intro HR</div>
            <div style={{ fontSize: 12, color: "#777" }}>12 Menit</div>
          </div>

          <div>
            <div style={{ fontWeight: 600 }}>Ringkuman</div>
            <div style={{ fontSize: 12, color: "#777" }}>12 Menit</div>
          </div>

          <div
            style={{
              border: "1px solid #22c55e",
              padding: 10,
              borderRadius: 8,
              background: "#f0fdf4"
            }}
          >
            <div style={{ fontWeight: 600 }}>Quiz: Intro HR</div>
            <div style={{ fontSize: 12, color: "#777" }}>10 Soal</div>
          </div>
        </div>
      </aside>
    </div>
  );
}
