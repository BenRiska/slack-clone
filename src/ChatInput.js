import React, { useState } from "react";
import { Button } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";
import "./ChatInput.css";

function ChatInput({ channelName, channelId }) {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState();
  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }

    setInput("");
  };

  return (
    <div className="chatInput">
      <form onSubmit={sendMessage}>
        <input
          value={input}
          placeholder={`Message #${channelName?.toLowerCase()}`}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <Button type="submit">SEND</Button>
      </form>
    </div>
  );
}

export default ChatInput;
