import useActiveRoute from "../hooks/useActiveRoute";
import "../styles/navbar.css";

const Navbar = () => {
    const activeRoute = useActiveRoute();

    const getClass = (path: string) => {
        return activeRoute === path ? 'active' : '';
    }

    return (
        <div className="navbar">
            <div className={`link-box ${getClass('/home')}`}>
                Home
            </div>
        </div>
    );
};

export default Navbar;

