import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const renderApp = () => {
    return (
        <>
            <Navbar />
            <Footer />
        </>
    );
};

ReactDOM.render(renderApp(), document.getElementById('root'));