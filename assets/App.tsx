import ReactDOM from "react-dom";
import useRestService from "./hooks/useRestService";

const renderApp = () => {
    const restService = useRestService();
    console.log(restService.get("/api/getInformation"));
    return (
        <h1>Hello World</h1>
    );
};

ReactDOM.render(renderApp(), document.getElementById('root'));