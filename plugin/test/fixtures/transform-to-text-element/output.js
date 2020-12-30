import * as ReactFigma from "react-figma";
import tailwind from "tailwind-rn";
import React from "react";

const Comp = props => {
  return <ReactFigma.View style={tailwind("flex")}>
            <ReactFigma.Text style={tailwind("inline-flex items-center")}>
                some text
            </ReactFigma.Text>
        </ReactFigma.View>;
};
