import Renderer from "./Renderer";
declare class PugRenderer implements Renderer {
    render: (fileName: string, context: object) => string;
}
export default PugRenderer;
