import {IRoutes} from "../types/routes.types";
import HomePage from "../pages/Private/HomePage";

const routes: IRoutes[] = [
  {
    name: "Home",
    path: "/",
    component: HomePage
  }
]

export default routes