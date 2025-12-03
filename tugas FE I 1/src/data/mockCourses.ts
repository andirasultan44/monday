
import type { Course } from "@/types";

import thumbnail          from '../assets/thumb.jpeg';
import instructorAvatar   from '../assets/user.jpg';

export const courses: Course[] = [
  {
    id: "c1",
    title: "Big 4 Auditor Financial Analyst",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 300000,
    discount: 0,
    thumbnail:thumbnail,
    rating: 3.5,
    reviews: 86,
    modules: [
      { id: "m1", title: "Introduction to HR", type: "video", duration: "12 Menit", completed: true },
      { id: "m2", title: "Rangkuman: Introduction to HR", type: "doc", duration: "5 Menit", completed: false },
      { id: "q1", title: "Quiz: Introduction to HR", type: "quiz", questions: 10, completed: false }
    ]
  },

  {
    id: "c2",
    title: "UI/UX Designer & Product Manager",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 250000,
    discount: 50,
    thumbnail: thumbnail,
    rating: 4.2,
    reviews: 112,
    modules: [
      { id: "m1", title: "Introduction to UX", type: "video", duration: "12 Menit", completed: false },
      { id: "m2", title: "Wireframing Basics", type: "doc", duration: "7 Menit", completed: false },
      { id: "q1", title: "Quiz UX Fundamentals", type: "quiz", questions: 8, completed: false }
    ]
  },

  {
    id: "c3",
    title: "Data Analyst Complete Course",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 350000,
    discount: 0,
    thumbnail: thumbnail,
    rating: 4.0,
    reviews: 98,
    modules: [
      { id: "m1", title: "Intro to Data Analytics", type: "video", duration: "10 Menit", completed: false },
      { id: "m2", title: "Excel for Data", type: "doc", duration: "6 Menit", completed: false },
      { id: "q1", title: "Quiz Data Analyst", type: "quiz", questions: 12, completed: false }
    ]
  },

  {
    id: "c4",
    title: "Digital Marketing Specialist",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 200000,
    discount: 20,
    thumbnail: thumbnail,
    rating: 4.4,
    reviews: 120,
    modules: [
      { id: "m1", title: "Intro to Digital Marketing", type: "video", duration: "14 Menit", completed: true },
      { id: "m2", title: "FB Ads Basics", type: "doc", duration: "5 Menit", completed: false },
      { id: "q1", title: "Quiz DM", type: "quiz", questions: 8, completed: false }
    ]
  },

  {
    id: "c5",
    title: "SEO Optimization Masterclass",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 150000,
    discount: 0,
    thumbnail: thumbnail,
    rating: 3.8,
    reviews: 74,
    modules: [
      { id: "m1", title: "Intro to SEO", type: "video", duration: "11 Menit", completed: true },
      { id: "m2", title: "Keyword Research", type: "doc", duration: "6 Menit", completed: false },
      { id: "q1", title: "Quiz SEO", type: "quiz", questions: 7, completed: false }
    ]
  },

  {
    id: "c6",
    title: "Public Speaking for Professionals",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 180000,
    discount: 0,
    thumbnail: thumbnail,
    rating: 4.1,
    reviews: 56,
    modules: [
      { id: "m1", title: "Intro to Public Speaking", type: "video", duration: "9 Menit", completed: false },
      { id: "m2", title: "Body Language Tips", type: "doc", duration: "5 Menit", completed: false },
      { id: "q1", title: "Quiz Public Speaking", type: "quiz", questions: 6, completed: false }
    ]
  },

  {
    id: "c7",
    title: "Business Presentation Mastery",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 220000,
    discount: 10,
    thumbnail: thumbnail,
    rating: 4.3,
    reviews: 87,
    modules: [
      { id: "m1", title: "Creating Slide Decks", type: "video", duration: "12 Menit", completed: true },
      { id: "m2", title: "Storytelling Basics", type: "doc", duration: "7 Menit", completed: false },
      { id: "q1", title: "Quiz Presentation", type: "quiz", questions: 10, completed: false }
    ]
  },

  {
    id: "c8",
    title: "Web Development for Beginners",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 300000,
    discount: 0,
    thumbnail: thumbnail,
    rating: 4.5,
    reviews: 133,
    modules: [
      { id: "m1", title: "HTML Basics", type: "video", duration: "10 Menit", completed: false },
      { id: "m2", title: "CSS Foundations", type: "doc", duration: "8 Menit", completed: false },
      { id: "q1", title: "Quiz Webdev", type: "quiz", questions: 12, completed: false }
    ]
  },

  {
    id: "c9",
    title: "Advanced JavaScript",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 320000,
    discount: 0,
    thumbnail: thumbnail,
    rating: 4.2,
    reviews: 140,
    modules: [
      { id: "m1", title: "JS Concepts", type: "video", duration: "13 Menit", completed: false },
      { id: "m2", title: "Async Programming", type: "doc", duration: "7 Menit", completed: false },
      { id: "q1", title: "Quiz JS", type: "quiz", questions: 9, completed: false }
    ]
  },

  {
    id: "c10",
    title: "Python for Data Science",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 400000,
    discount: 0,
    thumbnail: thumbnail,
    rating: 4.6,
    reviews: 167,
    modules: [
      { id: "m1", title: "Python Basics", type: "video", duration: "12 Menit", completed: true },
      { id: "m2", title: "Numpy & Pandas", type: "doc", duration: "6 Menit", completed: false },
      { id: "q1", title: "Quiz Python", type: "quiz", questions: 10, completed: false }
    ]
  },

  {
    id: "c11",
    title: "Leadership & Management",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 210000,
    discount: 15,
    thumbnail: thumbnail,
    rating: 4.0,
    reviews: 77,
    modules: [
      { id: "m1", title: "Intro to Leadership", type: "video", duration: "11 Menit", completed: false },
      { id: "m2", title: "Managing Teams", type: "doc", duration: "6 Menit", completed: false },
      { id: "q1", title: "Quiz Leadership", type: "quiz", questions: 10, completed: false }
    ]
  },

  {
    id: "c12",
    title: "Project Management Professional",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 350000,
    discount: 25,
    thumbnail: thumbnail,
    rating: 4.3,
    reviews: 122,
    modules: [
      { id: "m1", title: "PMP Basics", type: "video", duration: "14 Menit", completed: false },
      { id: "m2", title: "Risk Management", type: "doc", duration: "7 Menit", completed: false },
      { id: "q1", title: "Quiz PMP", type: "quiz", questions: 9, completed: false }
    ]
  },

  {
    id: "c13",
    title: "Basic Accounting Course",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 150000,
    discount: 0,
    thumbnail: thumbnail,
    rating: 3.7,
    reviews: 64,
    modules: [
      { id: "m1", title: "Intro to Accounting", type: "video", duration: "10 Menit", completed: true },
      { id: "m2", title: "Debit/Kredit", type: "doc", duration: "5 Menit", completed: false },
      { id: "q1", title: "Quiz Accounting", type: "quiz", questions: 8, completed: false }
    ]
  },

  {
    id: "c14",
    title: "Graphic Design Essentials",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 250000,
    discount: 0,
    thumbnail: thumbnail,
    rating: 4.4,
    reviews: 111,
    modules: [
      { id: "m1", title: "Design Concepts", type: "video", duration: "12 Menit", completed: false },
      { id: "m2", title: "Color Theory", type: "doc", duration: "6 Menit", completed: false },
      { id: "q1", title: "Quiz Design", type: "quiz", questions: 10, completed: false }
    ]
  },

  {
    id: "c15",
    title: "Photography Masterclass",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 270000,
    discount: 0,
    thumbnail: thumbnail,
    rating: 4.1,
    reviews: 102,
    modules: [
      { id: "m1", title: "Camera Basics", type: "video", duration: "11 Menit", completed: false },
      { id: "m2", title: "Lighting Techniques", type: "doc", duration: "7 Menit", completed: false },
      { id: "q1", title: "Quiz Photography", type: "quiz", questions: 10, completed: false }
    ]
  },

  {
    id: "c16",
    title: "Content Writing Bootcamp",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 170000,
    discount: 0,
    thumbnail: thumbnail,
    rating: 4.0,
    reviews: 88,
    modules: [
      { id: "m1", title: "Intro to Writing", type: "video", duration: "12 Menit", completed: false },
      { id: "m2", title: "SEO Content", type: "doc", duration: "5 Menit", completed: false },
      { id: "q1", title: "Quiz Writing", type: "quiz", questions: 8, completed: false }
    ]
  },

  {
    id: "c17",
    title: "Entrepreneurship Fundamentals",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 230000,
    discount: 10,
    thumbnail: thumbnail,
    rating: 4.2,
    reviews: 95,
    modules: [
      { id: "m1", title: "Intro to Business", type: "video", duration: "12 Menit", completed: false },
      { id: "m2", title: "Market Validation", type: "doc", duration: "6 Menit", completed: false },
      { id: "q1", title: "Quiz Business", type: "quiz", questions: 10, completed: false }
    ]
  },

  {
    id: "c18",
    title: "Mobile App Development",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 380000,
    discount: 0,
    thumbnail: thumbnail,
    rating: 4.5,
    reviews: 130,
    modules: [
      { id: "m1", title: "Intro to Mobile Dev", type: "video", duration: "14 Menit", completed: false },
      { id: "m2", title: "UI Mobile Basics", type: "doc", duration: "6 Menit", completed: false },
      { id: "q1", title: "Quiz Mobile", type: "quiz", questions: 12, completed: false }
    ]
  },

  {
    id: "c19",
    title: "Financial Planning & Budgeting",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 260000,
    discount: 0,
    thumbnail: thumbnail,
    rating: 4.1,
    reviews: 76,
    modules: [
      { id: "m1", title: "Intro to Budgeting", type: "video", duration: "10 Menit", completed: true },
      { id: "m2", title: "Saving Strategy", type: "doc", duration: "6 Menit", completed: false },
      { id: "q1", title: "Quiz Finance", type: "quiz", questions: 9, completed: false }
    ]
  },

  {
    id: "c20",
    title: "Human Resource Specialist",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 240000,
    discount: 0,
    thumbnail: thumbnail,
    rating: 3.9,
    reviews: 90,
    modules: [
      { id: "m1", title: "HR Basics", type: "video", duration: "12 Menit", completed: false },
      { id: "m2", title: "Conflict Handling", type: "doc", duration: "5 Menit", completed: false },
      { id: "q1", title: "Quiz HR", type: "quiz", questions: 8, completed: false }
    ]
  },

  {
    id: "c21",
    title: "Time Management Mastery",
    instructor: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    instructorAvatar: instructorAvatar,
    price: 190000,
    discount: 0,
    thumbnail: thumbnail,
    rating: 4.3,
    reviews: 83,
    modules: [
      { id: "m1", title: "Intro to Time Management", type: "video", duration: "9 Menit", completed: false },
      { id: "m2", title: "Productivity Hacks", type: "doc", duration: "7 Menit", completed: false },
      { id: "q1", title: "Quiz Time Management", type: "quiz", questions: 7, completed: false }
    ]
  }
];
