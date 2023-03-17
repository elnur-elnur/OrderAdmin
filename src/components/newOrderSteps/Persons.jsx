import React from "react";
import { useGetPersonsQuery } from "../../store";
import { useDispatch } from "react-redux";
import { selectPerson } from "../../store/selectedTableSlice";

const Persons = () => {
  const dispatch = useDispatch();
  const { data: persons = [], isError, isLoading } = useGetPersonsQuery();

  const onSaveItem = (id, type) => {
    type === "person" && dispatch(selectPerson(id));
  };
  return (
    <div className="my-5">
      <p className="mb-5">Xidmət edəcək şəxsi seçin</p>
      <div className="flex gap-4">
        {persons.map((person) => (
          <div
            key={person.id}
            id={person.id}
            onClick={() => onSaveItem(person.id, "person")}
            className="inline-flex items-center justify-center bg-red-400 h-10 px-3 text-white hover:cursor-pointer hover:bg-green-100 hover:text-black"
          >
            {person.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Persons;
