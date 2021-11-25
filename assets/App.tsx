import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";

const renderApp = () => {
    return (
        <Navbar />
    );
};

ReactDOM.render(renderApp(), document.getElementById('root'));