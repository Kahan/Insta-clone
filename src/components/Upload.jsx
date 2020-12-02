import React, { useState } from "react";
import firebase from "firebase/app";
import { db, storage } from "../fbConfig";
import { MdCloudUpload } from "react-icons/md";
import { Filler } from "./ProgressBar";
import { toast } from "react-toastify";

function Upload({ username, setModal }) {
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState();
  const [disableButton, setDisableButton] = useState(true);

  const handleUpload = (e) => {
    const file = e.target.files[0];

    const storageRef = storage.ref();
    let uploadTask = storageRef.child(file.name).put(file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            break;

          case "storage/canceled":
            break;

          case "storage/unknown":
            break;
          default:
            break;
        }
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL); //change code HERE LATER
          setDownloadUrl(downloadURL);
          setDisableButton(false);
        });
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let postData = {
      user: username,
      caption,
      imgUrl: downloadUrl,
      likes: 0,
      comments: [],
      timestamp: new Date(),
    };

    db.collection("posts")
      .doc()
      .set({ ...postData })
      .then(() => {
        toast("Post Uploaded 🎉🎉");
        setCaption("");
        setModal();
        // UPDATE POST COUNT
        db.collection("users")
          .doc(`${username}`)
          .update({
            postCount: firebase.firestore.FieldValue.increment(1),
          });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div>
      <form
        autoComplete="off"
        className="new__post"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div
          className="uploaded__img"
          style={{ backgroundImage: `url(${downloadUrl})` }}
        ></div>
        <label id="add__image" htmlFor="upload">
          <MdCloudUpload />
          <Filler percentage={progress} />
        </label>
        <input
          type="file"
          name="upload"
          id="upload"
          onChange={(e) => handleUpload(e)}
        />
        <input
          type="text"
          name="caption"
          placeholder="Add caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <button disabled={disableButton}>Post</button>
      </form>
    </div>
  );
}

export default Upload;
