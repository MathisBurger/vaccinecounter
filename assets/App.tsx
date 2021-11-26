import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const renderApp = () => {
    return (
        <>
            <Navbar />
            <HomePage />
            <Footer />
        </>
    );
};

ReactDOM.render(renderApp(), document.getElementById('root'));