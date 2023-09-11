import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const signInWithGoogle = ({ setIsAuth }) => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      // redirect to home page
      window.location.pathname = "/";
      window.location.reload();
    });
  };
  return (
    <div className="loginPage">
      <p>Sign in With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
