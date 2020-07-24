import IResponse from "./IResponse";

class HTMLResponse implements IResponse {
  private response: string;
  constructor(response: string) {
    this.response = response;
  }

  responseToString(): string {
    return this.response;
  }
}
export default HTMLResponse;
