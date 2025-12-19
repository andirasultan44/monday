import React, { JSX, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import type { Course } from "@/types";

/**
 * Checkout Page — FE3 FINAL VERSION
 * - Data source: localStorage
 * - Course selected via URL param
 * - No mockCourses
 * - No any
 */

const STORAGE_KEY = "fe1_courses_v1";

/* ================= TYPES ================= */

type PaymentMethod = "bank" | "ewallet" | "card";

type Bank = {
  id: string;
  name: string;
  account: string;
  hint?: string;
};

/* ================= CONSTANTS ================= */

const METHODS: PaymentMethod[] = ["bank", "ewallet", "card"];

const BANKS: Bank[] = [
  { id: "bca", name: "Bank BCA", account: "11739 081234567890", hint: "Bayar melalui Virtual Account BCA" },
  { id: "bni", name: "Bank BNI", account: "99881 081234567891", hint: "Bayar melalui Virtual Account BNI" },
  { id: "bri", name: "Bank BRI", account: "22345 081234567892", hint: "Bayar melalui Virtual Account BRI" },
  { id: "mandiri", name: "Bank Mandiri", account: "33456 081234567893", hint: "Bayar melalui Virtual Account Mandiri" },
];

/* ================= COMPONENT ================= */

export default function Checkout(): JSX.Element {
  const { id } = useParams<{ id: string }>();

  const course = useMemo<Course | null>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;

      const list: Course[] = JSON.parse(raw);
      return list.find((c) => String(c.id) === id) ?? null;
    } catch {
      return null;
    }
  }, [id]);

  const [method, setMethod] = useState<PaymentMethod>("bank");
  const [selectedBank, setSelectedBank] = useState<Bank | null>(BANKS[0]);
  const [copied, setCopied] = useState(false);

  /* ================= GUARD ================= */

  if (!course) {
    return (
      <main style={{ padding: 40 }}>
        <p>Course tidak ditemukan.</p>
      </main>
    );
  }

  /* ================= CALC ================= */

  const subtotal = course.price;
  const adminFee = 7000;
  const total = subtotal + adminFee;

  async function copyAccount(account: string) {
    try {
      await navigator.clipboard.writeText(account);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      alert("Gagal menyalin nomor Virtual Account");
    }
  }

  /* ================= RENDER ================= */

  return (
    <main style={{ padding: 40, display: "grid", gridTemplateColumns: "1fr 360px", gap: 24 }}>
      {/* LEFT COLUMN */}
      <section>
        <div className="card" style={{ padding: 20 }}>
          <h3>Metode Pembayaran</h3>

          {/* METHOD SELECTOR */}
          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            {METHODS.map((m) => (
              <button
                key={m}
                onClick={() => setMethod(m)}
                className="btn"
                style={{
                  border: method === m ? "2px solid var(--color-primary)" : "1px solid var(--border)",
                  background: method === m ? "rgba(45,201,121,.08)" : "transparent",
                  padding: "8px 12px",
                  borderRadius: 10,
                }}
              >
                {m === "bank"
                  ? "Transfer Bank"
                  : m === "ewallet"
                  ? "E-Wallet"
                  : "Kartu Kredit / Debit"}
              </button>
            ))}
          </div>

          {/* BANK METHOD */}
          {method === "bank" && (
            <>
              <div style={{ display: "grid", gap: 8, marginTop: 16 }}>
                {BANKS.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBank(b)}
                    style={{
                      padding: 12,
                      borderRadius: 8,
                      border: selectedBank?.id === b.id ? "2px solid var(--color-primary)" : "1px solid var(--border)",
                      background: "#fff",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <strong>{b.name}</strong>
                  </button>
                ))}
              </div>

              {selectedBank && (
                <div style={{ marginTop: 16, border: "1px solid var(--border)", padding: 16, borderRadius: 10 }}>
                  <div style={{ fontWeight: 700 }}>{selectedBank.name}</div>
                  <div style={{ marginTop: 6 }}>{selectedBank.account}</div>

                  <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                    <button className="btn" onClick={() => copyAccount(selectedBank.account)}>
                      {copied ? "Tersalin" : "Salin"}
                    </button>
                    <button className="btn btn-primary">Bayar Sekarang</button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* RIGHT COLUMN */}
      <aside>
        <div className="card" style={{ padding: 16 }}>
          <img src={course.thumbnail} alt={course.title} style={{ width: "100%", borderRadius: 8 }} />

          <div style={{ marginTop: 12 }}>
            <strong>{course.title}</strong>
            <div style={{ color: "#6b7280", fontSize: 13 }}>{course.instructor}</div>
          </div>

          <div style={{ marginTop: 12, borderTop: "1px dashed var(--border)", paddingTop: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Subtotal</span>
              <span>Rp {formatCurrency(subtotal)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
              <span>Biaya Admin</span>
              <span>Rp {formatCurrency(adminFee)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, fontWeight: 800 }}>
              <span>Total</span>
              <span style={{ color: "var(--color-primary)" }}>Rp {formatCurrency(total)}</span>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}

/* ================= HELPERS ================= */

function formatCurrency(num: number) {
  return new Intl.NumberFormat("id-ID").format(num);
}
