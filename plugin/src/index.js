const t = require("@babel/types");
const syntaxJSX = require("@babel/plugin-syntax-jsx").default;

const ELEMENT_REPLACEMENT_MAP = {
    div: 'View',
    span: 'Text'
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
                let needTailwindImport = false;
                programPath.traverse({
                    JSXOpeningElement: function(path) {
                        transformJSXElement(path.node.name)
                    },
                    JSXClosingElement: function(path) {
                        transformJSXElement(path.node.name)
                    },
                    JSXAttribute: function (path) {
                        if (path.node.name.name === "className") {
                            needTailwindImport = true;
                            path.replaceWith(t.jsxAttribute(
                                t.jsxIdentifier("style"),
                                t.jsxExpressionContainer(t.callExpression(t.identifier("tailwind"), [path.node.value]))
                            ));
                        }
                    }
                });
                if (needTailwindImport) {
                    programPath.node.body.unshift(
                        t.importDeclaration(
                            [t.importDefaultSpecifier(t.identifier("tailwind"))],
                            t.stringLiteral("tailwind-rn")
                        )
                    );
                }
            }
        }
    };
};

module.exports = declare;
