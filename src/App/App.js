import { RouterProvider } from "react-router-dom";
import router from "../usage/router/router";
import { QueryClient, QueryClientProvider } from "react-query";
import "./_App.scss";
import { useEffect, useState } from "react";
import DarkModeSwitch from "../mode/mode";
import { useDispatch } from "react-redux";
import {
  setModeDark,
  setModeLight,
} from "../usage/redux/reducers/modeReducers";

const client = new QueryClient();

function App() {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const updateColorMode = (darkMode) => {
    dispatch(darkMode ? setModeDark() : setModeLight());
  };

  const handleColorSchemeChange = (event) => {
    updateColorMode(event.matches);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    updateColorMode(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleColorSchemeChange);
    return () => {
      mediaQuery.removeEventListener("change", handleColorSchemeChange);
    };
  }, []);

  return (
    <QueryClientProvider client={client}>
      <div className="main-index">
        <div className="App">
          <DarkModeSwitch />
          <div className={scrolled ? "paper scrolled" : "paper"} />
          <RouterProvider router={router} />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
