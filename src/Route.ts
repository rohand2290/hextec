class Route {
  private url: string;
  private handlerFunc: Function;

  public getUrl(): string {
    return this.url;
  }

  public setUrl(url: string): void {
    this.url = url;
  }

  public getHandlerFunc(): Function {
    return this.handlerFunc;
  }

  public setHandlerFunc(handlerFunc: Function): void {
    this.handlerFunc = handlerFunc;
  }

  constructor(url: string, handlerFunc: Function) {
    this.url = url;
    this.handlerFunc = handlerFunc;
  }
}
export default Route;
