import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CountsPage from "./pages/CountsPage";

const renderApp = () => {
    return (
        <>
            <Navbar />
            <CountsPage />
            <Footer />
        </>
    );
};

ReactDOM.render(renderApp(), document.getElementById('root'));