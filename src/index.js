import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.json";
import LandingProvider from "./context/LandingContext";
import "./index.css";
import "./fonts/tagtype-freefont.ttf";
import "animate.css";
import AuthProvider from "./context/authContext";
import RapperProvider from "./context/RapperContext";
import AlbumProvider from "./context/AlbumContext";

ReactDOM.render(
  <React.StrictMode>
    <LandingProvider>
      <AuthProvider>
        <RapperProvider>
          <AlbumProvider>
            <App />
          </AlbumProvider>
        </RapperProvider>
      </AuthProvider>
    </LandingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
