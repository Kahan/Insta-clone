import React from "react";
import { Link } from "react-router-dom";

function Comments({ comments }) {
  return (
    <div className="comments">
      {comments
        ? comments.map((comment, index) => (
            <div key={index} className="comment">
              <p>
                <Link to={`/profile/${comment.commentor}`}>
                  <strong>{comment.commentor}: </strong>
                </Link>
                {comment.comment}
              </p>
            </div>
          ))
        : null}
    </div>
  );
}

export default Comments;
