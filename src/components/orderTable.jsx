import React from "react";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";

const columns = [
  { field: "id", headerName: "Say", width: 90 },
  {
    field: "food_name",
    headerName: "Mehsulun adi",
    width: 150,
    editable: true,
  },
  {
    field: "count",
    headerName: "Miqdar",
    width: 150,
    editable: true,
  },
  {
    field: "price",
    headerName: "Mebleg",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "order_time",
    headerName: "Sifarish saati",
    sortable: false,
    width: 160,
  },
];

const OrderTable = () => {
  const _state = useSelector((state) => state);

  const rows = _state.table.orders;

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />

      <p className="mt-5">
        <span>Cemi Mebleg: </span> <span>0.00 Azn</span>
      </p>

      <div className="flex justify-end">
        <Button variant="contained" color="error">
          Sifarishi sonlandir
        </Button>
      </div>
    </Box>
  );
};

export default OrderTable;
