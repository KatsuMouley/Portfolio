'use client';

import Image from "next/image";

export default function Taskbar() {
const agora = new Date();

// Só a data local
const dataLocal = agora.toLocaleDateString(); // ex: "15/06/2025"

// Só a hora local
const horaLocal = agora.toLocaleTimeString(); // ex: "17:42:30"
  return (
    <>
    
      <nav className="Taskbar ">
        <div></div>


        <div className="bg-white bottom-0 w-[100vw] absolute p-5 shadow-amber-50 shadow-[0_0_20px_15px_rgba(0,0,0,0.1)] flex flex-row justify-between">
          <div className="flex flex-row gap-10">
            <div className="color_pink w-[50px] h-[50px] rounded-2xl hover:scale-110 transition-all cursor-pointer">APP 2</div>
            <div className="color_pink w-[50px] h-[50px] rounded-2xl hover:scale-110 transition-all cursor-pointer">APP 3</div>
            <div className="color_pink w-[50px] h-[50px] rounded-2xl hover:scale-110 transition-all cursor-pointer">APP 1</div>
            <div className="color_pink w-[50px] h-[50px] rounded-2xl hover:scale-110 transition-all cursor-pointer">APP 4</div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col text-black text-right"> 
              <div>{horaLocal}</div>
              <div>{dataLocal}</div>
            </div>
            <div>
              <Image className=" hover:scale-110 transition-all cursor-pointer" src="/bell.svg" alt="Ícone de sino de notificações" width={40} height={40}/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
