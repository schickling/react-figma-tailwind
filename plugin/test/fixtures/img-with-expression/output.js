import * as ReactFigma from "react-figma";
import tailwind from "tailwind-rf";
import React from "react";
import img from "./img.png";

const Comp = props => {
  return <ReactFigma.Image style={[tailwind("h-8 w-auto")]} source={{
    uri: img
  }} alt="Workflow" />;
};
