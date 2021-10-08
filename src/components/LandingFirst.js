import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { LandingContext } from "../context/LandingContext";
import { AuthContext } from "../context/authContext";


const LandingFirst = () => {
  const history = useHistory();
  const { setLogin } = useContext(LandingContext);
  const {setLoggedIn } = useContext(AuthContext);

  const handleGuest = async () => { 
    history.push('/easteregg')
  }
  return (
    <>
      <div className="welcomeBox container">
        <p className="landingTitle">Rapper Finder</p>
        <p>Your favorite urban artists, all in one place</p>
      </div>
      <div className="landingButtons">
        <Button
          variant="outline-success"
          size="lg"
          className="landingButton"
          onClick={() => setLogin(true)}
        >
          Log In/Signup
        </Button>
        <Button
          variant="outline-danger"
          size="lg"
          className="landingButton"
          onClick={ handleGuest}
        >
          Continue as a Guest
        </Button>
      </div>
    </>
  );
};

export default LandingFirst;
