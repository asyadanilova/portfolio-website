import React, { useState, useRef, useEffect } from 'react';
import './CustomSelect.css';

interface CustomSelectProps {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    options: Array<{ value: string; label: string; disabled?: boolean; hidden?: boolean }>;
    error?: boolean;
    className?: string;
    'aria-required'?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    value,
    onChange,
    placeholder,
    options,
    error = false,
    className = '',
    'aria-required': ariaRequired
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const selectRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    const visibleOptions = options.filter(option => !option.hidden);
    const selectedOption = options.find(option => option.value === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setFocusedIndex(-1);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (isOpen && focusedIndex >= 0 && listRef.current) {
            const focusedElement = listRef.current.children[focusedIndex] as HTMLElement;
            if (focusedElement) {
                focusedElement.scrollIntoView({
                    block: 'nearest',
                    behavior: 'smooth'
                });
            }
        }
    }, [focusedIndex, isOpen]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        setFocusedIndex(-1);
    };

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
        setFocusedIndex(-1);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                if (isOpen && focusedIndex >= 0) {
                    handleSelect(visibleOptions[focusedIndex].value);
                } else {
                    setIsOpen(true);
                }
                break;
            case 'Escape':
                setIsOpen(false);
                setFocusedIndex(-1);
                break;
            case 'ArrowDown':
                event.preventDefault();
                if (!isOpen) {
                    setIsOpen(true);
                } else {
                    setFocusedIndex(prev =>
                        prev < visibleOptions.length - 1 ? prev + 1 : 0
                    );
                }
                break;
            case 'ArrowUp':
                event.preventDefault();
                if (isOpen) {
                    setFocusedIndex(prev =>
                        prev > 0 ? prev - 1 : visibleOptions.length - 1
                    );
                }
                break;
            case 'Tab':
                setIsOpen(false);
                setFocusedIndex(-1);
                break;
        }
    };

    return (
        <div
            ref={selectRef}
            className={`custom-select ${error ? 'custom-select--error' : ''} ${className}`}
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-required={ariaRequired}
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            <div
                className={`custom-select__trigger ${isOpen ? 'custom-select__trigger--open' : ''}`}
                onClick={handleToggle}
            >
                <span className={`custom-select__value ${!value ? 'custom-select__value--placeholder' : ''}`}>
                    {selectedOption?.label || placeholder}
                </span>
                <div className={`custom-select__arrow ${isOpen ? 'custom-select__arrow--open' : ''}`}>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                </div>
            </div>

            {isOpen && (
                <ul
                    ref={listRef}
                    className="custom-select__dropdown"
                    role="listbox"
                    aria-label={placeholder}
                >
                    {visibleOptions.map((option, index) => (
                        <li
                            key={option.value}
                            className={`custom-select__option ${value === option.value ? 'custom-select__option--selected' : ''
                                } ${focusedIndex === index ? 'custom-select__option--focused' : ''
                                }`}
                            role="option"
                            aria-selected={value === option.value}
                            onClick={() => handleSelect(option.value)}
                            onMouseEnter={() => setFocusedIndex(index)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;