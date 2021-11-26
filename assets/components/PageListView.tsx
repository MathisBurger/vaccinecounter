import { CountEntity, VaccineEntity } from '../@types/BaseEntitys';
import '../styles/PageListView.scss';

type PageListViewProps = {
  elements: CountEntity[] | VaccineEntity[];
};

const PageListView = ({ elements }: PageListViewProps) => {
  const renderRow = (el: any) => {
    console.log(el);
    let childList = [];
    for (const i in el) {
      console.log(i);
      if (i === 'createdAt') {
        childList.push(<p>{new Date(el[i].timestamp * 1000).toISOString()}</p>);
      } else if (i === 'inHouse') {
        childList.push(<p>{el[i] === true ? 'Ja' : 'Nein'}</p>);
      } else {
        childList.push(<p>{'' + el[i]}</p>);
      }
    }
    return childList;
  };

  return (
    <div className="page-list-view">
      {elements.map((row, i) => (
        <div className="list-element" key={'index_' + i}>
          {renderRow(row)}
        </div>
      ))}
    </div>
  );
};

export default PageListView;
