import { useAuthState } from "react-firebase-hooks/auth";
import { ChatRoom } from "./components/ChatRoom";
import { SignOut } from "./components/SignOut";
import { auth } from "./constans";
import { SignIn } from "./components/SignIn";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="flex flex-col">
      <header className="flex justify-between  items-center bg-slate-950 text-white p-2 w-screen h-16">
        <h1 className="text-3xl ">Super Chat</h1>
        {auth.currentUser && <SignOut />}
      </header>
      <section
        className={
          "h-screen bg-slate-900 " + (!user ? "grid place-items-center" : "")
        }
      >
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
