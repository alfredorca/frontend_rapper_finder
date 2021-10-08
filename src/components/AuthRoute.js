import { useContext } from "react";
import { Route } from "react-router";
import { AuthContext } from "../context/authContext";
import  LandingView  from "../views/LandingView";

const AuthRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Route pathname="/" component={LandingView} />
        )
      }
    />
  );
};

export default AuthRoute;