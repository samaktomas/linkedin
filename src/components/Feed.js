import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import Post from "./Post";
import {
  CalendarViewDay,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {}, [posts]);

  const sendPost = (e) => {
    e.preventDefault();

    setPosts([...posts]);
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {posts.map((post) => (
        <Post />
      ))}
      <Post
        name="Tomas Samak"
        description="This is test"
        message="Wow this works"
      />
    </div>
  );
}
