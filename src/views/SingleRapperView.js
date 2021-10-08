import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SingleRapper from "../components/SingleRapper";
import { RapperContext } from "../context/RapperContext";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import AlbumIcon from "@mui/icons-material/Album";

const SingleRapperView = ({ match }) => {
  const { getRapperById, rapper } = useContext(RapperContext);
  const { id } = match.params;

  useEffect(() => {
    getRapperById(id);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="singleRapperMain">
      <Link to="/home">
        <ArrowBackRoundedIcon
          className="mx-5"
          style={{ fontSize: 50, color: "white" }}
        />
      </Link>
      {rapper && <SingleRapper rapper={rapper} />}
      <div className="addAlbumButton">
        <Link to='/addalbum' className="btn btn-outline-info buttonAlbumAdd">
          <AlbumIcon className="mx-2" />
          Add Album{" "}
        </Link>
      </div>
    </div>
  );
};

export default SingleRapperView;
