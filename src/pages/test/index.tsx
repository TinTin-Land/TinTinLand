import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export default function App() {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="max-w-4xl mx-auto">
            <Select
                defaultValue={selectedOption}
                isMulti
                name=""
                onChange={setSelectedOption}
                options={options}
                className="basic-multi-select focus:border-yellow-500 focus:ring-red-500  outline-none"
                classNamePrefix="select"
            />
        </div>
    );
}
