import React from "react";
import Image from "next/image";
import { useState } from "react";

export function Modal({ id, name }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn text-pink-200 hover:border-none hover:stroke-none bg-black px-2 text-center border-2 rounded-lg border-pink-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#e60073,0_0_15px_#e60073,0_0_30px_#e60073]"
        onClick={() => document.getElementById(`my_modal_${id}`).showModal()}
      >
        vote
      </button>
      <dialog
        id={`my_modal_${id}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box bg-black border-2 rounded-lg border-pink-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#e60073,0_0_15px_#e60073,0_0_30px_#e60073]">
          <h3 className="font-bold text-lg text-center">โหวดให้คุณ {name}</h3>
          <div className="modal-body flex flex-col md:flex-row justify-center gap-4 my-6 items-center md:items-start">
            <Image
              src={`/assets/image/qrcodehakuu.jpg`}
              width={200}
              height={200}
              alt={id}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col gap-4 text-center md:text-left">
              <p>เลขที่บัญชี : 180-8-00930-3</p>
              <p>ธนาคาร : กสิกร</p>
              <p>ชื่อบัญชี : ณัฏฐณัฏฐา ชูศรี</p>
              <label className="cursor-pointer mt-2 btn text-pink-200 bg-black border-2 rounded-lg border-pink-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#e60073,0_0_15px_#e60073,0_0_30px_#e60073]">
                อัพโหลดสลิปโอนเงิน
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
          <div className="modal-action flex justify-center">
            <form method="dialog">
              <button className="btn text-pink-200 bg-black border-2 rounded-lg border-pink-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#e60073,0_0_15px_#e60073,0_0_30px_#e60073]">
                ปิด
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
