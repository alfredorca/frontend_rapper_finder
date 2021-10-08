import { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router";
import { AuthContext } from "../context/authContext";

const LandingLogin = () => {
  const history = useHistory()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {setUser, loginUser, user, signUpUser } = useContext(AuthContext)

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(user);
    history.push("/home")
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    signUpUser(user)
    history.push('/home')
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Full Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="email@test.com"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="***********"
              onChange={handleChange}
            />
            <button onClick={handleSignUp} className="btn btn-outline-success form-control modalButton">
              Sign Up
            </button>
          </form>
        </Modal.Body>
      </Modal>
      <div className=" landingLogin">
        <form className="form">
          <h2>Login</h2>
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="email@test.com"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="***********"
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className="btn btn-primary form-control">Login</button>
        </form>
        <p onClick={handleShow} className="SignUpLink">
          Not a member yet?
        </p>
      </div>
    </>
  );
};

export default LandingLogin;
