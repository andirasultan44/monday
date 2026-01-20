import React, { JSX } from 'react';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/data/mockCourses';

export default function Catalog(): JSX.Element {
  return (
    <main className="container" style={{padding:'40px 0'}}>
      <h1 style={{color:'#fff'}}>Koleksi Video Pembelajaran Unggulan</h1>

      <div style={{marginTop:20, display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20}}>
        {courses.map(c => <CourseCard key={c.id} course={c} />)}
      </div>
      
      
    </main>
    
  );
}
