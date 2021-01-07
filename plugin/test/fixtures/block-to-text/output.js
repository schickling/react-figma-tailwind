import * as ReactFigma from "react-figma";
import tailwind from "tailwind-rf";
import React from "react";

const Comp = props => {
  return <ReactFigma.View style={[tailwind("block")]}><ReactFigma.Text style={[tailwind("block")]}>Ready to dive in?</ReactFigma.Text></ReactFigma.View>;
};
