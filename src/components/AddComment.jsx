import React, { useState } from "react";
import { db } from "../fbConfig";
import firebase from "firebase/app";
import { connect } from "react-redux";

function AddComment({ postId, username }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment, postId);
    db.collection("posts")
      .doc(`${postId}`)
      .update({
        comments: firebase.firestore.FieldValue.arrayUnion({
          comment: comment,
          commentor: username,
          timestamp: new Date(),
        }),
      })
      .then(() => setComment(""));
  };

  return (
    <div className="add__comment">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add Comment..."
        />
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { username: state.username };
};

export default connect(mapStateToProps)(AddComment);
