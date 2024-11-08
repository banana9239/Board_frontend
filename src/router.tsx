import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root"
import NotFound from "./routes/NotFound";
import Home from "./routes/Home";
import Post from "./routes/Post";
import GithubLogin from "./routes/GithubLogin";

const router = createBrowserRouter([
    {path: "/", element: <Root/>, errorElement:<NotFound/>, children: [
        {path: "", element: <Home/>},
        {path: ":largePk", element: <Home/>},
        {path: ":largePk/:mediumPk", element: <Home/>},
        {path: ":largePk/:mediumPk/:smallPk", element: <Home/>},
        {path: ":largePk/:mediumPk/:smallPk/:boardPk", element: <Home/>},
        {path: "post/:postPk", element: <Post/>},
        {path: "social",children:[
            {
                path: "github",
                element: <GithubLogin/>
            },
        ]},
    ]},
])

export default router;