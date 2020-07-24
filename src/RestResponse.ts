import IResponse from "./IResponse";

class RestResponse implements IResponse {
  private response: string;
  responseToString(): string {
    return this.response;
  }

  constructor(response: string) {
    this.response = response;
  }
}
export default RestResponse;
