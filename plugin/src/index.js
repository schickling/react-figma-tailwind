const t = require("@babel/types");
const syntaxJSX = require("@babel/plugin-syntax-jsx").default;

const allHtmlElements = ["html","base","head","link","meta","script","style","title","address","article","body","h1","h6","footer","header","h2","h3","h4","h5","hgroup","nav","section","dd","dl","dt","div","figcaption","figure","hr","li","ol","ul","menu","main","p","pre","a","abbr","b","bdi","bdo","br","cite","code","data","time","dfn","em","i","kbd","mark","q","blockquote","rp","ruby","rt","rtc","rb","s","del","ins","samp","small","span","strong","sub","sup","u","var","wbr","area","map","audio","source","track","video","embed","object","param","canvas","noscript","caption","table","col","colgroup","tbody","tr","thead","tfoot","td","th","button","datalist","option","fieldset","label","form","input","keygen","legend","meter","optgroup","select","output","progress","textarea","details","dialog","menuitem","summary","content","element","shadow","template","acronym","applet","basefont","font","big","blink","center","command","dir","frame","frameset","isindex","listing","marquee","noembed","plaintext","spacer","strike","tt","xmp"];

const textClasses = ["block", "font-sans", "font-serif", "font-mono", "text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl", "text-7xl", "text-8xl", "text-9xl", "antialiased", "subpixel-antialiased", "italic", "not-italic", "font-thin", "font-extralight", "font-light", "font-normal", "font-medium", "font-semibold", "font-bold", "font-extrabold", "font-black", "normal-nums", "ordinal", "slashed-zero", "lining-nums", "oldstyle-nums", "proportional-nums", "tabular-nums", "diagonal-fractions", "stacked-fractions", "tracking-tighter", "tracking-tight", "tracking-normal", "tracking-wide", "tracking-wider", "tracking-widest", "leading-3", "leading-4", "leading-5", "leading-6", "leading-7", "leading-8", "leading-9", "leading-10", "leading-none", "leading-tight", "leading-snug", "leading-normal", "leading-relaxed", "leading-loose", "list-none", "list-disc", "list-decimal", "list-inside", "list-outside", "placeholder-transparent::placeholder", "placeholder-current::placeholder", "placeholder-black::placeholder", "placeholder-white::placeholder", "placeholder-gray-50::placeholder", "placeholder-gray-100::placeholder", "placeholder-gray-200::placeholder", "placeholder-gray-300::placeholder", "placeholder-gray-400::placeholder", "placeholder-gray-500::placeholder", "placeholder-gray-600::placeholder", "placeholder-gray-700::placeholder", "placeholder-gray-800::placeholder", "placeholder-gray-900::placeholder", "placeholder-red-50::placeholder", "placeholder-red-100::placeholder", "placeholder-red-200::placeholder", "placeholder-red-300::placeholder", "placeholder-red-400::placeholder", "placeholder-red-500::placeholder", "placeholder-red-600::placeholder", "placeholder-red-700::placeholder", "placeholder-red-800::placeholder", "placeholder-red-900::placeholder", "placeholder-yellow-50::placeholder", "placeholder-yellow-100::placeholder", "placeholder-yellow-200::placeholder", "placeholder-yellow-300::placeholder", "placeholder-yellow-400::placeholder", "placeholder-yellow-500::placeholder", "placeholder-yellow-600::placeholder", "placeholder-yellow-700::placeholder", "placeholder-yellow-800::placeholder", "placeholder-yellow-900::placeholder", "placeholder-green-50::placeholder", "placeholder-green-100::placeholder", "placeholder-green-200::placeholder", "placeholder-green-300::placeholder", "placeholder-green-400::placeholder", "placeholder-green-500::placeholder", "placeholder-green-600::placeholder", "placeholder-green-700::placeholder", "placeholder-green-800::placeholder", "placeholder-green-900::placeholder", "placeholder-blue-50::placeholder", "placeholder-blue-100::placeholder", "placeholder-blue-200::placeholder", "placeholder-blue-300::placeholder", "placeholder-blue-400::placeholder", "placeholder-blue-500::placeholder", "placeholder-blue-600::placeholder", "placeholder-blue-700::placeholder", "placeholder-blue-800::placeholder", "placeholder-blue-900::placeholder", "placeholder-indigo-50::placeholder", "placeholder-indigo-100::placeholder", "placeholder-indigo-200::placeholder", "placeholder-indigo-300::placeholder", "placeholder-indigo-400::placeholder", "placeholder-indigo-500::placeholder", "placeholder-indigo-600::placeholder", "placeholder-indigo-700::placeholder", "placeholder-indigo-800::placeholder", "placeholder-indigo-900::placeholder", "placeholder-purple-50::placeholder", "placeholder-purple-100::placeholder", "placeholder-purple-200::placeholder", "placeholder-purple-300::placeholder", "placeholder-purple-400::placeholder", "placeholder-purple-500::placeholder", "placeholder-purple-600::placeholder", "placeholder-purple-700::placeholder", "placeholder-purple-800::placeholder", "placeholder-purple-900::placeholder", "placeholder-pink-50::placeholder", "placeholder-pink-100::placeholder", "placeholder-pink-200::placeholder", "placeholder-pink-300::placeholder", "placeholder-pink-400::placeholder", "placeholder-pink-500::placeholder", "placeholder-pink-600::placeholder", "placeholder-pink-700::placeholder", "placeholder-pink-800::placeholder", "placeholder-pink-900::placeholder", "placeholder-opacity-0", "placeholder-opacity-5", "placeholder-opacity-10", "placeholder-opacity-20", "placeholder-opacity-25", "placeholder-opacity-30", "placeholder-opacity-40", "placeholder-opacity-50", "placeholder-opacity-60", "placeholder-opacity-70", "placeholder-opacity-75", "placeholder-opacity-80", "placeholder-opacity-90", "placeholder-opacity-95", "placeholder-opacity-100", "text-left", "text-center", "text-right", "text-justify", "text-transparent", "text-current", "text-black", "text-white", "text-gray-50", "text-gray-100", "text-gray-200", "text-gray-300", "text-gray-400", "text-gray-500", "text-gray-600", "text-gray-700", "text-gray-800", "text-gray-900", "text-red-50", "text-red-100", "text-red-200", "text-red-300", "text-red-400", "text-red-500", "text-red-600", "text-red-700", "text-red-800", "text-red-900", "text-yellow-50", "text-yellow-100", "text-yellow-200", "text-yellow-300", "text-yellow-400", "text-yellow-500", "text-yellow-600", "text-yellow-700", "text-yellow-800", "text-yellow-900", "text-green-50", "text-green-100", "text-green-200", "text-green-300", "text-green-400", "text-green-500", "text-green-600", "text-green-700", "text-green-800", "text-green-900", "text-blue-50", "text-blue-100", "text-blue-200", "text-blue-300", "text-blue-400", "text-blue-500", "text-blue-600", "text-blue-700", "text-blue-800", "text-blue-900", "text-indigo-50", "text-indigo-100", "text-indigo-200", "text-indigo-300", "text-indigo-400", "text-indigo-500", "text-indigo-600", "text-indigo-700", "text-indigo-800", "text-indigo-900", "text-purple-50", "text-purple-100", "text-purple-200", "text-purple-300", "text-purple-400", "text-purple-500", "text-purple-600", "text-purple-700", "text-purple-800", "text-purple-900", "text-pink-50", "text-pink-100", "text-pink-200", "text-pink-300", "text-pink-400", "text-pink-500", "text-pink-600", "text-pink-700", "text-pink-800", "text-pink-900", "text-opacity-0", "text-opacity-5", "text-opacity-10", "text-opacity-20", "text-opacity-25", "text-opacity-30", "text-opacity-40", "text-opacity-50", "text-opacity-60", "text-opacity-70", "text-opacity-75", "text-opacity-80", "text-opacity-90", "text-opacity-95", "text-opacity-100", "underline", "line-through", "no-underline", "uppercase", "lowercase", "capitalize", "normal-case", "truncate", "overflow-ellipsis", "overflow-clip", "align-baseline", "align-top", "align-middle", "align-bottom", "align-text-top", "align-text-bottom", "whitespace-normal", "whitespace-nowrap", "whitespace-pre", "whitespace-pre-line", "whitespace-pre-wrap", "break-normal", "break-words", "break-all"];

