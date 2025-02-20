import { Outlet } from "react-router";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div className="container mx-auto">
            <Navber />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;