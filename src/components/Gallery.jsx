import React, { useState, useEffect } from "react";
import GalleryPost from "./GalleryPost";
import { db } from "../fbConfig";
import UploadTile from "./UploadTile";

function Gallery({ username, loggedInUser }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let mounted = true;
    let unsubscribe = db
      .collection("posts")
      .where("user", "==", `${username}`)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        if (mounted) {
          setPosts(
            snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );
        }
      });

    return () => {
      unsubscribe();
      mounted = false;
    };
  }, [username]);

  return (
    <div className="gallery">
      {posts.map((post) => (
        <GalleryPost key={post.id} imgUrl={post.imgUrl || ""} />
      ))}

      {loggedInUser && <UploadTile username={username} />}
    </div>
  );
}

export default Gallery;
