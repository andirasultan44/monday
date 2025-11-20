import React, { JSX, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type RegisterProps = {
  /** optional handler if you want to integrate with AuthContext */
  onSubmit?: (payload: {
    name: string;
    email: string;
    phone?: string;
    password: string;
  }) =>
    | Promise<{ ok: boolean; message?: string }>
    | { ok: boolean; message?: string };
};

export default function Register({ onSubmit }: RegisterProps): JSX.Element {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !email.trim() || !password) {
      setError("Lengkapi semua field wajib.");
      return;
    }
    if (password !== confirm) {
      setError("Konfirmasi kata sandi tidak cocok.");
      return;
    }
    setBusy(true);

    try {
      if (onSubmit) {
        const res = await onSubmit({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          password,
        });
        if (!res.ok) {
          setError(res.message || "Gagal registrasi");
          setBusy(false);
          return;
        }
      } else {
        // fallback demo behavior (local only)
        const demo = { ok: true };
        if (!demo.ok) {
          setError("Gagal registrasi (demo)");
          setBusy(false);
          return;
        }
      }

      // success -> go to dashboard or home
      setBusy(false);
      navigate("/"); // alur sesudah register bisa diubah sesuai kebutuhan
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Terjadi kesalahan");
      }
      setBusy(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card register-card">
        <h1 className="auth-title">Pendaftaran Akun</h1>
        <p className="auth-sub">Yuk, daftarkan akunmu sekarang juga!</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {error && <div className="auth-error">{error}</div>}

          <label className="field">
            <span className="field-label">
              Nama Lengkap <span className="req">*</span>
            </span>
            <input
              className="field-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama lengkap"
              required
            />
          </label>

          <label className="field">
            <span className="field-label">
              E-Mail <span className="req">*</span>
            </span>
            <input
              className="field-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@contoh.com"
              required
            />
          </label>

          <label className="field">
            <span className="field-label">No. Hp</span>
            <div className="phone-row">
              <div className="country-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flag"
                  viewBox="0 0 3 2">
                  <rect width="3" height="1" fill="#ce1126" />
                  <rect y="1" width="3" height="1" fill="#ffffff" />
                </svg>
                <span className="country-code">+62</span>
                <span className="chev">▾</span>
              </div>

              <input
                className="field-input phone-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="81234567890"
              />
            </div>
          </label>

          <label className="field">
            <span className="field-label">
              Kata Sandi <span className="req">*</span>
            </span>
            <div className="input-with-icon">
              <input
                className="field-input"
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Kata sandi"
                required
              />

              <button
                type="button"
                className="icon-btn"
                onClick={() => setShowPass((s) => !s)}
                aria-label="toggle">
                {showPass ? (
                  // icon "hide"
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-6 0-10-6-10-6a21.68 21.68 0 0 1 5.44-5.44" />
                    <path d="M1 1l22 22" />
                    <path d="M9.88 9.88a3 3 0 0 0 4.24 4.24" />
                  </svg>
                ) : (
                  // icon "show"
                  <svg
                    width="22"
                    height="22"
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

          <label className="field">
            <span className="field-label">
              Konfirmasi Kata Sandi <span className="req">*</span>
            </span>
            <div className="input-with-icon">
              <input
                className="field-input"
                type={showConfirm ? "text" : "password"}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Konfirmasi kata sandi"
                required
              />
              <button
                type="button"
                className="icon-btn"
                onClick={() => setShowConfirm((s) => !s)}
                aria-label="toggle">
                {showConfirm ? (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-6 0-10-6-10-6a21.68 21.68 0 0 1 5.44-5.44" />
                    <path d="M1 1l22 22" />
                    <path d="M9.88 9.88a3 3 0 0 0 4.24 4.24" />
                  </svg>
                ) : (
                  <svg
                    width="22"
                    height="22"
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

          <div className="right-help">
            <Link to="/forgot">Lupa Password?</Link>
          </div>

          <button className="btn primary wide" type="submit" disabled={busy}>
            {busy ? "Memproses..." : "Daftar"}
          </button>

          <Link to="/login" className="btn ghost wide">
            Masuk
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
