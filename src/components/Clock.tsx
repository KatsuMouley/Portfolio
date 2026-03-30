'use client';

import React, { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Atualiza o relógio a cada segundo
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="flex flex-col items-center text-white text-xs">
      <div>{time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</div>
      <div>{time.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short' })}</div>
    </div>
  );
}
