import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "../pages/MainPage.tsx";
import {AnketaPage} from "../pages/AnketaPage/AnketaPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: ':id',
    element: <AnketaPage />
  }
])