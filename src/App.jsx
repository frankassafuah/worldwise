import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path="app" element={<AppLayout></AppLayout>}>
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City></City>}></Route>
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form></Form>} />
            </Route>
            <Route path="product" element={<Product></Product>} />
            <Route path="login" element={<Login></Login>} />
            <Route path="pricing" element={<Pricing></Pricing>} />
            <Route path="*" element={<PageNotFound></PageNotFound>} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
