import MainPage from "./pages/MainPage/MainPage";
import style from "./global.module.scss";
import Playbar from "./components/Playbar/Playbar";

function App() {
  return (
    <div className={style.wrapper}>
      <MainPage />
      <Playbar />
    </div>
  );
}

export default App;
