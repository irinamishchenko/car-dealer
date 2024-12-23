"use client";
import { useState, useEffect } from "react";

const CarSelect = ({ selectedCar, setSelectedCar }) => {
  const [cars, setCars] = useState([]);
  const url = process.env.NEXT_PUBLIC_ALL_CARS_URL;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCars(data.Results));
  }, []);

  return (
    <div className="flex items-center gap-10">
      <label htmlFor="car-select">Select the car:</label>
      <select
        id="car-select"
        value={selectedCar}
        onChange={(e) => setSelectedCar(e.target.value)}
        className="w-[150px]"
      >
        {cars?.map((car) => (
          <option key={car.MakeId} value={car.MakeId}>
            {car.MakeName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CarSelect;
