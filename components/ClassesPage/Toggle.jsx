import React from "react";
import { useContext } from "react";
import { ToggleContext } from "../../context/ToggleContext";

const Toggle = () => {
  const { handleOpen } = useContext(ToggleContext);

  return (
    <div className="cursor-pointer bg-darkGray" style={{zIndex: "1"}}>
      <img
        onClick={handleOpen}
        className="w-12 md:w-16 lg:w-auto p-2"
        src="/img/Layer.png"
        alt="opening sidebar menu"
      />
    </div>
  );
};

export default Toggle;
