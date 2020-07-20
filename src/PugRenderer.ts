import pug from "pug";
import Renderer from "./Renderer";

class PugRenderer implements Renderer {
  render = (fileName: string, context: object): string => {
    const functionRenderer = pug.compileFile(fileName);
    return functionRenderer(context);
  };
}

export default PugRenderer;
