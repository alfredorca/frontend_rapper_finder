import { useContext, useState } from "react";
import { RapperContext } from "../context/RapperContext";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";

const EditRapperView = ({match}) => {
  const {id} = match.params
  const { updateRapper } = useContext(RapperContext);
  const history = useHistory();
  const [rapper, setRapper] = useState({
    name: "",
    picture: "",
    albums: [],
    dateOfBirth: "",
    biography: "",
    country: "",
    videos: "",
  });

  const handleChange = (event) => {
    setRapper({
      ...rapper,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      name: rapper.name,
      picture: rapper.picture,
      albums: rapper.albums,
      dateOfBirth: rapper.dateOfBirth,
      biography: rapper.biography,
      country: rapper.country
    }
    updateRapper(id, data);
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   updateRapper(rapper);
  //   setRapper({
  //     name: "",
  //     picture: "",
  //     albums: [],
  //     dateOfBirth: "",
  //     biography: "",
  //     country: "",
  //     videos: "",
  //   });
  //   history.push('/home')
  // };

  return (
    <div className="addRapperMain">
      <form className="form">
        <h2>Create Rapper</h2>
        <label className='addlabel'>Rapper aka</label>
        <input
          type="text"
          name="name"
          value={rapper.name}
          onChange={handleChange}
          placeholder="Rapper name"
          className="form-control"
        />
        <label className='addlabel'>Country of origin</label>
        <input
          type="text"
          name="country"
          value={rapper.country}
          onChange={handleChange}
          placeholder="Country of Origin"
          className="form-control"
        />
        <label className='addlabel'>Date of birth</label>
        <input
          type="date"
          name="dateOfBirth"
          value={rapper.dateOfBirth}
          onChange={handleChange}
          placeholder="Date of Birth"
          className="form-control"
        />
        <label className='addlabel'>Link to rapper's picture</label>
        <input
          type="text"
          name="picture"
          value={rapper.picture}
          onChange={handleChange}
          placeholder="Link to picture"
          className="form-control"
        />
        <label className='addlabel'>Rapper's Bio</label>
        <textarea
          type="text"
          name="biography"
          value={rapper.biography}
          onChange={handleChange}
          placeholder="Rapper biography"
          className="form-control"
          id="biography"
        />
        <Button variant="info" className='mt-3' onClick={handleSubmit}>
          {" "}
          Create Rapper
        </Button>
      </form>
    </div>
  );
};

export default EditRapperView;
