import { useContext, useEffect } from "react";
import SingleAlbum from "../components/SingleAlbum";
import { AlbumContext } from "../context/AlbumContext";

const SingleAlbumView = ({ match }) => {
  const { getAlbumById, album } = useContext(AlbumContext);
  const { id } = match.params;
  

  useEffect(() => {
    getAlbumById(id);
  });
  return (
    <div className="SingleAlbumMain">
      {album && <SingleAlbum album={album} />}
    </div>
  );
};

export default SingleAlbumView;
