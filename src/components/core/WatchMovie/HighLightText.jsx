import React from "react";

const HighlightText = ({text}) => {
  return (
    <span className="bg-gradient-to-b font-extrabold from-[#62d272] via-[#59c1c1] to-[#4abe5c] text-transparent bg-clip-text ">
      {" "}
      {text}
    </span>
   
  );
};

export default HighlightText;