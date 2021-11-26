import { useEffect, useState } from 'react';
import ActionButton from '../components/ActionButton';
import AddVaccineDialog from '../components/AddVacineDialog';
import DisplayCard from '../components/DisplayCard';
import PageLayout from '../components/PageLayout';
import useRestService from '../hooks/useRestService';

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
    await RestService.createVaccine(vaccine);
    const resp = await RestService.getNumberOfVaccines();
    setVaccines(resp.count);
  };

  return (
    <>
      <PageLayout cols="cols-2">
        <DisplayCard label="Geimpfte Personen" content={'' + vaccines} />
        <ActionButton label="+" onClick={() => setShowDialog(true)} />
      </PageLayout>
      {showDialog ? (
        <AddVaccineDialog
          onClose={() => setShowDialog(false)}
          addVaccine={addVaccine}
        />
      ) : null}
    </>
  );
};

export default VaccinePage;
