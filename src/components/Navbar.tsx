'use client';

import React from 'react';
import TaskbarIcon from '@/components/AppIcon'; // Renomeei para ser mais descritivo
import Clock from '@/components/Clock'; // Novo componente para o relógio
import type { AppConfig } from '@/types/apps';

// Props que o Navbar vai receber
interface NavbarProps {
    apps: { [key: string]: AppConfig };
    onIconClick: (id: string) => void;
}

export default function Navbar({ apps, onIconClick }: NavbarProps) {
    return (
        <div className="absolute bottom-0 left-0 w-full">
            <div className="flex items-center justify-between bg-black bg-opacity-30 backdrop-blur-md p-2 mx-auto mb-2 rounded-xl border border-white border-opacity-20 max-w-max">

                {/* Seção dos Ícones dos Apps (Dinâmica) */}
                <div className="flex items-center justify-center gap-2">
                    {Object.values(apps).map(app => (
                        <TaskbarIcon key={app.id} app={app} onClick={onIconClick} />
                    ))}
                </div>

                {/* Divisor (Opcional, para estética) */}
                <div className="h-10 w-px bg-white/20 mx-4"></div>

                {/* Seção do Relógio e Notificações */}
                <div className="flex items-center gap-4 pr-2">
                    <Clock />
                    {/* Ícone de sino para notificações futuras */}
                    <div className="text-white cursor-pointer hover:text-yellow-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    );
}
