import React, { useState } from "react";
import { createdOrder } from "./store/selectedTableSlice";

import Button from "@mui/material/Button";
import Tables from "./components/newOrderSteps/Tables";
import Persons from "./components/newOrderSteps/Persons";
import Foods from "./components/newOrderSteps/Foods";
import { useDispatch, useSelector } from "react-redux";
import InfoBlock from "./components/info/InfoBlock";
import SideBar from "./components/layout/SideBar";

const Home = () => {
  const [newOrder, setnewOrder] = useState(false);
  const dispatch = useDispatch();
  const reducerTableId = useSelector((state) => state.table.selectedTableId);
  const reducerPersonId = useSelector((state) => state.table.personId);

  const createOrder = () => {
    setnewOrder(true);
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex">
      <SideBar />

      <div className="flex flex-col w-full h-full p-5">
        {/* Info Block */}
        {!newOrder && (
          <>
            <InfoBlock />

            <button
              onClick={createOrder}
              className="w-auto mt-7 h-11 bg-blue-700 text-white hover:cursor-pointer"
            >
              Yeni Sifarish +
            </button>
          </>
        )}

        {newOrder && (
          <div>
            {!reducerTableId && <Tables />}

            {reducerTableId && !reducerPersonId && (
              <>
                <Persons />
                {/* <Button variant="contained">yeni sifarish yarat</Button> */}
              </>
            )}

            {reducerTableId && reducerPersonId && (
              <>
                <Foods />
                <Button
                  variant="contained"
                  onClick={() => dispatch(createdOrder(2))}
                >
                  Elave et
                </Button>
              </>
            )}
          </div>
        )}

        <p className="mt-auto text-center">
          © Algoritma - Fintech. Bütün hüquqlar qorunur.
        </p>
      </div>
    </div>
  );
};

export default Home;
