'use client';

import React, { useState } from 'react';
import Window from '@/components/Window';
import Navbar from '@/components/Navbar'; // Importando o Navbar correto
import type { AppConfig, OpenApp } from '@/types/apps';

// --- COMPONENTE PRINCIPAL (PÁGINA) ---
export default function DesktopPage() {
  // Define o tipo para o objeto APPS
  const APPS: { [key: string]: AppConfig } = {
    'about': {
      id: 'about',
      name: 'Sobre',
      initialPosition: { x: 150, y: 100 },
    },
    'projects': {
      id: 'projects',
      name: 'Projetos',
      initialPosition: { x: 250, y: 200 },
    },
  };

  // Usa o tipo OpenApp para o estado
  const [openApps, setOpenApps] = useState<OpenApp[]>([]);

  const handleOpenApp = (appId: string) => {
    const isAlreadyOpen = openApps.some(app => app.id === appId);

    if (isAlreadyOpen) {
      handleFocusApp(appId);
      return;
    }
    
    const topZIndex = Math.max(10, ...openApps.map(app => app.zIndex)) + 1;
    
    setOpenApps([...openApps, { ...APPS[appId], zIndex: topZIndex }]);
  };

  const handleCloseApp = (appId: string) => {
    setOpenApps(openApps.filter(app => app.id !== appId));
  };
  
  const handleFocusApp = (appId: string) => {
    const topZIndex = Math.max(10, ...openApps.map(app => app.zIndex)) + 1;
    
    setOpenApps(
      openApps.map(app => 
        app.id === appId 
          ? { ...app, zIndex: topZIndex }
          : app
      )
    );
  };

  return (
    // Container principal que simula o "Desktop"
    <div className="relative w-full h-screen bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden">
      
      {/* Renderiza cada janela aberta */}
      {openApps.map(app => (
        <Window
          key={app.id}
          app={app}
          onClose={handleCloseApp}
          onFocus={handleFocusApp}
        />
      ))}

      {/* Renderiza a Barra de Tarefas passando os apps e a função de clique */}
      <Navbar apps={APPS} onIconClick={handleOpenApp} />
      
    </div>
  );
}
