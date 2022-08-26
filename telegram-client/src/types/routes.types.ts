import {RouteProps} from "react-router-dom";

export interface IRoutes {
  name: string
  path: string
  component: <T extends RouteProps>(props: T) => JSX.Element
}