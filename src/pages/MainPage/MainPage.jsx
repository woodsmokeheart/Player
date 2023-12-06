import tracksList from "../../assets/tracksList";
import style from "./MainPage.module.scss";
import Track from "../../components/Track/Track";
import { Input } from "@mui/material";
import { useState } from "react";

const runSearch = (query) => {
  if (!query) {
    return tracksList;
  }

  const lowerCaseQuery = query.toLowerCase();
  return tracksList.filter(
    (track) =>
      track.title.toLowerCase().includes(lowerCaseQuery) ||
      track.artists.toLowerCase().includes(lowerCaseQuery)
  );
};

const MainPage = () => {
  const [tracks, setTracks] = useState(tracksList);

  const handleChange = (event) => {
    const foundTracks = runSearch(event.target.value);
    setTracks(foundTracks);
  };
  return (
    <div className={style.search}>
      <div className={style.input_container}>
        <Input
          className={style.input}
          placeholder="Track search..."
          onChange={handleChange}
        />
      </div>
      <div className={style.list}>
        {tracks.map((track) => (
          <Track key={track?.id} {...track} />
        ))}
      </div>
    </div>
  );
};
export default MainPage;
