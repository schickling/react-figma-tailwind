import * as ReactFigma from "react-figma";
import tailwind from "tailwind-rn";
import React from "react";

const Comp = props => {
  return <ReactFigma.View style={[{
    alignItems: "stretch"
  }, tailwind("block")]}><ReactFigma.Text style={[tailwind("block")]}>Ready to dive in?</ReactFigma.Text></ReactFigma.View>;
};
