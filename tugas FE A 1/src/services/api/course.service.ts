import api from "./api";
import type { Course } from "@/types";

export const getCourses = async (): Promise<Course[]> => {
  const res = await api.get<Course[]>("/courses");
  return res.data;
};

export const createCourse = async (
  payload: Partial<Course>
): Promise<Course> => {
  const res = await api.post<Course>("/courses", payload);
  return res.data;
};

export const updateCourse = async (
  id: string,
  payload: Partial<Course>
): Promise<Course> => {
  const res = await api.patch<Course>(`/courses/${id}`, payload);
  return res.data;
};

export const deleteCourse = async (id: string): Promise<void> => {
  await api.delete(`/courses/${id}`);
};
