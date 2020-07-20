import Route from "./Route";
declare class HextecCreator {
    static createApp: (routes: Array<Route>) => {
        getRoutes: () => Route[];
        run: (port: number) => void;
    };
}
export default HextecCreator;
