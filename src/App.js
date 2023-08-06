import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./usage/router/router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
