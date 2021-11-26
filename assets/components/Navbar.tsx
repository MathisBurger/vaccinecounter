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
            <div className={`link-box ${getClass('/all-counts')}`}>
                Personen Verlauf
            </div>
            <div className={`link-box ${getClass('/all-vaccines')}`}>
                Alle Impfungen
            </div>
            <div className={`link-box ${getClass('/counts')}`}>
                Personen
            </div>
            <div className={`link-box ${getClass('/vaccines')}`}>
                Impfungen
            </div>
        </div>
    );
};

export default Navbar;

