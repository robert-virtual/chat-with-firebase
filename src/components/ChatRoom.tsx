import {
  DocumentData,
  FirestoreDataConverter,
  collection,
  doc,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, db } from "../constans";
import { Message } from "../Message";
import { MessageItem } from "./MessageItem";
import { useState } from "react";

export function ChatRoom() {
  const [messageText, setMessageText] = useState("");
  const messageRef = collection(db, "messages").withConverter<
    Message,
    DocumentData
  >(messageConverter);
  const q = query(messageRef, orderBy("createdAt"));
  const [messages] = useCollectionData(q);
  const handleSendMessage: React.KeyboardEventHandler<
    HTMLInputElement
  > = async (e) => {
    if (e.key == "Enter" && auth.currentUser) {
      await setDoc(doc(messageRef), {
        createdAt: new Date(),
        photoURL: auth.currentUser.photoURL,
        text: messageText,
        uid: auth.currentUser.uid,
      });
      setMessageText(() => "");
    }
  };
  return (
    <>
      <div className="p-4 overflow-y-hidden flex flex-col gap-2">
        {messages &&
          messages.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
      </div>
      <div className="flex items-center justify-center  fixed bottom-0 w-screen p-2 bg-gray-800">
        <input
          onKeyUp={handleSendMessage}
          className="bg-slate-700 p-2 rounded w-full text-white outline-none"
          onChange={(e) => setMessageText(e.target.value)}
          type="text"
          placeholder="Type a message..."
        />
      </div>
    </>
  );
}
const messageConverter: FirestoreDataConverter<Message, DocumentData> = {
  toFirestore: (message) => {
    return {
      text: message.text,
      uid: message.uid,
      photoURL: message.photoURL,
      createdAt: message.createdAt,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Message(
      data.text,
      data.uid,
      data.createdAt,
      data.photoURL,
      snapshot.id
    );
  },
};
