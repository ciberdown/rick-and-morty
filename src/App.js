import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Characters from "./components/characters/Characters";
import { Provider } from "react-redux";
import store from "./redux/store";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="App">
          <Characters />
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
