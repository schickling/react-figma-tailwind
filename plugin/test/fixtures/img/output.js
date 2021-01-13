import * as ReactFigma from "react-figma";
import tailwind from "tailwind-rf";
import React from "react";

const Comp = props => {
  return <ReactFigma.Image style={[tailwind("h-8 w-auto")]} source={{
    uri: "https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg"
  }} alt="Workflow" />;
};
