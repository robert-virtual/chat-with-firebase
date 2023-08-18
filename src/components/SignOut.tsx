import { auth } from "../constans";

export function SignOut() {
  function handleSignOut() {
    auth.signOut();
  }
  return (
    <button
      className="active:scale-95 hover:scale-105 bg-gray-700 p-2 rounded-md transition-all"
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  );
}
