import { createBrowserRouter } from "react-router-dom";
import User from "../components/user/user.jsx";
import SingleUser from "../components/user/SingleUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
  },
  {
    path: "/:id",
    element: <SingleUser />,
  },
]);

export default router;
