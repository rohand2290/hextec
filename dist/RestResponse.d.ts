import IResponse from "./IResponse";
declare class RestResponse implements IResponse {
    private response;
    getResponse: () => string;
    constructor(response: string);
}
export default RestResponse;
