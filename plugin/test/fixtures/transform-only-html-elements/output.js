import * as ReactFigma from "react-figma";
import tailwind from "tailwind-rn";
import React from "react";

const Comp = props => {
  return <Page>
            <View>
                <ReactFigma.View style={[{
        flexDirection: "row",
        alignItems: "stretch"
      }, tailwind("flex")]}>
                    <ReactFigma.View style={[{
          alignItems: "stretch"
        }, tailwind("inline-flex items-center")]}><ReactFigma.Text>
                        some text
                    </ReactFigma.Text></ReactFigma.View>
                </ReactFigma.View>
            </View>
            <Component>
                some text
            </Component>
        </Page>;
};
