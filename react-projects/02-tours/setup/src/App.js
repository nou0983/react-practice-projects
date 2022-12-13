import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchingTours = async () => {
    try {
      const res = await fetch(url);

      if (!(res.status >= 200 && res.status <= 299)) {
        setIsError(true);
        throw new Error();
      }

      const tours = await res.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchingTours();
  }, []);

  const removeTourHandler = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const refetchAllHandler = () => {
    fetchingTours();
  };

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <p>There was an error while fetching date from the server</p>
      ) : (
        <Tours
          tours={tours}
          removeTourHandler={removeTourHandler}
          refetchAllHandler={refetchAllHandler}
        />
      )}
    </main>
  );
}

export default App;
