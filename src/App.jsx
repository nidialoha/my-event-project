import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Signup from "./Pages/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* //Nested Rootes */}
          <Route path="sign-up" element={<Signup />} />

          {/* NOT FOUND PAGE */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
