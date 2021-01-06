import * as ReactFigma from "react-figma";
import tailwind from "tailwind-rn";
import React from "react";

const Comp = props => {
  return <ReactFigma.View style={[{
    flexDirection: "row",
    alignItems: "stretch"
  }, tailwind("flex items-center")]} />;
};
