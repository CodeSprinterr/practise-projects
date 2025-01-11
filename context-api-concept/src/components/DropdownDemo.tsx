import { useState } from 'react';

/**
 * @typedef {Object} Option
 * @property {number} id
 * @property {string} label
 */

/** @type {Option[]} */
const options = [
  { id: 1, label: 'React Router' },
  { id: 2, label: 'Context API' },
  { id: 3, label: 'State Management' },
  { id: 4, label: 'Component Lifecycle' },
];

/**
 * @returns {JSX.Element}
 */
export default function DropdownDemo() {
  /** @type {[Option, React.Dispatch<React.SetStateAction<Option>>]} */
  const [selected, setSelected] = useState(options[1]); // Default to Context API

  /**
   * @param {React.ChangeEvent<HTMLSelectElement>} e
   */
  const handleChange = (e) => {
    const selectedOption = options.find(
      option => option.id === parseInt(e.target.value)
    );
    if (selectedOption) {
      setSelected(selectedOption);
      alert(`Selected: ${selectedOption.label}`);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div className="relative">
        <select
          value={selected.id}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '0.5rem',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            cursor: 'pointer'
          }}
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{ 
          fontSize: '1.125rem',
          fontWeight: '600',
          marginBottom: '0.5rem'
        }}>
          Selected Topic:
        </h3>
        <p>{selected.label}</p>
      </div>
    </div>
  );
}