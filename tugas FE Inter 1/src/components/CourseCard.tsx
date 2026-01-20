import React from "react";
import { Link } from "react-router-dom";
import type { Course } from "@/types";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <Link to={`/courses/${course.id}`} className="vb-card-link">
      <article className="vb-card">
        {/* Thumbnail */}
        <div className="vb-thumb-wrap">
          <img src={course.thumbnail} alt={course.title} className="vb-thumb" />
        </div>

        {/* Body */}
        <div className="vb-body">
          <h3 className="vb-title">{course.title}</h3>

          <p className="vb-excerpt">
            Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan latihan interaktif…
          </p>

          {/* Instructor */}
          <div className="vb-instructor">
            <img
              src={course.instructorAvatar}
              alt={course.instructor}
              className="vb-instructor-avatar"
            />
            <div>
              <div className="vb-instructor-name">{course.instructor}</div>
              <div className="vb-instructor-job">{course.instructorTitle}</div>
            </div>
          </div>

          {/* Rating + Price */}
          <div className="vb-bottom">
            <div className="vb-rating">
              <span className="vb-stars">★★★☆☆</span>
              <span className="vb-rating-number">
                {course.rating} ({course.reviews})
              </span>
            </div>

            <div className="vb-price">
              Rp {(course.price / 1000).toFixed(0)}K
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
