import { Route, Routes } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import HomePage from "./pages/users/homePage";

const renderUserRouter = () => {
    const userRouters = [
            {
                path: ROUTERS.USER.HOME,
                component: <HomePage />,
            }
        ];
    
        console.log(userRouters)
    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => 
                    (<Route key={key} path={item.path} element={item.component}></Route>)
                )}
            </Routes> 
        </MasterLayout>
    );
};

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;