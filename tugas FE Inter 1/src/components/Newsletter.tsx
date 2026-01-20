import React, { JSX, useState } from 'react';
import banner from '../assets/banner.jpg';

export default function Newsletter(): JSX.Element {
  const [email, setEmail] = useState('');
  const [ok, setOk] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // mock subscribe
    setOk(true);
    setTimeout(() => {
      setEmail('');
      setOk(false);
    }, 1800);
  };

  return (
    <section style={newsletterWrap}>
      <div className="container" style={{ padding: '48px 0', textAlign: 'center', margin: '20px' }}>
        <h3 style={{ color: '#fff', fontSize: 22, marginBottom: 8 }}>NEWSLETTER</h3>
        <h2 style={{ color: '#fff', fontSize: 28, margin: '6px 0 12px', fontWeight: 800 }}>
          Mau Belajar Lebih Banyak?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: 720, margin: '0 auto 18px' }}>
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan <br /> penawaran spesial dari program-program terbaik.
        </p>

        <form onSubmit={submit} style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 8 }}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan Emailmu"
            style={{
             
              padding: '12px 16px',
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.12)',
              width: 420,
              outline: 'none',
              background: 'rgba(255,255,255,0.06)',
              color: '#fff',
            }}
          />
          <button className="btn" type="submit" style={{ background: 'var(--color-warning)', color: '#111', borderRadius: 8 }}>
            {ok ? 'Subscribed' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
}

const newsletterWrap: React.CSSProperties = {
  marginTop: 28,
  backgroundImage: `linear-gradient(rgba(7,7,7,0.85), rgba(7,7,7,0.85)), url(${banner})`,
   margin: '60px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: 12,
};
