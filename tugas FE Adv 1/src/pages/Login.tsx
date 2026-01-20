import React, { JSX, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login(): JSX.Element {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // simple demo validation
    if (!email.trim() || !password) {
      setError("Masukkan email dan kata sandi.");
      return;
    }

    // fake auth: navigate to home
    // replace this with real API/auth logic
    navigate("/");
  }

  return (
    <div className="auth-page">
      <div className="auth-card" role="region" aria-label="login form">
        <h1 className="auth-title">Masuk ke Akun</h1>
        <p className="auth-sub">Yuk, lanjutkan belajarmu di videobelajar.</p>

        {error && <div className="auth-error">{error}</div>}

        <form className="auth-form" onSubmit={onSubmit} noValidate>
          <label className="field">
            <span className="field-label">
              E-Mail <span className="req">*</span>
            </span>
            <input
              className="field-input"
              type="email"
              value={email}
              onChange={(s) => setEmail(s.target.value)}
              placeholder="contoh@domain.com"
              required
            />
          </label>

          <label className="field">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <span className="field-label">
                Kata Sandi <span className="req">*</span>
              </span>
              <div className="right-help">
                <a href="/forgot">Lupa Password?</a>
              </div>
            </div>

            <div className="input-with-icon">
              <input
                className="field-input"
                type={show ? "text" : "password"}
                value={password}
                onChange={(s) => setPassword(s.target.value)}
                placeholder="********"
                required
              />
              <button
                type="button"
                aria-label={
                  show ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"
                }
                className="icon-btn"
                onClick={() => setShow((v) => !v)}>
                {show ? (
                  /* icon hide */
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-6 0-10-6-10-6a21.68 21.68 0 0 1 5.44-5.44" />
                    <path d="M1 1l22 22" />
                    <path d="M9.88 9.88a3 3 0 0 0 4.24 4.24" />
                  </svg>
                ) : (
                  /* icon show */
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path d="M1 12s4-6 11-6 11 6 11 6-4 6-11 6S1 12 1 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </label>

          <button type="submit" className="btn primary wide">
            Masuk
          </button>

          <Link
            to="/register"
            className="btn ghost wide"
            style={{
              display: "inline-flex",
              textAlign: "center",
              justifyContent: "center",
            }}>
            Daftar
          </Link>

          <div className="divider">
            <center><span>atau</span></center>
          </div>

          <button
            type="button"
            className="btn google wide"
            onClick={() => alert("Google SSO (demo)")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
            </svg>
            Daftar dengan Google
          </button>
        </form>
      </div>
    </div>
  );
}
