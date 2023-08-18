import { FC } from "react";
import defaultUserImage from "../assets/user.png";
import { Message } from "../Message";
import { auth } from "../constans";
interface Props {
  message: Message;
}
export const MessageItem: FC<Props> = ({ message }) => {
  return (
    <div
      className={
        "flex gap-[6px]  " +
        (auth.currentUser?.uid == message.uid ? "flex-row-reverse" : "")
      }
    >
      <div className="text-white rounded-full bg-blue-500 p-1 w-7 h-7">
        <img
          src={message.photoURL || defaultUserImage}
          alt=""
          width={25}
          height={25}
          className="rounded-full"
        />
      </div>
      <p
        className={
          "text-white rounded-full  py-1 px-2 " +
          (auth.currentUser?.uid == message.uid
            ? "bg-blue-500"
            : "bg-slate-500")
        }
      >
        {message.text}
      </p>
    </div>
  );
};
