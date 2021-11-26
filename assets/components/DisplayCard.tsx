import '../styles/DisplayCard.scss';

type DisplayCardProps = {
    label: string;
    content: string;
};

const DisplayCard = ({label, content}: DisplayCardProps) => {

    return (
        <div className="display-card">
                <div className="large-content">{content}</div>
                <div className="label">{label}</div>
        </div>
    );
};

export default DisplayCard;