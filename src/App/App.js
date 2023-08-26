import { RouterProvider } from "react-router-dom";
import router from "../usage/router/router";
import { QueryClient, QueryClientProvider } from "react-query";
import "./app.scss";

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
