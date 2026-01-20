// src/types/index.ts

export type ModuleItem = {
  id: string;
  title: string;
  type: "video" | "quiz" | "doc" | "assignment";
  duration?: string;
  questions?: number;
  completed?: boolean;
};

export type Course = {
  id: string;
  title: string;
  instructor: string;
  instructorTitle: string; // bikin wajib biar konsisten
  instructorAvatar: string;

  price: number;
  discount: number;
  thumbnail: string;
  rating: number;
  reviews: number;
  modules: ModuleItem[];
};
