import { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import './search.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const createOption = (label) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ''),
});

const defaultOptions = [
    createOption('One'),
    createOption('Two'),
    createOption('Three'),
];
export const Search = () => {


    

    const [cities, setCities] = useState(defaultOptions);
    // const [filter, setFilter] = useState([]);
    const [value, setValue] = useState([] | null);
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;


    const handleCreate = (inputValue) => {
        const newOption = createOption(inputValue);
        setCities(prev => [...prev, newOption]);
        setValue(newOption);
    }

    const customStyles = {
        control: (base) => ({
            ...base,
            width: 'auto',
            flex: 2
        })
    };

    return (
        <div className='box__input'>
            <CreatableSelect
                className='cities'
                options={cities}
                onChange={newValue => setValue(newValue)}
                onCreateOption={handleCreate}
                styles={customStyles}
                value={value}
            />

            <DatePicker 
                className='datepicker'
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    setDateRange(update);
                }}
                isClearable={true}
            />

        </div>
    )
}

/**
 * debo seguir ajustando el css tanto del select como del datepickker
 */