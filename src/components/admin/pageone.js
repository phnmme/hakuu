import React from "react";
import { Card } from "@/components/cardadmin";

function pageone(data) {
  console.log(data.data);
  return (
    <div className="p-10 bg-black flex flex-wrap justify-center items-center gap-14">
      {Array.isArray(data.data) &&
        data.data.map((singer) => (
          <Card
            key={singer.id}
            id={singer.id}
            name={singer.name}
            imageName={singer.image ?? "600x600.svg"}
            score={singer.score}
          />
        ))}
    </div>
  );
}

export default pageone;
