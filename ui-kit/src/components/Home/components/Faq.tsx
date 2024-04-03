import React, { useState } from 'react';

interface AccordionProps {
    children: React.ReactNode;
}

interface AccordionItemProps {
    title: string;
    content: string;
    isOpen?: boolean;
    onClick?: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleItemClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-2">
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child as React.ReactElement<AccordionItemProps>, {
                    isOpen: openIndex === index,
                    onClick: () => handleItemClick(index),
                })
            )}
        </div>
    );
};

const AccordionItem: React.FC<AccordionItemProps> = ({
                                                         title,
                                                         content,
                                                         isOpen,
                                                         onClick,
                                                     }) => {
    return (
        <div className="border rounded-2xl max-w-[680px] mx-auto">
            <div className="cursor-pointer" onClick={onClick} >
                <div className="p-4 md:p-8 flex justify-between items-center gap-4">
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 transition-transform transform duration-700 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                        />
                    </svg>
                </div>
            </div>
            {isOpen && (
                <div className={`px-4 md:px-8 md:pb-8 text-[#202125a3] transition-all duration-700 `}>
                    <p className={` transition-all duration-700`}>{content}</p>
                </div>
            )}
        </div>
    );
};

export { Accordion, AccordionItem };
