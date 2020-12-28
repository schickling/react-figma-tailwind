const t = require("@babel/types");
const syntaxJSX = require("@babel/plugin-syntax-jsx").default;

const ELEMENT_REPLACEMENT_MAP = {
    div: 'View'
}

function declare(api, options, dirname) {
    api.assertVersion(7);

    return {
        name: "babel-plugin-react-figma-tailwind",
        inherits: syntaxJSX,

        visitor: {
            Program(programPath) {
                programPath.traverse({
                    JSXIdentifier: function(path) {
                        if (ELEMENT_REPLACEMENT_MAP[path.node.name]) {
                            const newJSXIdentifier = t.jsxIdentifier(ELEMENT_REPLACEMENT_MAP[path.node.name])
                            path.replaceWith(newJSXIdentifier);
                        }
                    }
                });
            }
        }
    };
};

module.exports = declare;
