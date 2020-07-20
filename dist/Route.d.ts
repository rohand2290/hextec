declare class Route {
    private url;
    private handlerFunc;
    getUrl(): string;
    setUrl(url: string): void;
    getHandlerFunc(): Function;
    setHandlerFunc(handlerFunc: Function): void;
    constructor(url: string, handlerFunc: Function);
}
export default Route;
