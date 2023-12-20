import Navbar from "./components/header/Navbar";
import RootLayOut from "./components/roots/RootLayOut";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/services/Services";
import Project from "./pages/projects/Project";
import Contact from "./pages/contact/Contact";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut/>}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/services" element={<Service/>}></Route>
        <Route path="/projects" element={<Project/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
