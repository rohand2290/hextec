import IResponse from "./IResponse";
declare class HTMLResponse implements IResponse {
    private response;
    constructor(response: string);
    getResponse: () => string;
}
export default HTMLResponse;
