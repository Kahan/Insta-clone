import React, { useState, useEffect } from "react";
import { db } from "../fbConfig";
import FeedPost from "./FeedPost";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        if (isMounted)
          setPosts(
            snapshot.docs.map((doc) => {
              return {
                ...doc.data(),
                postId: doc.id,
              };
            })
          );
      });

    return () => {
      isMounted = false;
    };
  });

  return (
    <div className="feed">
      {posts.map((post) => (
        <FeedPost key={post.postId} post={post} />
      ))}
    </div>
  );
}

export default Feed;
