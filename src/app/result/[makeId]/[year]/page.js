"use client";
import { useState, useEffect, Suspense, lazy } from "react";
import { useParams } from "next/navigation";
import ErrorMessage from "@/app/components/ErrorMessage";

import Loading from "@/app/components/Loading";

const ModelCard = lazy(() => import("@/app/components/ModelCard"));

const ResultPage = () => {
  const [cars, setCars] = useState(null);
  const [error, setError] = useState(null);

  const { makeId, year } = useParams();

  const url = process.env.NEXT_PUBLIC_FILTERED_CARS_URL;

  useEffect(() => {
    fetch(`${url}/makeId/${makeId}/modelyear/${year}?format=json`)
      .then((res) => res.json())
      .then((data) => setCars(data.Results))
      .catch((error) => setError(error));
  }, [makeId, year]);

  return (
    <div>
      {error && <ErrorMessage />}
      <Suspense fallback={<Loading />}>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {cars?.map((car, index) => (
            <ModelCard
              key={index}
              name={car.Make_Name}
              model={car.Model_Name}
            />
          ))}
        </ul>
      </Suspense>
    </div>
  );
};

export default ResultPage;
