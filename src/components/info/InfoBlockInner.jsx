import React from "react";

const InfoBlockInner = ({ text, count, type }) => {
  return (
    <div>
      <p className="mb-2">{text}</p>
      <div
        className={`flex items-center justify-center p-3 h-20 ${
          type === "error"
            ? "bg-red-300"
            : type === "success"
            ? "bg-green-300"
            : "bg-blue-300"
        } text-white font-bold rounded `}
      >
        {count} {type === "income" && "Azn"}
      </div>
    </div>
  );
};

export default InfoBlockInner;
