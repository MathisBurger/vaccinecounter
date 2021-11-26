import { CountEntity, VaccineEntity } from '../@types/BaseEntitys';
import '../styles/PageListView.css';

type PageListViewProps = {
    elements: CountEntity[] | VaccineEntity[];
};

const PageListView = ({elements}: PageListViewProps) => {

    const renderRow =(el: any) => {
        let childList = [];
        for (let i=0; i<el.length; i++) {
            childList.push(<p>{el[i]}</p>);
        }
        return childList;
    }

    return (
        <div className="page-list-view">
            {elements.map((row) => (
                <div className="list-element">
                    {renderRow(row)}
                </div>
            ))}
        </div>
    );
};

export default PageListView;