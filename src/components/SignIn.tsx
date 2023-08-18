import googleLogo from "../assets/google.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../constans";
export const SignIn = () => {
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }
  return (
    <button
      onClick={signInWithGoogle}
      className="bg-blue-500 p-[2px]  text-white flex items-center active:scale-95 hover:scale-105 transition-all"
    >
      <div className="bg-white p-2">
        <img src={googleLogo} width={25} alt="" />
      </div>
      <span className="block mx-4">Sign in with Google</span>
    </button>
  );
};
