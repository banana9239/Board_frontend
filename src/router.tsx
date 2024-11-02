import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root"
import NotFound from "./routes/NotFound";
import Home from "./routes/Home";

const router = createBrowserRouter([
    {path: "/", element: <Root/>, errorElement:<NotFound/>, children: [
        {path: "", element: <Home/>},
        {path: ":largePk", element: <Home/>},
        {path: ":largePk/:mediumPk", element: <Home/>},
        {path: ":largePk/:mediumPk/:smallPk", element: <Home/>},
        {path: ":largePk/:mediumPk/:smallPk/:boardPk", element: <Home/>},
        {path: "post/postPk", element: <Home/>},
    ]},
])

export default router;