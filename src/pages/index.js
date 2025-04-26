import Image from "next/image";
import { Card } from "../components/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const [singerData, setSingerData] = useState([]);
  useEffect(() => {
    const fetchSingers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/singer/");
        response.data.data.sort((a, b) => a.id - b.id);
        setSingerData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingers();

    const interval = setInterval(() => {
      fetchSingers();
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="relative w-full h-60">
        <Image
          src="/assets/image/3.gif"
          alt="banner"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="h-1 my-3 mx-10 bg-pink-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#e60073,0_0_15px_#e60073,0_0_30px_#e60073] rounded-lg"></div>
      <p className="text-center text-pink-200 text-3xl md:text-5xl pt-10 pb-5">
        HKC Singing Award Season 3
      </p>
      <p className="text-center text-pink-200 text-xl md:text-2xl">
        โหวตให้กับนักร้องที่คุณชื่นชอบ
      </p>

      <div className="p-10 bg-black flex flex-wrap justify-center items-center gap-14">
        {Array.isArray(singerData) &&
          singerData.map((singer, ) => (
            <Card
              key={singer.id}
              id={singer.id}
              name={singer.name}
              imageName={singer.image ?? "600x600.svg"}
            />
          ))}
      </div>
      <ToastContainer />
    </>
  );
}
