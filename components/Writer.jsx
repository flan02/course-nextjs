"use client";

import { TypeWriter } from "react-typewritter";

const Typewriter = ({ elementType, text }) => {
  return (
    <>
      <TypeWriter
        elementType={elementType}
        text={text}
        classNames="text-4xl pb-4"
      />
    </>
  );
};

export default Typewriter;
