import { useEffect, useState } from 'react';
import DisplayCard from '../components/DisplayCard';
import PageLayout from '../components/PageLayout';
import useRestService from '../hooks/useRestService';

const HomePage = () => {
  const RestService = useRestService();
  const [counts, setCounts] = useState<number>(0);
  const [vaccines, setVaccines] = useState<number>(0);
  useEffect(() => {
    const fetch = async () => {
      const respCounts = await RestService.getNumberOfCounts();
      setCounts(respCounts.counts);
      const respVaccines = await RestService.getNumberOfVaccines();
      setVaccines(respVaccines.count);
    };
    fetch();
  }, []);

  return (
    <PageLayout cols="cols-2">
      <DisplayCard label="Impfungen" content={'' + vaccines} />
      <DisplayCard label="Personen im Gebäude" content={'' + counts} />
    </PageLayout>
  );
};

export default HomePage;
