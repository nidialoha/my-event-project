import CreateEvent from "./Pages/CreateEvent";
import Home from "./Pages/Home";
import MainLayout from "./Layout/MainLayout";
import NotFound from "./Pages/NotFound";
import Signup from "./Pages/Signup";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";

import Empty from "./Pages/Empty";
import { AuthProvider } from "./Context/AuthProvider";
import ProtectedRoute from "./Components/ProtectedRoute";
import Logout from "./Pages/Logout";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route index element={<Home />} />

          {/* //Nested Rootes */}
          <Route path="Empty" element={<Empty />} />
          <Route path="sign-up" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="create-event" element={<CreateEvent />} />

          {/* NOT FOUND PAGE */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
