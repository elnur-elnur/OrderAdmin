import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tables: [],
  selectedTableId: null,
  personId: null,
  count: null,
  selectedFoods: {},
  price: null,
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
      state.tables = [...state.tables, action.payload];
      state.selectedTableId = action.payload.id;
    },
    selectPerson(state, action) {
      state.personId = action.payload;
    },
    selectedFoods(state, action) {
      state.selectedFoods = action.payload;
    },
    selectedFoodsPrice(state, action) {
      state.price = action.payload;
    },
    selectedFoodsCount(state, action) {
      console.log("first", action.payload);
      state.count = action.payload;
    },
    createdOrder(state, action) {
      let today = new Date();
      let time = today.getHours() + ":" + today.getMinutes();
      let i = 0;

      state.orders.push({
        id: i + 1,
        count: +action.payload.count,
        food_name: action.payload.selectedFoods.title,
        price: +action.payload.price,
        order_time: time,
      });
    },
  },
});

export const {
  setTables,
  selectTable,
  selectPerson,
  selectedFoods,
  selectedFoodsCount,
  selectedFoodsPrice,
  createdOrder,
} = tableSlice.actions;

export default tableSlice.reducer;
