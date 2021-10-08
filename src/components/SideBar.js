import { SideBarData } from "./SideBarData";
import LogoutIcon from "@mui/icons-material/Logout";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useHistory } from "react-router";
import DeleteIcon from '@mui/icons-material/Delete';
const SideBar = () => {
  const { loggedIn, logOutUser, admin } = useContext(AuthContext);
  const history = useHistory();

  const logOut = async () => {
    await logOutUser();
    // history.push("/");
  };
  return (
    <section className='sideBarMainSection'>
      <div className="sidebar">
        {SideBarData.map((val, key) => (
          <div key={key}>
            {val.title === "Rapper Finder" ? (
              <div className="RapperGrid">
                <div className="icon">{val.icon}</div>
                <div id="RapperTitle">{val.title}</div>
              </div>
            ) : (
              <ul>
                <li
                  key={key}
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                  id={window.location.pathname === val.link ? "active" : ""}
                >
                  <div className="icon">{val.icon}</div>
                  <div className="title">{val.title}</div>
                </li>
              </ul>
            )}
          </div>
        ))}
        {loggedIn ? (
          <ul>
            <li
              onClick={() => {
                window.location.pathname = "/addrapper";
              }}
              id={window.location.pathname === "/addrapper" ? "active" : ""}
            >
              <div className="icon">
                <AddCircleIcon />
              </div>
              <div className="title">Add Rapper</div>
            </li>
            <li onClick={logOut}>
              <div className="icon">
                <LogoutIcon />
              </div>
              <div className="title">Log Out</div>
            </li>
          </ul>
        ) : (
          <ul>
            <li>Hi</li>
          </ul>
        )}
        {admin ? (
          <ul>
            <li onClick={() => {
              window.location.pathname='/editordeleterapper'
            }}
            id={window.location.pathname === "/editordeleterapper" ? "active" : ""}>
              <div className="icon">
              <DeleteIcon />
              </div>
              <div className="title">Delete Rapper</div>
            </li>
          </ul>
        ): ('hi')}
      </div>
    </section>
  );
};

export default SideBar;
