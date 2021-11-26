import '../styles/actionbutton.css';

type ActionButtonProps = {
    label: string;
    onClick: () => void;
};

const ActionButton = ({label, onClick}: ActionButtonProps) => {

    return (
        <button onClick={onClick} className="action-button">
            {label}
        </button>
    );
};

export default ActionButton;