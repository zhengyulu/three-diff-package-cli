import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Setup from "./pages/Setup";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={<Home />}
          />
        <Route
          path="/setup"
          element={<Setup />}
          />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
