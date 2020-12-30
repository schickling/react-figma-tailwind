const t = require("@babel/types");
const syntaxJSX = require("@babel/plugin-syntax-jsx").default;

function declare(api, options, dirname) {
    api.assertVersion(7);


    return {
        name: "babel-plugin-react-figma-tailwind",
        inherits: syntaxJSX,

        visitor: {
            Program(programPath) {
                let needTailwindImport = false;
                programPath.traverse({
                    JSXElement: function(path) {
                        const openingElement = path.node.openingElement;
                        const closingElement = path.node.closingElement;
                        const children = path.node.children || [];
                        const isTextElement = children.find(t.isJSXText) && !children.find(t.isJSXElement);
                        if (openingElement) {
                            openingElement.name.name = isTextElement ? "Text" : "View";
                        }
                        if (closingElement) {
                            closingElement.name.name = isTextElement ? "Text" : "View";
                        }
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
