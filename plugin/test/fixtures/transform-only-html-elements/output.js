import { View, Text } from "react-figma";
import tailwind from "tailwind-rn";
import React from "react";

const Comp = props => {
  return <Page>
            <View>
                <View style={tailwind("flex")}>
                    <Text style={tailwind("inline-flex items-center")}>
                        some text
                    </Text>
                </View>
            </View>
            <Component>
                some text
            </Component>
        </Page>;
};
