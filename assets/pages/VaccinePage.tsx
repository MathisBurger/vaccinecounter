import { useEffect, useState } from "react";
import { VaccineEnum } from "../@types/BaseEntitys";
import ActionButton from "../components/ActionButton";
import AddVaccineDialog from "../components/AddVacineDialog";
import DisplayCard from "../components/DisplayCard";
import PageLayout from "../components/PageLayout";
import useRestService from "../hooks/useRestService";


const VaccinePage = () => {

    const RestService = useRestService();
    const [vaccines, setVaccines] = useState<number>(0);
    const [showDialog, setShowDialog] = useState<boolean>(false);

    useEffect(() => {
        const fetch = async () => {
            const resp = await RestService.getNumberOfVaccines();
            setVaccines(resp.count);
        };
        fetch();
    }, []);

    const addVaccine = async (vaccine: string) => {
        let vac: VaccineEnum;
        if (vaccine === 'BIONTECH') {
            vac = VaccineEnum.BIONTECH;
        } else if (vaccine === 'ASTRACENECA') {
            vac = VaccineEnum.ASTRACENECA;
        } else {
            vac = VaccineEnum.BIONTECH;
        }
        await RestService.createVaccine(vac);
        const resp = await RestService.getNumberOfVaccines();
        setVaccines(resp.count);
    }

    return (
        <>
            <PageLayout cols="cols-2">
                <DisplayCard label="Geimpfte Personen" content={'' + vaccines} />
                <ActionButton label="+" onClick={() => setShowDialog(true)} /> 
            </PageLayout>
            {showDialog ? 
            <AddVaccineDialog
                onClose={() => setShowDialog(false)}
                addVaccine={addVaccine}
            /> : null}
        </>
    );
};

export default VaccinePage;