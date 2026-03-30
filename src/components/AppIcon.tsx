'use client';

import React from 'react';
import type { AppConfig } from '@/types/apps'; // Importando o tipo

// Tipos para os props do componente TaskbarIcon
interface TaskbarIconProps {
    app: AppConfig;
    onClick: (id: string) => void;
}

// --- COMPONENTE DO ÍCONE DA BARRA DE TAREFAS ---
export default function TaskbarIcon({ app, onClick }: TaskbarIconProps) {
  return (
    <button
      className="flex flex-col items-center justify-center text-center p-2 rounded-md hover:bg-black hover:bg-opacity-20 transition-all duration-200"
      onClick={() => onClick(app.id)}
      title={`Abrir ${app.name}`}
    >
      {/* Ícone (SVG como exemplo, substitua por sua <img>) */}
      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center p-2 shadow-md">
         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-folder text-gray-800" viewBox="0 0 16 16">
            <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996.886l-.637 7A1 1 0 0 0 1.826 13h11.348a1 1 0 0 0 .996-.886l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
         </svg>
      </div>
      <p className="text-white text-xs mt-1">{app.name}</p>
    </button>
  );
};
