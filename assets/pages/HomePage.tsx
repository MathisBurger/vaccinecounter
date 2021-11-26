import DisplayCard from "../components/DisplayCard";
import PageLayout from "../components/PageLayout";

const HomePage = () => {
    return (
        <PageLayout cols="cols-2">
            <DisplayCard label="Impfungen" content="12" />
            <DisplayCard label="Personen im Gebäude" content="12" />
        </PageLayout>
    );
};

export default HomePage;