// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

// Tipe user yang disimpan di localStorage (punya password)
type StoredUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<{ ok: boolean; message?: string }>;
  register: (payload: {
    name: string;
    email: string;
    password: string;
    avatar?: string;
  }) => Promise<{ ok: boolean; message?: string }>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}

function readUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem("vb_users");
    if (!raw) return [];
    return JSON.parse(raw) as StoredUser[];
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUser[]): void {
  localStorage.setItem("vb_users", JSON.stringify(users));
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const raw = localStorage.getItem("vb_session");
    if (raw) {
      try {
        const s = JSON.parse(raw) as User;
        setUser(s);
      } catch {
        // ignore
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 250));

    const users = readUsers();
    const found = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password
    );

    if (!found) return { ok: false, message: "Email atau password salah" };

    const session: User = {
      id: found.id,
      name: found.name,
      email: found.email,
      avatar: found.avatar,
    };
    localStorage.setItem("vb_session", JSON.stringify(session));
    setUser(session);
    return { ok: true };
  };

  const register = async (payload: {
    name: string;
    email: string;
    password: string;
    avatar?: string;
  }) => {
    await new Promise((r) => setTimeout(r, 300));

    const users = readUsers();
    if (
      users.some(
        (u) => u.email.toLowerCase() === payload.email.toLowerCase()
      )
    ) {
      return { ok: false, message: "Email sudah terdaftar" };
    }

    const id = `u_${Date.now()}`;
    const toSave: StoredUser = {
      id,
      name: payload.name,
      email: payload.email,
      password: payload.password,
      avatar: payload.avatar,
    };

    users.push(toSave);
    writeUsers(users);

    const session: User = {
      id,
      name: payload.name,
      email: payload.email,
      avatar: payload.avatar,
    };
    localStorage.setItem("vb_session", JSON.stringify(session));
    setUser(session);

    return { ok: true };
  };

  const logout = () => {
    localStorage.removeItem("vb_session");
    setUser(null);
  };

  const value: AuthContextType = { user, loading, login, register, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
