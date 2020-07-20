import Route from "./Route";
declare const createApp: (routes: Array<Route>) => {
    getRoutes: () => Route[];
    run: (port: number) => void;
};
export default createApp;
