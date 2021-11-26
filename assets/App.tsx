import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllCountsPage from "./pages/AllCountsPage";

const renderApp = () => {
    return (
        <>
            <Navbar />
            <AllCountsPage />
            <Footer />
        </>
    );
};

ReactDOM.render(renderApp(), document.getElementById('root'));