import { useEffect, useState } from 'react';
import ActionButton from '../components/ActionButton';
import DisplayCard from '../components/DisplayCard';
import PageLayout from '../components/PageLayout';
import useRestService from '../hooks/useRestService';

const CountsPage = () => {
  const RestService = useRestService();
  const [counts, setCounts] = useState<number>(0);

  useEffect(() => {
    const fetch = async () => {
      const resp = await RestService.getNumberOfCounts();
      setCounts(resp.counts);
    };
    fetch();
  }, []);

  const addCount = async () => {
    await RestService.createCount(true);
    const resp = await RestService.getNumberOfCounts();
    setCounts(resp.counts);
  };

  const removeCount = async () => {
    await RestService.removeOldestCount();
    const resp = await RestService.getNumberOfCounts();
    setCounts(resp.counts);
  };

  return (
    <PageLayout cols="cols-3">
      <ActionButton label="-" onClick={removeCount} />
      <DisplayCard label="Personen im Haus" content={'' + counts} />
      <ActionButton label="+" onClick={addCount} />
    </PageLayout>
  );
};

export default CountsPage;
