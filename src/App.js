import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    )
  );

  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <Home />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-blue-500 mb-4 py-4 text-white gap-4">
        <Link to="/home">Home</Link>
        <Link to="/about">Haaqqimizda</Link>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
