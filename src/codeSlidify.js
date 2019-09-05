import React from "react";
import { Slide } from "spectacle";
import CodeSlide from "spectacle-code-slide";

export default (aSlide) => {
  // Note: it should be possible to do <slide />, but for some reason it isn't..
  const { slide, ...other } = aSlide;
  const props = Object.assign({
    align: "center center",
    transition: ["slide"]
  }, other);
  
  return (
    <CodeSlide { ... props }>
      <aSlide.slide />
    </CodeSlide>
  );
};
