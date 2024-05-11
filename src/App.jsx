import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login"
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/app" element={<AppLayout></AppLayout>} />
        <Route path="product" element={<Product></Product>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="pricing" element={<Pricing></Pricing>} />
        <Route path="*" element={<PageNotFound></PageNotFound>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
