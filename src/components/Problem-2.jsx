import React from "react";
import ModalA from "./ModalA";
import ModalB from "./ModalB";
import { useState } from "react";

const Problem2 = () => {
  const [isShownMdA, setIsShownMdA] = useState(false);
  const [isShownMdB, setIsShownMdB] = useState(false);

  const handleClickA = (event) => {
    // 👇️ toggle shown state
    setIsShownMdA((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  const handleClickB = (event) => {
    // 👇️ toggle shown state
    setIsShownMdB((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            onClick={handleClickA}
            type="button"
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            onClick={handleClickB}
            type="button"
          >
            US Contacts
          </button>
        </div>
      </div>

      {isShownMdA && <ModalA />}
      {isShownMdB && <ModalB />}
    </div>
  );
};

export default Problem2;
