import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:9000/cities");
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("there was an error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="app" element={<AppLayout></AppLayout>}>
          <Route index element={<CityList cities={cities} isLoading={isLoading}/>} />
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
          <Route path="cities/:id" element={<City></City>}></Route>
          <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="product" element={<Product></Product>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="pricing" element={<Pricing></Pricing>} />
        <Route path="*" element={<PageNotFound></PageNotFound>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
