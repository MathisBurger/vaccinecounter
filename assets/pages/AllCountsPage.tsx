import { useEffect, useState } from 'react';
import { CountEntity } from '../@types/BaseEntitys';
import PageLayout from '../components/PageLayout';
import PageListView from '../components/PageListView';
import useRestService from '../hooks/useRestService';

const AllCountsPage = () => {
  const RestService = useRestService();
  const [counts, setCounts] = useState<CountEntity[]>([]);
  useEffect(() => {
    const fetch = async () => {
      const resp = await RestService.getAllCounts();
      setCounts(resp.counts);
    };
    fetch();
  }, []);
  return (
    <PageLayout cols="cols-1">
      <PageListView elements={counts} />
    </PageLayout>
  );
};

export default AllCountsPage;
