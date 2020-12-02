import React, { useState } from "react";
import Upload from "./Upload";
import { MdAddCircle } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import { IoIosCloseCircle } from "react-icons/io";

function UploadTile({ username }) {
  let [modal, setModal] = useState(false);

  const toggleModal = () => {
    let body = document.querySelector("body");
    if (modal) {
      setModal(false);
      body.classList.remove("modal__open");
    } else {
      setModal(true);
      body.classList.add("modal__open");
    }
  };

  const UploadModal = (
    <div className="upload__modal">
      <div className="upload__container">
        <div className="close__icon" onClick={toggleModal}>
          <IconContext.Provider
            value={{ className: "react__icons", size: "2em", color: "red" }}
          >
            <IoIosCloseCircle />
          </IconContext.Provider>
        </div>
        <Upload setModal={toggleModal} username={username} />
      </div>
    </div>
  );

  return (
    <div className="gallery__post upload__tile">
      <IconContext.Provider value={{ className: "react__icons", size: "3em" }}>
        <MdAddCircle onClick={() => toggleModal()} />
      </IconContext.Provider>
      {modal && UploadModal}
    </div>
  );
}

export default UploadTile;
