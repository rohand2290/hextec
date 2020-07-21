class HTTPRequest {
  private urlMethod: string | undefined;
  private url: string | undefined;
  private params: object;
  private body: string;

  public getBody(): string {
    return this.body;
  }

  public setBody(body: string): void {
    this.body = body;
  }

  public getUrlMethod(): string | undefined {
    return this.urlMethod;
  }

  public setUrlMethod(urlMethod: string | undefined): void {
    this.urlMethod = urlMethod;
  }

  public getUrl(): string | undefined {
    return this.url;
  }

  public setUrl(url: string): void {
    this.url = url;
  }

  public getParams(): object {
    return this.params;
  }

  public setParams(params: object): void {
    this.params = params;
  }

  constructor(
    urlMethod: string | undefined,
    url: string | undefined,
    params: object,
    body: string
  ) {
    this.urlMethod = urlMethod;
    this.url = url;
    this.params = params;
    this.body = body;
  }
}

export default HTTPRequest;
