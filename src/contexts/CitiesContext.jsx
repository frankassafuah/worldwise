/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  // useState,
} from "react";

const CitiesContext = createContext();
let intialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: action.payload };
    case "cities/loaded":
      return { ...state, cities: action.payload };
    case "city/loaded":
      return { ...state, currentCity: action.payload };
    case "city/created":
      return { ...state, cities: [...state.cities, action.payload] };
    case "city/deleted":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };
    default:
      throw new Error("unknown action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    intialState
  );

  useEffect(function () {
    async function fetchCities() {
      try {
        dispatch({ type: "loading", payload: true });
        const res = await fetch("http://localhost:9000/cities");
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch (error) {
        alert("there was an error");
      } finally {
        dispatch({ type: "loading", payload: false });
      }
    }
    fetchCities();
  }, []);

  const getCity = useCallback(async function getCity(id) {
    try {
      dispatch({ type: "loading", payload: true });
      const res = await fetch(`http://localhost:9000/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch (error) {
      alert("there was an error");
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  }, []);
  async function createCity(newCity) {
    try {
      dispatch({ type: "loading", payload: true });
      const res = await fetch(`http://localhost:9000/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "city/created", payload: data });
    } catch (error) {
      alert("there was an error");
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  }
  async function deleteCity(id) {
    try {
      dispatch({ type: "loading", payload: true });
      await fetch(`http://localhost:9000/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "city/deleted", payload: id });
    } catch (error) {
      alert("there was an error");
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  }
  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const value = useContext(CitiesContext);
  return value;
}

export { CitiesProvider, useCities };
