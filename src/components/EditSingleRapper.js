import { Link } from "react-router-dom";

const EditSingleRapper = ({ rapper }) => {
  //get albums from rapper 
  const { albums } = rapper;

  return (
    <>
      <div className="single-view-main">
        <div className="rapper-text">
          <div className="rapper-aka">
            <h2>{rapper.name}</h2>
          </div>
          <div className="rapper-country">{rapper.country}</div>
        </div>
        <div className="rapper-pic-div">
          <img
            className="rapper-picture"
            src={rapper.picture}
            alt='File has not been added yet'
          />
        </div>
      </div>
      <div className="rapper-bio">
        <p>{rapper.biography}</p>
      </div>
      <div className="rapper-albums row">
      <h2>Albums</h2>
        {albums &&
          albums.map((album, index) => (
            <div key={index} className=" col-4">
              <Link to={`/albumDetails/${album._id}`} className="rapper-album">
                <img
                  src={album.picture}
                  alt={album.name}
                  className="mx-auto d-block rapper-album-picture img-responsive"
                  width='80%'
                />
                <p className="text-center mt-3 mb-4 rapper-album-name">
                  {album.name}
                </p>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default EditSingleRapper;
