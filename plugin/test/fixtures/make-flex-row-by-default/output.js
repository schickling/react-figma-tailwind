import * as ReactFigma from "react-figma";
import tailwind from "tailwind-rf";
import React from "react";

const Comp = props => {
  return <ReactFigma.View style={[tailwind("flex items-center")]} />;
};
