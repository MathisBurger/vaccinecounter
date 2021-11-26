import AppRoutes from "../AppRoutes";
import useActiveRoute from "../hooks/useActiveRoute";
import "../styles/navbar.css";

const Navbar = () => {
    const activeRoute = useActiveRoute();

    const getClass = (path: string) => {
        return activeRoute === path ? 'active' : '';
    }

    return (
        <div className="navbar">
            <div className={`link-box ${getClass(AppRoutes.home?.path!)}`}>
               {AppRoutes.home?.name!}
            </div>
            <div className={`link-box ${getClass(AppRoutes.allCounts?.path!)}`}>
                {AppRoutes.allCounts?.name!}
            </div>
            <div className={`link-box ${getClass(AppRoutes.allVaccines?.path!)}`}>
                {AppRoutes.allVaccines?.name!}
            </div>
            <div className={`link-box ${getClass(AppRoutes.counts?.path!)}`}>
                {AppRoutes.counts?.name!}
            </div>
            <div className={`link-box ${getClass(AppRoutes.vaccines?.path!)}`}>
                {AppRoutes.vaccines?.name!}
            </div>
        </div>
    );
};

export default Navbar;

