import { useEffect, useState } from "react";
import { VaccineEntity } from "../@types/BaseEntitys";
import PageLayout from "../components/PageLayout";
import PageListView from "../components/PageListView";
import useRestService from "../hooks/useRestService";


const AllVaccinesPage = () => {

    const RestService = useRestService();
    const [counts, setCounts] = useState<VaccineEntity[]>([]);
    useEffect(() => {
        const fetch = async () => {
            const resp = await RestService.getAllVaccines();
            setCounts(resp.vaccines);
        };
        fetch();
    }, []);

    return (
        <PageLayout cols="cols-1">
            <PageListView elements={counts}/>
        </PageLayout>
    );
};

export default AllVaccinesPage;