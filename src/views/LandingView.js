import { useContext } from "react";
import LandingFirst from "../components/LandingFirst";
import LandingLogin from "../components/LandingLogin";
import LandingSignUp from "../components/SignUp";
import { LandingContext } from "../context/LandingContext";


const LandingView = () => {
  const { login, signup } = useContext(LandingContext);

  return (
    <section className="mainLanding">
      {!login ? (
        <LandingFirst/>
        ) : (
          <LandingLogin/>
        )
      
      
      }
      {!signup ? ('') : (<LandingSignUp/>)}
    </section>
  );
};

export default LandingView;
