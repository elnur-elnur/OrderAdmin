import React from "react";
import { useGetTablesQuery } from "../../store";
import { useDispatch } from "react-redux";
import { selectTable } from "../../store/selectedTableSlice";

const Tables = () => {
  const dispatch = useDispatch();
  const { data: tables = [], isError, isLoading } = useGetTablesQuery();

  const onSaveItem = (table, type) => {
    type === "table" && dispatch(selectTable(table));
  };

  return isLoading ? (
    <p>Loading... </p>
  ) : isError ? (
    <p>Masa tapilmadi</p>
  ) : (
    <div>
      <p className="mb-5">Masani secin</p>

      <div className="grid grid-cols-5 gap-2">
        {tables.map((table) => (
          <div
            key={table.id}
            className="inline-flex justify-center items-center bg-blue-300 h-[150px] hover:cursor-pointer hover:bg-green-100"
            onClick={() => onSaveItem(table, "table")}
          >
            {table.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tables;
