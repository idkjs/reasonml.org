

import * as React from "react";

function Button(Props) {
  var children = Props.children;
  return React.createElement("div", undefined, React.createElement("button", {
                  className: "transition-colors duration-200 inline-block text-base text-fire hover:text-white hover:bg-fire rounded border border-fire-80 px-5 py-2"
                }, children));
}

var make = Button;

export {
  make ,
  
}
/* react Not a pure module */