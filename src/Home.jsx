import React, { useState } from "react";
import { createdOrder } from "./store/selectedTableSlice";

import Button from "@mui/material/Button";
import Tables from "./components/newOrderSteps/Tables";
import Persons from "./components/newOrderSteps/Persons";
import Foods from "./components/newOrderSteps/Foods";
import { useDispatch, useSelector } from "react-redux";
import InfoBlock from "./components/info/InfoBlock";
import SideBar from "./components/layout/SideBar";
import OrderTable from "./components/orderTable";

const Home = () => {
  const [newOrder, setnewOrder] = useState(false);
  const [finishOrder, setfinishOrder] = useState(false);
  const dispatch = useDispatch();
  const _state = useSelector((state) => state);
  const reducerTableId = useSelector((state) => state.table.selectedTableId);
  const reducerTables = useSelector((state) => state.table.tables);
  const reducerPersonId = useSelector((state) => state.table.personId);

  const createOrder = () => {
    setnewOrder(true);
  };

  const createOrderMethod = () => {
    dispatch(createdOrder(_state.table));
    setfinishOrder(true);
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

            {reducerTableId && reducerPersonId && !finishOrder && (
              <>
                <Foods />
                <Button variant="contained" onClick={createOrderMethod}>
                  Elave et
                </Button>
              </>
            )}
          </div>
        )}

        {finishOrder && <OrderTable />}

        <p className="mt-auto text-center">
          © Algoritma - Fintech. Bütün hüquqlar qorunur.
        </p>
      </div>
    </div>
  );
};

export default Home;
