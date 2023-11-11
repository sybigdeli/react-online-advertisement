import propTypes from "prop-types";

const Select = ({
  selectId,
  label,
  disabledOptions,
  optionsArray,
  ...props
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <label htmlFor={selectId}>{label}</label>

      <select
        name={selectId}
        id={selectId}
        className="border border-primary-600 rounded-xl px-2 py-1 cursor-pointer transition focus:outline-primary-600"
        defaultValue={disabledOptions}
        {...props}
      >
        <option  value={disabledOptions} disabled>
          {disabledOptions}
        </option>
        {optionsArray.map((option , index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  selectId: propTypes.string,
  label: propTypes.string,
  disabledOptions: propTypes.string,
  optionsArray: propTypes.array,
};

export default Select;
