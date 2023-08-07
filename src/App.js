import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./usage/router/router";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <div className="paper" />
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
