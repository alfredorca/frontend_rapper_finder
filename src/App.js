//general imports
import { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import SideBar from "./components/SideBar";
import { AuthContext } from "./context/authContext";
import AddAlbumView from "./views/AddAlbumView";
import AddRapperView from "./views/AddRapperView";
import EasterEggView from "./views/EasterEggView";
import RapperEditView from "./views/EditDeleteRapperView";
import EditRapperView from "./views/EditRapperView";

//import views
import HomeView from "./views/HomeView";
import LandingView from "./views/LandingView";
import SingleAlbumView from "./views/SingleAlbumView";
import SingleRapperView from "./views/SingleRapperView";

function App() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <div className="row" style={{ zIndex: 10 }}>
        {loggedIn && (
          <div className="col-2 nopadding">
            <SideBar />
          </div>
        )}
        <div
          className={loggedIn ? `col-10 nopadding` : `col-12 container`}
          style={{ zIndex: 2 }}
        >
          <Switch>
            <Route exact path="/" component={LandingView} />
            <Route exact path="/easteregg" component={EasterEggView} />
            <AuthRoute exact path="/home" component={HomeView} />
            <AuthRoute
              exact
              path="/rapperDetails/:id"
              component={SingleRapperView}
            />
            <AuthRoute
              exact
              path="/albumDetails/:id"
              component={SingleAlbumView}
            />
            <AuthRoute exact path="/addrapper" component={AddRapperView} />
            <AuthRoute exact path="/addalbum" component={AddAlbumView} />
            <AuthRoute exact path="/editordeleterapper" component={RapperEditView} />
            <AuthRoute exact path="/editrapper/:id" component={EditRapperView} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
