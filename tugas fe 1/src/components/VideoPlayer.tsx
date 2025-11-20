import React from 'react';

export default function VideoPlayer({ src, poster }: { src?: string; poster?: string }) {
  return (
    <div style={{background:'#111', height:420, display:'flex', alignItems:'center', justifyContent:'center'}}>
      <video controls src={src} poster={poster} style={{width:'100%', height:'100%', objectFit:'cover'}} />
    </div>
  );
}
