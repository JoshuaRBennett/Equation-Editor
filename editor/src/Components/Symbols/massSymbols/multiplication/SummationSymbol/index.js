import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "muliplicationSymbol",
  children: [{ text: "\u00d7" }],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};

export default { slateDOM: dom, MathElement: Element };
