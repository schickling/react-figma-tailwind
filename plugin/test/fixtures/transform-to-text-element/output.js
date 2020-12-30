import tailwind from "tailwind-rn";
import React from "react";

const Comp = props => {
  return <View style={tailwind("flex")}>
            <Text style={tailwind("inline-flex items-center")}>
                some text
            </Text>
        </View>;
};
