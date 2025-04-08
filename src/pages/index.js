import Image from "next/image";
import { Card } from "../components/card";

const contestants = [
  { id: "01", name: "Alice", imageName: "nhom.jpg", score: 95 },
  { id: "02", name: "Bob", imageName: "600x600.svg", score: 98 },
  { id: "03", name: "Charlie", imageName: "600x600.svg", score: 92 },
  { id: "04", name: "David", imageName: "600x600.svg", score: 96 },
  { id: "05", name: "Eve", imageName: "600x600.svg", score: 99 },
  { id: "06", name: "Frank", imageName: "600x600.svg", score: 94 },
  { id: "07", name: "Grace", imageName: "600x600.svg", score: 97 },
  { id: "08", name: "Hank", imageName: "600x600.svg", score: 91 },
  { id: "09", name: "Ivy", imageName: "600x600.svg", score: 93 },
];

export default function Home() {
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
      <p className="text-center text-pink-200 text-3xl md:text-5xl py-10">
        HKC Singing Award Season 3
      </p>

      <div className="p-10 bg-black flex flex-wrap justify-center items-center gap-14">
        {contestants.map((contestant) => (
          <Card key={contestant.id} {...contestant} />
        ))}
      </div>
    </>
  );
}
