import "./App.css";
import About from "./pages/about";
import AuthLayout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/home";
import Test from "./pages/test/test";
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Home/>}>
      <Route index element={<About />} />
      <Route path="/test" element={<Test />} />
    
  
    <Route path="/auth" element={<AuthLayout />}>
      <Route path="signup" element={<Signup />} />
      <Route
          path="login"
          element={<Login />}
          // loader={redirectIfUser}
        />
    </Route>
  </Route>
))

function App() {
  return(
    <RouterProvider router={router} />
  );
}

export default App;
