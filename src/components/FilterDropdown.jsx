import PropTypes from "prop-types";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FilterDropdown = ({ label, options, selectedOption, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-48 px-4 py-2 border rounded-lg bg-white shadow-sm"
            >
                {selectedOption || label}
                <ChevronDown className="h-5 w-5 text-gray-500" />
            </button>

            {isOpen && (
                <div className="absolute mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                    <ul>
                        <li
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => {
                                onSelect("");
                                setIsOpen(false);
                            }}
                        >
                            Semua {label}
                        </li>
                        {options.map((option) => (
                            <li
                                key={option}
                                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => {
                                    onSelect(option);
                                    setIsOpen(false);
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

// Validasi PropTypes
FilterDropdown.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    selectedOption: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default FilterDropdown;
