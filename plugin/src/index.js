const t = require("@babel/types");
const syntaxJSX = require("@babel/plugin-syntax-jsx").default;

const ELEMENT_REPLACEMENT_MAP = {
    div: 'View'
}

function declare(api, options, dirname) {
    api.assertVersion(7);

    function transformJSXElement(path) {
        if (ELEMENT_REPLACEMENT_MAP[path.name]) {
            path.name = ELEMENT_REPLACEMENT_MAP[path.name];
        }
    }

    return {
        name: "babel-plugin-react-figma-tailwind",
        inherits: syntaxJSX,

        visitor: {
            Program(programPath) {
                programPath.traverse({
                    JSXOpeningElement: function(path) {
                        transformJSXElement(path.node.name)
                    },
                    JSXClosingElement: function(path) {
                        transformJSXElement(path.node.name)
                    }
                });
            }
        }
    };
};

module.exports = declare;
