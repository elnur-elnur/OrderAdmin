import React from "react";

const SideBar = () => {
  return (
    <div className="flex flex-col items-start w-1/5 h-full bg-blue-400 p-5">
      <div className="flex items-center mb-3">
        <img
          className="w-5 object-contain"
          src="../logo.jpeg"
          alt="algoritma"
        />
        <h1 className="ml-2">Algoritma</h1>
      </div>

      <p>Haqqimizda</p>
    </div>
  );
};

export default SideBar;
