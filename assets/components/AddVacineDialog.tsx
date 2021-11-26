import { useState } from 'react';
import '../styles/addVaccineDialog.css';

type AddVaccineDialogProps = {
    onClose: () => void;
    addVaccine: (vaccine: string) => void;
};

const AddVaccineDialog = ({addVaccine, onClose}: AddVaccineDialogProps) => {

    const [vaccine, setVaccine] = useState<string>('BIONTECH');

    const onClick = () => {
        addVaccine(vaccine);
        onClose();
    }

    return (
        <div className="dialog">
            <h2>Impfung Registrieren</h2>
            <select onChange={(change) => setVaccine(change.target.value)}>
                <option value="BIONTECH">Biontech</option>
                <option value="ASTRACENECA">Astraceneca</option>
            </select>
            <button onClick={onClick}>
                Registrieren
            </button>
        </div>
    );
};

export default AddVaccineDialog;