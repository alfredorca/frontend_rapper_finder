import { useEffect, createContext, useState, useContext } from "react";

import helperApi from "../apiHelper/apiHelper";
import { RapperContext } from "./RapperContext";

export const AlbumContext = createContext({});

const AlbumProvider = ({ children }) => {
  const [albums, setAlbums] = useState([]);
  const [album, setAlbum] = useState({
    name: "",
    songs: [],
    picture: "",
    year: "",
    link: ""
  });
  const {activeRapper} = useContext(RapperContext)

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = async () => {
    const response = await helperApi.get(`/albums`);
    setAlbums(response.data);
  };

  const getAlbumById = async (id) => {
    const response = await helperApi.get(`/albums/album/${id}`);
    setAlbum(response.data);
  };

  const createAlbum =  (obj) => {
    const rapersAlbums = activeRapper.albums;
    if (activeRapper) {
       helperApi.post(`/albums/album`, obj)
       .then((response) => {
         let updated_albums = [...rapersAlbums, response.data._id];
         helperApi.put(`/rappers/rapper/${activeRapper._id}`, {albums: updated_albums})
       })
       .then(getAlbums())
    } else {
      alert('Make sure you selected a rapper')
    }
  }

  return (
    <AlbumContext.Provider value={{ albums, album, setAlbum, setAlbums, getAlbums, getAlbumById, createAlbum }}>
      {children}
    </AlbumContext.Provider>
  );
};

export default AlbumProvider;
