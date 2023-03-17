import React, { useEffect, useState } from "react";
import { useGetFoodsQuery } from "../../store";
import { useDispatch } from "react-redux";
import { createdOrder } from "../../store/selectedTableSlice";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Foods = () => {
  const [newOrder, setnewOrder] = useState(false);
  const [count, setcount] = useState(0);
  const [foodPrice, setfoodPrice] = useState(0);
  const [calcedPrice, setcalcedPrice] = useState(0);
  const [selectedFoodTitle, setselectedFoodTitle] = useState("");

  const dispatch = useDispatch();

  const { data: foods = [], isError, isLoading } = useGetFoodsQuery();

  const handleChange = (event) => {
    setselectedFoodTitle(event.target.value);
  };

  const createOrder = () => {
    setnewOrder(true);
  };

  const calcCount = () => {
    if (count !== "") {
      let calc = foodPrice * count;
      calc && setcalcedPrice(calc.toFixed(2));
    } else {
      setcalcedPrice(null);
    }
  };

  useEffect(() => {
    calcCount();
  }, [count, foodPrice]);

  return (
    <div className="bg-gray-200 p-4 my-5">
      <div>
        <p className="mb-3">Mehsul adi</p>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">secin</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedFoodTitle}
              label="foodPrice"
              onChange={handleChange}
            >
              {foods.map((food) => (
                <MenuItem
                  key={food.id}
                  id={food.id}
                  value={food.title}
                  onClick={() => {
                    setfoodPrice(food.price);
                    calcCount();
                  }}
                >
                  {food.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>

      <div>
        <p className="my-4">Miqdar</p>
        <input onChange={(e) => setcount(e.target.value)} type="number" />
      </div>

      <p>Qiymet: {calcedPrice !== null ? calcedPrice : "0"} Azn</p>
    </div>
  );
};

export default Foods;
