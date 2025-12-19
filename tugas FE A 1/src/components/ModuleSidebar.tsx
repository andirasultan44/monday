import React from 'react';
import type { ModuleItem } from '@/types';

export default function ModuleSidebar({ modules }: { modules: ModuleItem[] }) {
  return (
    <aside style={{width:360}}>
      <div className="card" style={{padding:0}}>
        <div style={{padding:16,borderBottom:'1px solid var(--border)'}}><strong>Daftar Modul</strong></div>
        <div style={{padding:12}}>
          {modules.map((m) => (
            <div key={m.id} style={{
              border:'1px solid var(--border)', borderRadius:8, padding:12, marginBottom:12,
              background: m.completed ? 'rgba(46,204,113,0.08)' : '#fff', display:'flex', justifyContent:'space-between'
            }}>
              <div>
                <div style={{fontWeight:700}}>{m.title}</div>
                <div style={{fontSize:13,color:'#6b7280'}}>{m.duration ?? (m.questions ? `${m.questions} Pertanyaan` : '')}</div>
              </div>
              <div>{m.completed ? '✓' : '○'}</div>
            </div>
          ))}
        </div>
        <div style={{background:'linear-gradient(90deg,#f7b733,#ff4e50)',color:'#fff',padding:12,textAlign:'center',borderRadius:'0 0 var(--radius-md) var(--radius-md)'}}>Beri Review & Rating</div>
      </div>
    </aside>
  );
}
