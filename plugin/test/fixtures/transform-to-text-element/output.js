import * as ReactFigma from "react-figma";
import tailwind from "tailwind-rn";
import React from "react";

const Comp = props => {
  return <ReactFigma.View style={[{
    flexDirection: "row"
  }, tailwind("flex")]}>
            <ReactFigma.View style={[tailwind("inline-flex items-center")]}><ReactFigma.Text>
                some text
            </ReactFigma.Text></ReactFigma.View>
        </ReactFigma.View>;
};
