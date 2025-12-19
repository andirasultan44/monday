// src/App.tsx
import React, { JSX } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Home from "@/pages/Home";
import Catalog from "@/pages/Catalog";
import CourseDetail from "@/pages/CourseDetail";
import Quiz from "@/pages/Quiz";
import Checkout from "@/pages/Checkout";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

export default function App(): JSX.Element {
  return (
    <div className="app-root">
      <Header />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
