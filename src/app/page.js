"use client";
import { useState, Suspense, lazy } from "react";
import Link from "next/link";

import Loading from "./components/Loading";
import YearSelect from "./components/YearSelect";
const CarSelect = lazy(() => import("@/app/components/CarSelect"));

export default function Home() {
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const generateStaticParams = () => {
    return `result/${selectedCar}/${selectedYear}`;
  };

  return (
    <div className="w-[80%] lg:w-1/2 m-auto">
      <h1 className="text-2xl text-slate-800 font-bold mb-5">Car Dealer</h1>
      <div className="w-full flex flex-col md:flex-row justify-between mb-10 gap-10">
        <Suspense fallback={<Loading />}>
          <CarSelect
            selectedCar={selectedCar}
            setSelectedCar={setSelectedCar}
          />
        </Suspense>
        <YearSelect
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      </div>

      <Link href={generateStaticParams()}>
        <button
          type="button"
          disabled={!selectedCar || !selectedYear}
          className="text-white bg-green-700 hover:bg-green-800 disabled:opacity-25 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Next
        </button>
      </Link>
    </div>
  );
}
