import React from "react";
import Image from "next/image";
import { Modal } from "./modal";

export function Card({ id , name, imageName }) {
  return (
    <div
      className="relative w-96 h-auto flex justify-center items-center text-pink-200 border-2 rounded-lg border-pink-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#e60073,0_0_15px_#e60073,0_0_30px_#e60073] 
      transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <div className="absolute text-xl -top-5 bg-black px-2 text-center border-2 rounded-lg border-pink-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#e60073,0_0_15px_#e60073,0_0_30px_#e60073]">
        HKC {(id).toString().padStart(2, "0")}
      </div>
      <div className="flex flex-col p-10 gap-4">
      <div className="bg-black px-2 cursor-default text-center border-2 rounded-lg border-pink-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#e60073,0_0_15px_#e60073,0_0_30px_#e60073]">
          นักร้อง : {name}
        </div>
        <Image
          src={`/assets/image/singer/${imageName}`}
          width={200}
          height={200}
          alt={imageName}
          className="object-cover rounded-md"
        />
        
        <Modal id={id} name={name} />
      </div>
    </div>
  );
}
