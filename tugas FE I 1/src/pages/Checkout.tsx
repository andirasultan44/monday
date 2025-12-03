// src/pages/Checkout.tsx
import React, { JSX, useMemo, useState } from 'react';
import { courses } from '@/data/mockCourses';
import type { Course } from '@/types';

/**
 * Simple checkout page (TSX)
 * - Uses first course from mockCourses as the item in cart
 * - Left: payment methods, VA box, accordion instructions
 * - Right: order summary card
 *
 * Save this file as src/pages/Checkout.tsx
 */

type Bank = {
  id: string;
  name: string;
  account: string;
  hint?: string;
};

const BANKS: Bank[] = [
  { id: 'bca', name: 'Bank BCA', account: '11739 081234567890', hint: 'Bayar melalui Virtual Account BCA' },
  { id: 'bni', name: 'Bank BNI', account: '99881 081234567891', hint: 'Bayar melalui Virtual Account BNI' },
  { id: 'bri', name: 'Bank BRI', account: '22345 081234567892', hint: 'Bayar melalui Virtual Account BRI' },
  { id: 'mandiri', name: 'Bank Mandiri', account: '33456 081234567893', hint: 'Bayar melalui Virtual Account Mandiri' },
];

export default function Checkout(): JSX.Element {
  // For demo: take first course as cart
  const course: Course = useMemo(() => courses[0], []);
  const [method, setMethod] = useState<'bank' | 'ewallet' | 'card'>('bank');
  const [selectedBank, setSelectedBank] = useState<Bank | null>(BANKS[0]);
  const [copied, setCopied] = useState(false);

  const subtotal = course.price;
  const adminFee = 7000;
  const total = subtotal + adminFee;

  async function copyAccount(account: string) {
    try {
      await navigator.clipboard.writeText(account);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore
      alert('Salin gagal — izinkan clipboard di browser');
    }
  }

  return (
    <main style={{ padding: 40, display: 'grid', gridTemplateColumns: '1fr 360px', gap: 24 }}>
      {/* LEFT COLUMN */}
      <section>
        <div className="card" style={{ padding: 20 }}>
          <h3 style={{ margin: 0 }}>Metode Pembayaran</h3>
          <p style={{ color: '#6b7280', marginTop: 8 }}>Pilih metode pembayaran yang ingin kamu gunakan.</p>

          {/* method selectors */}
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <button
              onClick={() => setMethod('bank')}
              className="btn"
              style={{
                border: method === 'bank' ? '2px solid var(--color-primary)' : '1px solid var(--border)',
                background: method === 'bank' ? 'rgba(45, 201, 121, 0.08)' : 'transparent',
                color: method === 'bank' ? 'var(--color-primary)' : 'inherit',
                padding: '8px 12px',
                borderRadius: 10,
              }}
            >
              Transfer Bank
            </button>

            <button
              onClick={() => setMethod('ewallet')}
              className="btn"
              style={{
                border: method === 'ewallet' ? '2px solid var(--color-primary)' : '1px solid var(--border)',
                background: method === 'ewallet' ? 'rgba(45, 201, 121, 0.08)' : 'transparent',
                padding: '8px 12px',
                borderRadius: 10,
              }}
            >
              E-Wallet
            </button>

            <button
              onClick={() => setMethod('card')}
              className="btn"
              style={{
                border: method === 'card' ? '2px solid var(--color-primary)' : '1px solid var(--border)',
                background: method === 'card' ? 'rgba(45, 201, 121, 0.08)' : 'transparent',
                padding: '8px 12px',
                borderRadius: 10,
              }}
            >
              Kartu Kredit/Debit
            </button>
          </div>

          {/* payment details */}
          <div style={{ marginTop: 18 }}>
            {method === 'bank' && (
              <>
                <div style={{ display: 'grid', gap: 8 }}>
                  {BANKS.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBank(b)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 12,
                        borderRadius: 8,
                        border: selectedBank?.id === b.id ? '2px solid var(--color-primary)' : '1px solid var(--border)',
                        background: selectedBank?.id === b.id ? 'rgba(45, 201, 121, 0.04)' : '#fff',
                        color: selectedBank?.id === b.id ? 'var(--color-primary)' : 'var(--bg-base)',
                        cursor: 'pointer',
                      }}
                    >
                      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                        <div style={{ width: 44, height: 28, borderRadius: 6, background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>
                          {b.name.split(' ')[1] || 'BANK'}
                        </div>
                        <div style={{ textAlign: 'left' }}>
                          <div style={{ fontWeight: 700 }}>{b.name}</div>
                          <div style={{ fontSize: 13, color: '#6b7280' }}>{'Virtual Account'}</div>
                        </div>
                      </div>

                      <div style={{ fontWeight: 700, color: selectedBank?.id === b.id ? 'var(--color-primary)' : 'var(--gray-700)' }}>Pilih</div>
                    </button>
                  ))}
                </div>

                {/* VA box */}
                {selectedBank && (
                  <div style={{ marginTop: 16 }}>
                    <div style={{ borderRadius: 12, border: '1px solid var(--border)', padding: 18, background: '#fff' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontWeight: 800 }}>{selectedBank.name}</div>
                          <div style={{ fontSize: 13, color: '#6b7280', marginTop: 4 }}>{selectedBank.hint}</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: 12, color: '#6b7280' }}>Nomor Virtual Account</div>
                          <div style={{ fontWeight: 800, marginTop: 6 }}>{selectedBank.account}</div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: 8, marginTop: 12, justifyContent: 'flex-end' }}>
                        <button
                          onClick={() => copyAccount(selectedBank.account)}
                          className="btn"
                          style={{ padding: '8px 12px', borderRadius: 10 }}
                        >
                          {copied ? 'Tersalin' : 'Salin'}
                        </button>
                        <button
                          onClick={() => alert('Instruksi pembayaran akan dikirim/muncul')}
                          className="btn btn-primary"
                          style={{ padding: '8px 12px', borderRadius: 10 }}
                        >
                          Bayar Sekarang
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {method === 'ewallet' && (
              <div style={{ marginTop: 12 }}>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button style={walletBtnStyle}>Dana</button>
                  <button style={walletBtnStyle}>OVO</button>
                  <button style={walletBtnStyle}>ShopeePay</button>
                </div>
                <div style={{ marginTop: 12, color: '#6b7280' }}>
                  Pilih e-wallet, lalu lanjutkan ke aplikasi e-wallet untuk menyelesaikan pembayaran.
                </div>
              </div>
            )}

            {method === 'card' && (
              <div style={{ marginTop: 12 }}>
                <div style={{ borderRadius: 8, padding: 12, border: '1px solid var(--border)' }}>
                  <div style={{ marginBottom: 8, fontWeight: 700 }}>Pembayaran Kartu</div>
                  <div style={{ display: 'grid', gap: 8 }}>
                    <input placeholder="Nama pada kartu" style={inputStyle} />
                    <input placeholder="Nomor kartu" style={inputStyle} />
                    <div style={{ display: 'flex', gap: 8 }}>
                      <input placeholder="MM/YY" style={{ ...inputStyle, flex: '0 0 120px' }} />
                      <input placeholder="CVV" style={{ ...inputStyle, flex: '0 0 120px' }} />
                    </div>
                    <button className="btn btn-primary" style={{ marginTop: 6 }}>
                      Bayar Rp {formatCurrency(total)}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tata Cara Pembayaran */}
        <div className="card" style={{ padding: 20, marginTop: 20 }}>
          <h4 style={{ margin: 0 }}>Tata Cara Pembayaran</h4>
          <div style={{ marginTop: 12, display: 'grid', gap: 10 }}>
            <details style={{ padding: 12, borderRadius: 8, background: 'var(--surface-1)', border: '1px solid var(--border)' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 700 }}>Transfer Bank (ATM / Mobile / Internet Banking)</summary>
              <ol style={{ marginTop: 8, color: '#6b7280' }}>
                <li>Masukkan kartu ATM dan PIN.</li>
                <li>Pilih menu Transfer → Ke BCA Virtual Account (contoh).</li>
                <li>Masukkan nomor Virtual Account yang diberikan.</li>
                <li>Konfirmasi nominal & selesaikan.</li>
              </ol>
            </details>

            <details style={{ padding: 12, borderRadius: 8, background: 'var(--surface-1)', border: '1px solid var(--border)' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 700 }}>E-Wallet</summary>
              <ol style={{ marginTop: 8, color: '#6b7280' }}>
                <li>Pilih e-wallet yang tersedia.</li>
                <li>Buka aplikasi e-wallet dan scan QR atau lanjutkan konfirmasi.</li>
              </ol>
            </details>

            <details style={{ padding: 12, borderRadius: 8, background: 'var(--surface-1)', border: '1px solid var(--border)' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 700 }}>Kartu Kredit / Debit</summary>
              <ol style={{ marginTop: 8, color: '#6b7280' }}>
                <li>Isi detail kartu dengan benar.</li>
                <li>Konfirmasi dan lakukan otorisasi 3DS jika diperlukan.</li>
              </ol>
            </details>
          </div>
        </div>
      </section>

      {/* RIGHT COLUMN - ORDER SUMMARY */}
      <aside>
        <div className="card" style={{ padding: 16 }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <img src={course.thumbnail} alt={course.title} style={{ width: 110, height: 70, objectFit: 'cover', borderRadius: 8 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800 }}>{course.title}</div>
              <div style={{ color: '#6b7280', fontSize: 13, marginTop: 6 }}>{course.instructor}</div>
            </div>
          </div>

          <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px dashed var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ color: '#6b7280' }}>Subtotal</div>
              <div style={{ fontWeight: 700 }}>Rp {formatCurrency(subtotal)}</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
              <div style={{ color: '#6b7280' }}>Biaya Admin</div>
              <div style={{ fontWeight: 700 }}>Rp {formatCurrency(adminFee)}</div>
            </div>

            <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 18 }}>
              <div style={{ fontWeight: 900 }}>Total Pembayaran</div>
              <div style={{ color: 'var(--color-primary)', fontWeight: 900 }}>Rp {formatCurrency(total)}</div>
            </div>

            <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
              <button
                className="btn btn-ghost"
                style={{ flex: 1, padding: '10px 12px', borderRadius: 8 }}
                onClick={() => alert('Ubah metode pembayaran')}
              >
                Ganti Metode Pembayaran
              </button>

              <button
                className="btn btn-primary"
                style={{ flex: 1, padding: '10px 12px', borderRadius: 8 }}
                onClick={() => alert('Memproses pembayaran — demo')}
              >
                Bayar Sekarang
              </button>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}

/* Helpers & styles */
function formatCurrency(num: number) {
  return new Intl.NumberFormat('id-ID').format(num);
}

const walletBtnStyle: React.CSSProperties = {
  padding: '10px 12px',
  borderRadius: 8,
  border: '1px solid var(--border)',
  background: '#fff',
  cursor: 'pointer',
};

const inputStyle: React.CSSProperties = {
  padding: '10px 12px',
  borderRadius: 8,
  border: '1px solid var(--border)',
  outline: 'none',
};
