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
  id: number; // ✅ FE3: id dari API (json-server)
  title: string;
  instructor: string;
  instructorTitle: string;
  instructorAvatar: string;

  price: number;
  discount: number;
  thumbnail: string;
  rating: number;
  reviews: number;
  modules: ModuleItem[];
};
