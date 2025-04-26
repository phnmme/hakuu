import axios from "axios";
import React, { useEffect, useState } from "react";
import Pageone from "@/components/admin/pageone";
import Pagetwo from "@/components/admin/pagetwo";

export default function Index() {
  const [stepPage, setStepPage] = useState(1);
  const [showModal, setShowModal] = useState(true);
  const [username, setUsername] = useState("nhomadmin");
  const [password, setPassword] = useState("27042568adminnhom");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const validUsername = "nhomadmin";
    const validPassword = "27042568adminnhom";

    if (username === validUsername && password === validPassword) {
      setShowModal(false);
      const fetchSingers = async () => {
        try {
          const response = await axios.get("http://localhost:5000/api/v1/singer/admin/auth/data");
          response.data.data.sort((a, b) => a.id - b.id);
          console.log(response.data);
          setData(response.data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      fetchSingers();
      
      const interval = setInterval(() => {
        fetchSingers();
      }, 5000);
    
      return () => clearInterval(interval);
    } else {
      setError("Username หรือ Password ไม่ถูกต้อง");
    }
  };

  return (
    <>
      
      <div className="flex justify-center items-center gap-5 pt-24">
        <button
          onClick={() => setStepPage(1)}
          className={`${
            stepPage === 1 ? "bg-pink-900 border-2 rounded-lg border-pink-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#e60073,0_0_15px_#e60073,0_0_30px_#e60073] " : "bg-gray-500"
          } text-white px-4 py-2 rounded`}
        >
          ดูคะแนน
        </button>
        <button
          onClick={() => setStepPage(2)}
          className={`${
            stepPage === 2 ? "bg-pink-900 border-2 rounded-lg border-pink-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#e60073,0_0_15px_#e60073,0_0_30px_#e60073]" : "bg-gray-500"
          } text-white px-4 py-2 rounded`}
        >
          เพิ่ม-ลดคะแนน
        </button>
        
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className=" p-8  w-full max-w-md bg-black px-2 text-center border-2 rounded-lg border-pink-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#e60073,0_0_15px_#e60073,0_0_30px_#e60073]">
            <h2 className="text-2xl font-bold mb-4 text-center text-pink-200">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <div className="bg-red-100 text-red-700 p-2 rounded">
                  {error}
                </div>
              )}
              <div>
                <label className="block mb-1 text-sm font-medium text-pink-200 text-start">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-pink-200 text-start">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border rounded p-2"
                />
              </div>
              <button
                type="submit"
                className="w-fit mt-5 bg-black px-10 py-3 text-center border-2 rounded-lg border-pink-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#e60073,0_0_15px_#e60073,0_0_30px_#e60073]"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {stepPage === 1 && <div className="text-center"><Pageone data={data} /></div>}
      {stepPage === 2 && <div className="text-center"><Pagetwo /></div>}
    </>
  );
}