function convertObjectToObjectExpression(obj) {
    const propertyArray = Object.keys(obj)
        .map((key) => {
        const value = obj[key];
        if (typeof value === "string") {
            return t.objectProperty(t.identifier(key), t.stringLiteral(value))
        }
    }).filter((item) => !!item);
    if (propertyArray.length === 0) {
        return;
    }
    return t.objectExpression(propertyArray);
}

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
                    JSXText: function (path) {
                        const textValue = path.node.value;
                        const parentOpeningElement = path.parent.openingElement;
                        if (textValue.trim().length === 0 || !(parentOpeningElement.name.name && allHtmlElements.indexOf(parentOpeningElement.name.name) >= 0)) {
                            return;
                        }
                        const parentClassNameAttribute = parentOpeningElement.attributes.find(function (attribute) {
                            return attribute.name && attribute.name.name === "className";
                        });
                        const parentClassName = parentClassNameAttribute && parentClassNameAttribute.value.value || "";
                        const spittedClassName = parentClassName.split(/(\s+)/);
                        const textClassNames = spittedClassName.filter((name) => textClasses.indexOf(name) >= 0);
                        path.replaceWith(t.jsxElement(
                            t.jsxOpeningElement(t.jsxMemberExpression(t.jsxIdentifier("ReactFigma"), t.jsxIdentifier("Text")), textClassNames.length > 0 ? [
                                t.jsxAttribute(t.jsxIdentifier("className"), t.stringLiteral(textClassNames.join(" ")))
                            ] : []),
                            t.jSXClosingElement(t.jsxMemberExpression(t.jsxIdentifier("ReactFigma"), t.jsxIdentifier("Text"))),
                            [path.node]
                        ));
                    },
                });
                programPath.traverse({
                    JSXElement: function(path) {
                        const openingElement = path.node.openingElement;
                        if (allHtmlElements.indexOf(openingElement.name.name) < 0) {
                            return;
                        }
                        const closingElement = path.node.closingElement;
                        if (openingElement) {
                            openingElement.name = t.jsxMemberExpression(t.jsxIdentifier("ReactFigma"), t.jsxIdentifier( "View"));
                        }
                        if (closingElement) {
                            closingElement.name = t.jsxMemberExpression(t.jsxIdentifier("ReactFigma"), t.jsxIdentifier("View"));
                        }
                        needReactFigmaImport = true;
                    },
                    JSXAttribute: function (path) {
                        if (path.node.name.name === "className") {
                            needTailwindImport = true;
                            const defaultStyle = {
                                flexDirection: t.isJSXMemberExpression(path.parent.name) && path.parent.name.object.name === "ReactFigma"  && path.parent.name.property.name === "View" && (path.node.value && (path.node.value.value || "").split(/(\s+)/).indexOf("flex") >= 0) && "row",
                                alignItems: t.isJSXMemberExpression(path.parent.name) && path.parent.name.object.name === "ReactFigma"  && path.parent.name.property.name === "View" && "stretch",
                            }
                            const defaultStyleArray = [convertObjectToObjectExpression(defaultStyle)].filter((item) => !!item);
                            const allSiblings = [...path.getAllPrevSiblings(), ...path.getAllNextSiblings()];
                            const styleNode = allSiblings.find(function (sibling) {
                                return sibling.node && sibling.node.name.name === "style";
                            });
                            const previousStyle = styleNode && t.isJSXExpressionContainer(styleNode.node.value) ? [styleNode.node.value.expression] : [];

                            path.replaceWith(t.jsxAttribute(
                                t.jsxIdentifier("style"),
                                t.jsxExpressionContainer(t.arrayExpression([...previousStyle, ...defaultStyleArray, t.callExpression(t.identifier("tailwind"), [path.node.value])]))
                            ));
                            if (styleNode) {
                                styleNode.remove();
                            }
                        }
                    }
                });
                if (needTailwindImport) {
                    programPath.node.body.unshift(
                        t.importDeclaration(
                            [t.importDefaultSpecifier(t.identifier("tailwind"))],
                            t.stringLiteral("tailwind-rf")
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
