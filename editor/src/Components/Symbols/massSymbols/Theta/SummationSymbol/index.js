import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "ThetaSymbol",
  children: [{ text: "\u03d1" }],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};

export default { slateDOM: dom, MathElement: Element };
