import path from "path";
import { create } from "babel-test";
import { toMatchFile } from "jest-file-snapshot";

expect.extend({ toMatchFile });

const { fixtures } = create({ babelrc: true });

fixtures("babel-plugin-react-figma-tailwind", path.join(__dirname, "fixtures"));
