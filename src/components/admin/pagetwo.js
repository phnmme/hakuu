import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function ScoreManager() {
  const [mode, setMode] = useState("add");
  const [singerId, setSingerId] = useState("");
  const [score, setScore] = useState("");
//   const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!singerId || !score) {
      alert("กรุณากรอกไอดีและจำนวนคะแนนให้ครบถ้วน");
      return;
    }

    const payload = {
      singerId: Number(singerId.trim()),
      score: Number(score),
      mode: mode,
    };

    try {
      await axios
        .patch("http://localhost:5000/api/v1/singer/vote", payload, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          toast.success(`ทำการ ${mode === "add" ? "เพิ่ม" : "ลด"} คะแนนสำเร็จ`);
        });
      setSingerId("");
      setScore("");
    } catch (error) {
        toast.error("เกิดข้อผิดพลาดในการอัปเดตคะแนน");
    }
  };

  return (
    <div className="flex flex-col items-center pt-10 gap-6">
      <h1 className="text-2xl font-bold text-pink-200">จัดการคะแนน</h1>

      <div className="flex gap-4">
        <button
          onClick={() => setMode("add")}
          className={`px-4 py-2 rounded ${
            mode === "add"
              ? "bg-black border-2 rounded-lg border-pink-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#e60073,0_0_15px_#e60073,0_0_30px_#e60073]"
              : "bg-gray-400"
          } text-white`}
        >
          เพิ่มคะแนน
        </button>
        <button
          onClick={() => setMode("subtract")}
          className={`px-4 py-2 rounded ${
            mode === "subtract"
              ? "bg-black border-2 rounded-lg border-pink-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#e60073,0_0_15px_#e60073,0_0_30px_#e60073]"
              : "bg-gray-400"
          } text-white`}
        >
          ลดคะแนน
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-sm"
      >
        <div>
          <label className="block mb-1 font-medium text-pink-200 text-start">
            ไอดีผู้ใช้
          </label>
          <input
            type="text"
            value={singerId}
            onChange={(e) => setSingerId(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="กรอกไอดีผู้ใช้"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-pink-200 text-start">
            จำนวนคะแนน
          </label>
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="กรอกจำนวน"
            required
          />
        </div>
        <button
          type="submit"
          className="border-2 py-4 text-pink-200 rounded-lg border-pink-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#e60073,0_0_15px_#e60073,0_0_30px_#e60073]"
        >
          ยืนยัน
        </button>
      </form>
    </div>
  );
}
