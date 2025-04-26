import React, { useState } from "react";
import Image from "next/image";
import axios from "axios"; // ใช้ axios
import { toast } from "react-toastify";

export function Modal({ id, name }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };
  const handleSubmit = async () => {
    if (!selectedFile) {
      toast.info("กรุณาเลือกไฟล์สลิปก่อน");
      document.getElementById(`my_modal_${id}`).close();

      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("singerId", id);

    try {
      await axios.post(
        "http://localhost:5000/api/v1/singer/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      ).then(() => {
        toast.success("โหวตเรียบร้อยแล้ว");
      });
      
      document.getElementById(`my_modal_${id}`).close();
      setSelectedFile(null);
      setPreviewURL(null);
    } catch (err) {
      document.getElementById(`my_modal_${id}`).close();
      setSelectedFile(null);
      setPreviewURL(null);
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <>

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
        <div className="modal-box w-[40rem] bg-black border-2 rounded-lg border-pink-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#e60073,0_0_15px_#e60073,0_0_30px_#e60073]">
          <h3 className="font-bold text-lg text-center text-pink-200">
            โหวดให้คุณ {name}
          </h3>

          <div className="modal-body flex flex-col md:flex-row justify-center gap-4 my-6 items-center md:items-start text-white">
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

              {previewURL && <p className="text-green-500">อัปโหลดเรียบร้อย</p>}
            </div>
          </div>

          <div className="modal-action flex flex-col gap-3 items-center">
            <button
              className="btn text-pink-200 bg-black border-2 rounded-lg border-pink-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#e60073,0_0_15px_#e60073,0_0_30px_#e60073]"
              onClick={handleSubmit}
            >
              ยืนยันการโหวต
            </button>
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
