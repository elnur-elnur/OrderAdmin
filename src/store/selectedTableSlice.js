import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tables: [],
  selectedTableId: null,
  personId: null,
  // personName: "",
  orders: [],
};

const tableSlice = createSlice({
  name: "table",
  initialState: initialState,
  reducers: {
    setTables(state, action) {
      state.tables = action.payload;
    },
    selectTable(state, action) {
      state.selectedTableId = action.payload;
    },
    selectPerson(state, action) {
      state.personId = action.payload;
    },
    createdOrder(state, action) {
      state.orders.push(action.payload);
      // initialState.orders.push(action.payload);
      console.log("int", state);
    },
  },
});

export const { setTables, selectTable, selectPerson, createdOrder } =
  tableSlice.actions;

export default tableSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   {
//     id: 0,
//     tableId: 0,
//     personId: 0,
//     personName: "",
//     orderds: [],
//   },
// ];

// export const selectedTableSlice = createSlice({
//   name: "selectedTable",
//   initialState: initialState,
//   reducers: {
//     setSelectedTableId: (state, action) => {
//       console.log("action", action.payload);
//       console.log("state", state);
//       return action.payload;
//     },
//   },
// });

// export const { setSelectedTableId } = selectedTableSlice.actions;

// export default selectedTableSlice.reducer;

// const createOrder = createSlice({
//   name: "order",
//   initialState,
//   reducers: {
//     tableAdded(state, action) {
//       console.log("state", state);
//       console.log("action", action.payload);
//       //   state.tableId = state;
//     },
//   },
// });

// export const { setSelectedTable } = selectedTableSlice.actions;

// export default selectedTableSlice.reducer;
