import Table from "react-bootstrap/Table";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useHistory } from "react-router";

const SingleAlbum = ({ album }) => {
  const history = useHistory();

  const goToPreviousPath = () => {
    history.goBack();
    window.scrollTo(0, 0)
  };

  return (
    <div> 
      <ArrowBackRoundedIcon
        className="mx-5 my-4"
        style={{ fontSize: 50, cursor:"pointer" }}
        onClick={goToPreviousPath}
        
      />
      <div className="single-album-main">
        <div className="album-image">
          <img src={album.picture} alt={album.name} className="album-picture img-responsive mx-auto d-block"
           width='90%' />
        </div>
        <div className="album-text">
          <div className="album-name">
            <h2>{album.name}</h2>
          </div>
          <div className="album-year">
            <p>{album.year}</p>
          </div>
        </div>
      </div>
      <div className="album-songs">
        <Table responsive variant="dark" hover className="albumTable">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {album &&
              album.songs.map((song, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{song}</td>
                </tr>
              ))}
            <tr>
              <td>
                <PlayCircleIcon />
              </td>
              <td>
                {" "}
                <a target="_blank" href={album.link} rel="noreferrer">
                  Play{" "}
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default SingleAlbum;
