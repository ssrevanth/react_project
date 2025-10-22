import { createBrowserRouter} from "react-router-dom";
import Login from "../users/Login";

import Creation from "../task/Creation";
import Register from "../users/Register";
import GetTask from "../task/GetTask";
import Update from "../task/Update";
import PrivateRouter from "../helper/PrivateRouter";

export let routes= createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/createTask",
        element:<PrivateRouter><Creation/></PrivateRouter>
    },
    {
        path:"/gettask",
        element:<PrivateRouter><GetTask/></PrivateRouter>
    },
    {
        path:"/updateTask",
        element:<PrivateRouter><Update/></PrivateRouter>
    }
])
