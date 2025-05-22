
const SelectBox = ({
  id = 'select-box',
  label = 'Select an option',
  value = '',
  onChange,
  options = [],
  placeholder = 'Choose an option',
  className = '',
}) => {
  return (
    <div className="w-full mx-8">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-black font-poppins border-brown-300"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={`border border-gray-300 bg-brown-300 text-white text-md rounded-lg focus:ring-brown-100 focus:border-brown-100 block w-full px-4 py-4 ${className}`}
      >
        <option disabled value="">
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
