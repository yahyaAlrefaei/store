import { Outlet } from "react-router-dom";

const Home = () => {
    return (<>
    <h1>Home page</h1>
    <Outlet />
    </>);
}
 
export default Home;