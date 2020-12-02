import React from "react";
import Avatar from "@material-ui/core/Avatar";
import AddComment from "./AddComment";
import Comments from "./Comments";
import { Link } from "react-router-dom";
// import PostLike from "./PostLike";

function FeedPost({ post }) {
  const { imgUrl, user, caption, postId, comments } = post;
  return (
    <div className="post">
      <div className="post__top">
        <Avatar alt={user} src="./unknown.png" />
        <Link to={`/profile/${user}`}>
          <p className="post__username">{user}</p>
        </Link>
      </div>
      {/* Avatar and username */}

      <img className="post__image" src={imgUrl} alt="post" />
      {/* Picture */}

      {/* <PostLike /> */}

      <p className="post__text">
        <strong>{user}: </strong>
        {caption}
      </p>
      {/* Caption */}

      <Comments comments={comments} />
      {/* Comments */}

      <AddComment postId={postId} />
      {/* Add comment */}
    </div>
  );
}

export default FeedPost;
