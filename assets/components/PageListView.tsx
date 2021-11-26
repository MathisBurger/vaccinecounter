import { CountEntity, VaccineEntity } from '../@types/BaseEntitys';
import '../styles/PageListView.css';

type PageListViewProps = {
    elements: CountEntity[] | VaccineEntity[];
};

const PageListView = ({elements}: PageListViewProps) => {

    const renderRow =(el: any) => {
        console.log(el);
        let childList = [];
        for (const i in el) {
            if (i === "createdAt") {
                //childList.push(<p>{new Date(el[i])}</p>);
            } else {
                childList.push(<p>{el[i]}</p>); 
            }
        }
        return childList;
    }

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