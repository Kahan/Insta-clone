import React from "react";

function GalleryPost({ imgUrl }) {
  return (
    <div className="gallery__post">
      {imgUrl ? <img src={imgUrl} alt="post" /> : <h1>Loading..</h1>}
    </div>
  );
}

export default GalleryPost;
