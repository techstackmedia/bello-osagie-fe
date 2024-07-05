import React, { useState } from 'react';
import SelectProps from './interface';

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="border text-left rounded w-full py-3 text-sm px-3 text-[#676E7E] leading-tight focus:outline-[#90BCFE] focus:shadow-outline"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || "Select Role"}
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border rounded shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              className="py-2 px-4 text-sm text-[#475367] hover:bg-gray-200 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
