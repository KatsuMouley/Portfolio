'use client';

import React, { useState, useRef } from 'react';
import type { OpenApp } from '@/types/apps'; // Importando o tipo

// Tipos para os props do componente Window
interface WindowProps {
  app: OpenApp;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
}

// --- COMPONENTE DA JANELA FLUTUANTE ---
export default function Window({ app, onClose, onFocus }: WindowProps) {
  const [position, setPosition] = useState({ x: app.initialPosition.x, y: app.initialPosition.y });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Assegura que o target é um elemento HTML para ter classList
    const target = e.target as HTMLElement;
    if (!target.classList.contains('title-bar')) return;
    
    onFocus(app.id);
    setIsDragging(true);
    dragStartPos.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({
      x: e.clientX - dragStartPos.current.x,
      y: e.clientY - dragStartPos.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };
  
  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClose(app.id);
  };

  return (
    <div
      ref={windowRef}
      className="absolute flex flex-col w-96 h-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-300 dark:border-gray-700"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: app.zIndex,
        cursor: isDragging ? 'grabbing' : 'default',
      }}
      onClick={() => onFocus(app.id)}
    >
      {/* Barra de Título */}
      <div
        className="title-bar h-8 bg-gray-200 dark:bg-gray-700 rounded-t-lg flex items-center justify-between px-2 cursor-grab"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder" viewBox="0 0 16 16">
              <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996.886l-.637 7A1 1 0 0 0 1.826 13h11.348a1 1 0 0 0 .996-.886l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
            </svg>
            <span className="font-bold text-sm text-gray-800 dark:text-gray-200">{app.name}</span>
        </div>
        <button
          onClick={handleCloseClick}
          className="w-5 h-5 bg-red-500 rounded-full hover:bg-red-600 focus:outline-none flex items-center justify-center text-white font-bold text-xs z-10"
        >
          &times;
        </button>
      </div>
      {/* Conteúdo da Janela */}
      <div className="p-4 flex-grow text-gray-900 dark:text-gray-100">
        <p>Este é o conteúdo do aplicativo`{app.name}`.</p>
      </div>
    </div>
  );
};
