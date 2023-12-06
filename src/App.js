import MainPage from "./pages/MainPage/MainPage";
import React, { useState, useEffect } from "react";
import style from "./global.module.scss";
import Playbar from "./components/Playbar/Playbar";
import FileLoader from "./components/FileLoader/FileLoader";

function App() {
  const [isLoading, setIsLoading] = useState(
    !sessionStorage.getItem("visited")
  );

  useEffect(() => {
    if (!sessionStorage.getItem("visited")) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("visited", "true");
      }, 4000);
    }
  }, []);
  return (
    <div className={style.wrapper}>
      {isLoading ? (
        <FileLoader />
      ) : (
        <React.Fragment>
          <MainPage />
          <Playbar />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
