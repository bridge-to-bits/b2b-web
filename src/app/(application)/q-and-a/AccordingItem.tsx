import React from "react";

interface AccordionItemProps {
  index: number;
  isOpen: boolean;
  toggleDropdown: (index: number) => void;
  question: string;
  answer: string;
  backgroundClass: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  index,
  isOpen,
  toggleDropdown,
  question,
  answer,
  backgroundClass
}) => {
  return (
    <div className={`w-full font-rubik max-w-lg ${backgroundClass} rounded-lg shadow-md mb-6`}>
      <div
        onClick={() => toggleDropdown(index)}
        className="cursor-pointer py-6 px-8 text-center"
      >
        <h2 className="text-xl font-rubik font-medium text-[#D9D9D9]">
          {question}
        </h2>
        <span
          className={`transition-transform duration-300 transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          &#9660; {/* Символ стрелки */}
        </span>
      </div>

      {isOpen && (
        <div className="py-6 px-8 text-center  font-rubik text-[#D9D9D9]">
          <p className="text-xl font-rubik  font-medium mt-5">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
