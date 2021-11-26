import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import VaccinePage from "./pages/VaccinePage";

const renderApp = () => {
    return (
        <>
            <Navbar />
            <VaccinePage />
            <Footer />
        </>
    );
};

ReactDOM.render(renderApp(), document.getElementById('root'));