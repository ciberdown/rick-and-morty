import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./root";
import Home from "../../components/home";
import Characters from "../../components/characters/carachters";
import Episodes from "../../components/episodes/episodes";
import Locations from "../../components/locations/locations";
import Info from "../../components/info";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/info" element={<Info />} />
    </Route>
  )
);

export default router;
