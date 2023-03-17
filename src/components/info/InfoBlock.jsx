import React from "react";
import InfoBlockInner from "./InfoBlockInner";

const InfoBlock = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-1/4">
        <InfoBlockInner text={"Gelir"} type={"income"} count={"23.000"} />
      </div>
      <div className="w-1/4">
        <InfoBlockInner text={"Umumi Sifarisler"} type={"info"} count={"140"} />
      </div>
      <div className="w-1/4">
        <InfoBlockInner
          text={"Sonlanan Sifarisler"}
          type={"success"}
          count={"99"}
        />
      </div>
      <div className="w-1/4">
        <InfoBlockInner
          text={"Sonlanmayan Sifarisler"}
          type={"error"}
          count={"41"}
        />
      </div>
    </div>
  );
};

export default InfoBlock;
