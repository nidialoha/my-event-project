import CreateEvent from "./Pages/CreateEvent";
import Home from "./Pages/Home";
import MainLayout from "./Layout/MainLayout";
import NotFound from "./Pages/NotFound";
import Signup from "./Pages/Signup";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Details from "./Pages/Details";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* //Nested Rootes */}
          <Route path="sign-up" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="details" element={<Details />} />

          {/* NOT FOUND PAGE */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
