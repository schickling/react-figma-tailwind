const t = require("@babel/types");
const syntaxJSX = require("@babel/plugin-syntax-jsx").default;

const allHtmlElements = ["html","base","head","link","meta","script","style","title","address","article","body","h1","h6","footer","header","h2","h3","h4","h5","hgroup","nav","section","dd","dl","dt","div","figcaption","figure","hr","li","ol","ul","menu","main","p","pre","a","abbr","b","bdi","bdo","br","cite","code","data","time","dfn","em","i","kbd","mark","q","blockquote","rp","ruby","rt","rtc","rb","s","del","ins","samp","small","span","strong","sub","sup","u","var","wbr","area","map","audio","source","track","video","embed","object","param","canvas","noscript","caption","table","col","colgroup","tbody","tr","thead","tfoot","td","th","button","datalist","option","fieldset","label","form","input","keygen","legend","meter","optgroup","select","output","progress","textarea","details","dialog","menuitem","summary","content","element","shadow","template","acronym","applet","basefont","font","big","blink","center","command","dir","frame","frameset","isindex","listing","marquee","noembed","plaintext","spacer","strike","tt","xmp"];

function declare(api, options, dirname) {
    api.assertVersion(7);


    return {
        name: "babel-plugin-react-figma-tailwind",
        inherits: syntaxJSX,

        visitor: {
            Program(programPath) {
                let needTailwindImport = false;
                let needReactFigmaImport = false;
                programPath.traverse({
                    JSXElement: function(path) {
                        const openingElement = path.node.openingElement;
                        if (allHtmlElements.indexOf(openingElement.name.name) < 0) {
                            return;
                        }
                        const closingElement = path.node.closingElement;
                        const children = path.node.children || [];
                        const isTextElement = children.find(t.isJSXText) && !children.find(t.isJSXElement);
                        if (openingElement) {
                            openingElement.name = t.jsxMemberExpression(t.jsxIdentifier("ReactFigma"), t.jsxIdentifier(isTextElement ? "Text" : "View"));
                        }
                        if (closingElement) {
                            closingElement.name = t.jsxMemberExpression(t.jsxIdentifier("ReactFigma"), t.jsxIdentifier(isTextElement ? "Text" : "View"));
                        }
                        needReactFigmaImport = true;
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
                if (needReactFigmaImport) {
                    programPath.node.body.unshift(
                        t.importDeclaration(
                            [
                                t.importNamespaceSpecifier(t.identifier("ReactFigma"))
                            ],
                            t.stringLiteral("react-figma")
                        )
                    );
                }
            }
        }
    };
};

module.exports = declare;
