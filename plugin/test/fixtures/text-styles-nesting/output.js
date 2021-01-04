import * as ReactFigma from "react-figma";
import tailwind from "tailwind-rn";
import React from "react";

const Comp = props => {
  return <ReactFigma.View style={[tailwind("text-blue-800")]}>
            <ReactFigma.View style={[tailwind("bg-blue-200 px-3 py-1 rounded-full font-semibold")]}><ReactFigma.Text style={[tailwind("text-blue-800 font-semibold")]}>
                Hello Tailwind
            </ReactFigma.Text></ReactFigma.View>
        </ReactFigma.View>;
};
