// import { toast } from "react-toastify";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useContext, useState } from "react";
import { AlbumContext } from "../context/AlbumContext";
import {useHistory} from 'react-router-dom'
import Button from "react-bootstrap/Button";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
const AddAlbumView = () => {
  const { createAlbum, album, setAlbum } = useContext(AlbumContext);
  const [disable, setDisable] = useState(false);
  const history = useHistory()

  const handleChange = (event) => {
    setDisable(false);
    setAlbum({
      ...album,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createAlbum(album);
    setAlbum({
      name: "",
      songs: [],
      link: "",
      year: "",
      picture: ""
    });
    history.goBack()
  };

  const handleSongs = () => {
    let songs = album.songs.split(",");
    album.songs = songs;
    setDisable(true);
  };
  return (
    <div className="addAlbumMain">
    <ArrowBackRoundedIcon
      className="mx-5"
      style={{ fontSize: 50, color: "white" }}
      onClick={() => history.goBack()}
    />
      {/* {console.log(album.songs)} */}
      <form className="form">
        <h2>Create Album</h2>
        <label className="addlabel">Name of the Album</label>
        <input
          type="text"
          name="name"
          value={album.name}
          onChange={handleChange}
          placeholder="Album name"
          className="form-control"
        />
        <label className="addlabel">Year of album's publishment</label>
        <input
          type="number"
          name="year"
          value={album.year}
          onChange={handleChange}
          placeholder="Year published"
          className="form-control"
        />
        <label className="addlabel ">Link to the album</label>
        <input
          type="text"
          name="link"
          value={album.link}
          onChange={handleChange}
          placeholder="Spotify, Youtube, or any link"
          className="form-control"
        />
        <label className="addlabel ">Link to album's picture</label>
        <input
          type="text"
          name="picture"
          value={album.picture}
          onChange={handleChange}
          placeholder="linktoimage.com"
          className="form-control"
        />
        <label className="addlabel mt-2">
          Introduce the songs of the album, separated by commas. Ex: Song 1,
          Song 2, Song 3...
        </label>
        <textarea
          name="songs"
          value={album.songs}
          onChange={handleChange}
          placeholder={`"Song 1, Song 2, Song 3"`}
          className="form-control"
          id="biography"
        />
        <Button
          className="mt-3"
          disabled={disable}
          variant="info"
          onClick={handleSongs}
        >
          {" "}
          <MusicNoteIcon />
          Add Songs
        </Button>

        <Button variant="success" onClick={handleSubmit}>
          {" "}
          <AddIcon />
          Create Album
        </Button>
      </form>
    </div>
  );
};

export default AddAlbumView;

// onClick={handleSubmit}
